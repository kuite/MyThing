import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col } from 'reactstrap';


export class IncreaseHeader extends Component{

    render(){
        return(
            <div className ="SectionsHeader">                               
                <Container>
                    <Row>
                        <Col sm={{size:12}}><h1>Increase your fund in three ways</h1>
                        <br/>
                        <p>
                        - Add your idea for and expect sponsors <br/>
                        - Contributing to other ideas becoming an investor  <br/>
                        - Purchase a plan and participate in the cryptocurrency rotation <br/>
                        </p>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};