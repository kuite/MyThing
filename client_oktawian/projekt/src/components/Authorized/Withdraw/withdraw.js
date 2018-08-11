import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col } from 'reactstrap';
import {Btc} from '../../../btc_graph/src/index';

export class Withdraw extends Component{

    render(){
        return(     
            <div className ="HomeFund">                     
                <Container>
                    <Row>
                    
                        <Col sm={{size:12}}>
                        <div class ="BitcoinAvailable">
                        <h1>Withdraw:</h1>
                        <h3> Available funds: 3,04343 BTC </h3>
                        </div>
                        </Col>
                    
                    </Row>
                </Container>
             </div>
        )
    }
};
