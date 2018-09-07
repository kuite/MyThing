import React, { Component } from 'react';

import {Container, Row, Col } from 'reactstrap';

import fundraiseimg from '../../img/fundraiseimg.jpg'

export class IdeaHeader extends Component{

    render(){
        return(
            <div className ="SectionsHeader">      
             <div className ="HeaderLeft">                         
                <Container>
                    <Row>
                         <Col sm="12" md={{ size: 8, offset: 3 }}><h1>Idea Title</h1>
                        <p>Category, bussiness/non profit</p> 
                        <p>27.01.1995 - 31.12.2027</p> 
                        </Col>
                    </Row>
                </Container>
                </div>
                
                
                <div className = "SectionHeaderRight">
                
                    <img alt ="Fundraise" src={fundraiseimg}/> 

                </div>
            </div>
        )
    }
};
