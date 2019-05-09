import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {I18n, setLocale} from 'react-redux-i18n';
import {connect} from 'react-redux';

import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import MainImage from '../../img/mainimage.jpg';




export class Header extends Component{

    render(){
        return(
            <div className = "Header">
             
            
                <div className ="HeaderLeft">
                <Container>
                   <Row>
                        <Col sm="12" md={{ size: 8, offset: 3 }}>
                            <h1 className ="animated fadeIn">{I18n.t('Fundraising for people and ideas')} </h1>
                         </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 3 }}>
                            <p className ="animated fadeIn">{I18n.t('The place where you can help & earn')} </p>
                         </Col>
                    </Row>

                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 3 }}>
                            <Link to ="/increase"><button className="Login animated fadeInUp">{I18n.t('startNow')}</button></Link>
                         </Col>
                    </Row>
                         
                </Container>

                </div>


                <div className = "HeaderRight">
                
                    <img className ="animated fadeIn" src={MainImage} alt={"logo"}/> 

                </div>


            </div>
        )
    }
};


function mapStateToProps(state) {

    const { lang } = state;
    return {
      lang: state.i18n.locale,
    }
}


export default connect(mapStateToProps)(Header) 


