import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class Footer extends Component{

    render(){
        return(
            <div>
                <div className ="FooterFirstLevel">
                    <Row>
                        
                        <Col sm={{size:4}}>CERTIFICATES
                        </Col>
                        <Col sm={{size:4}}>
                            <h3>Funraising for:</h3>
                            <p>Medical<br/>
                            Passion<br/>
                            Family<br/>
                            Start-up<br/>
                            Animals</p>

                        </Col>
                        <Col sm={{size:4}}>
                            <h3>HedgeFunds:</h3>
                            <p><Link to ="/lightning">Lightning</Link><br/>
                               <Link to ="/storm">Storm</Link></p>
                        </Col>
                        
                    </Row>
                    </div>
                    <div className ="FooterSecondLevel">
                    
                        
                            <Col sm={{size:12}}><p>© 2018 Helping Hedge
                                <Link to ="/policy">Terms</Link>
                                <Link to ="/policy">Privacy</Link></p>

                            </Col>
                        
                    
                    </div>
            </div>
        )
    }
}








