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
                         <Col sm="12" md={{ size: 8, offset: 3 }}><h1 className ="animated fadeIn">Active fundraisers</h1>
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
