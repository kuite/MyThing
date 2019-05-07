import React, { Component } from 'react';

import {Container, Row, Col } from 'reactstrap';

import planimg from '../../../img/planimg.jpg'

export class StormHeader extends Component{

    render(){
        return(
            <div className ="SectionsHeader">      
             <div className ="HeaderLeft">                         
                <Container>
                    <Row>
                         <Col sm="12" md={{ size: 8, offset: 3 }}><h1 className ="animated fadeIn">Storm Hedgefund</h1>
                        <p className ="animated fadeInUp">Long term - it is designed for mature investors. </p> 
                        </Col>
                    </Row>
                </Container>
                </div>
                
                
                <div className = "SectionHeaderRight">
                    <img className ="animated fadeIn" alt ="Storm Plan" src={planimg}/> 
                </div>
            </div>

        )
    }
};
