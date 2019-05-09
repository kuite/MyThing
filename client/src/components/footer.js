import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import {I18n, setLocale} from 'react-redux-i18n';
import {connect} from 'react-redux';

import Certificate1 from '../img/certificate1.svg'
import Certificate2 from '../img/certificate2.svg'
import Certificate3 from '../img/certificate3.svg'

 export class Footer extends Component{

    render(){
        return(
            <div>
                <div className ="FooterFirstLevel">
                    <Row>
                        
                        <Col sm={{size:5}}>
                        <p><img alt ="Certyficate" className="Certificate" src ={Certificate1}/> {I18n.t('Policy guarantees the security of your funds')} </p>
                        <p><img alt ="Certyficate" className="Certificate" src ={Certificate3}/> {I18n.t('Chance for reliable support')} </p>
                        <p><img alt ="Certyficate" className="Certificate" src ={Certificate2}/> {I18n.t('100% of your data is safety')} </p>
                        </Col>
                        <Col sm={{size:4}}>
                            <h3>{I18n.t('Funraising for:')} </h3>
                            <p>{I18n.t('Medical')} <br/>
                            {I18n.t('Passion')}  <br/>
                            {I18n.t('Family')} <br/>
                            {I18n.t('Start-up')} <br/>
                            {I18n.t('Animals')} </p>

                        </Col>
                {/*}        <Col sm={{size:3}}>
                            <h3>HedgeFunds:</h3>
                            <p><Link to ="/lightning">Lightning</Link><br/>
                               <Link to ="/storm">Storm</Link></p>
                        </Col>
               */}
                    </Row>
                    </div>
                    <div className ="FooterSecondLevel">
                    
                        <Container>
                            <Col sm={{size:12}}><p>© 2018 Helping Hedge
                                <Link to ="/policy">{I18n.t('Terms')} </Link>
                                <Link to ="/policy">{I18n.t('Privacy')} </Link></p>

                            </Col>
                        </Container>
                        
                    
                    </div>
            </div>
        )
    }
}


function mapStateToProps(state) {

    const { lang } = state;
    return {
      lang: state.i18n.locale,
    }
}


export default connect(mapStateToProps)(Footer) 






