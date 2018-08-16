import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import MainImage from '../img/mainimage.jpg';



export class Header extends Component{

    render(){
        return(
            <div className = "Header">
             
            
                <div className ="HeaderLeft">
                <Container>
                   <Row>
                        <Col sm="12" md={{ size: 8, offset: 3 }}>
                            <h1>Fundraising for people <br/>and ideas</h1>
                         </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 3 }}>
                            <p>Get started now.</p>
                         </Col>
                    </Row>
                         
                </Container>

                </div>


                <div className = "HeaderRight">
                
                    <img src={MainImage} alt={"logo"}/> 

                </div>


            </div>
        )
    }
};


export default Header;


