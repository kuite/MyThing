import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';



export class Header extends Component{

    render(){
        return(
            <div className = "Header">
             
            
                <div className ="HeaderLeft">
                <Container>
                   <Row>
                        <Col sm="12" md={{ size: 8, offset: 3 }}>
                            <h1>Where ideas turning <br/> into reality</h1>
                         </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 3 }}>
                            <p>The place where business and cooperation work efficent</p>
                         </Col>
                    </Row>
                         
                </Container>

                </div>


                <div className = "HeaderRight">
                </div>


            </div>
        )
    }
};


export default Header;


