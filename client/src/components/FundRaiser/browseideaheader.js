import React, { Component } from 'react';
import {I18n, setLocale} from 'react-redux-i18n';
import {Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import fundraiseimg from '../../img/fundraiseimg.jpg'

class Browseideaheader extends Component{

    render(){
        return(
            <div className ="SectionsHeader">      
             <div className ="HeaderLeft">                         
                <Container>
                    <Row>
                         <Col sm="12" md={{ size: 8, offset: 3 }}><h1 className ="animated fadeIn">{I18n.t('activeFundraisers')}</h1>
                        <p className ="animated fadeInUp">the place where you can help & earn</p> 
                        </Col>
                    </Row>
                </Container>
                </div>
                
                
                <div className = "SectionHeaderRight">
                
                    <img className ="animated fadeIn" alt ="FundRaiser" src={fundraiseimg}/> 

                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        lang: state.i18n.locale,
    }
}

export default connect(mapStateToProps)(Browseideaheader)
