import React, { Component } from 'react';

import {Container, Row, Col } from 'reactstrap';

import fundraiseimg from '../../img/fundraiseimg.jpg'

export class Browseideaheader extends Component{

    render(){
        return(
            <div className ="SectionsHeader">      
             <div className ="HeaderLeft">                         
                <Container>
                    <Row>
                         <Col sm="12" md={{ size: 8, offset: 3 }}><h1>Create something fantastic</h1>
                        <p>Browse ideas to find something for you</p> 
                        </Col>
                    </Row>
                </Container>
                </div>
                
                
                <div className = "SectionHeaderRight">
                
                    <img alt ="FundRaiser" src={fundraiseimg}/> 

                </div>
            </div>
        )
    }
};
