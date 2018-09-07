import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import MainImage from '../../img/mainimage.jpg';



export class Header extends Component{

    render(){
        return(
            <div className = "Header">
             
            
                <div className ="HeaderLeft">
                <Container>
                   <Row>
                        <Col sm="12" md={{ size: 8, offset: 3 }}>
                            <h1 className ="animated fadeIn">Fundraising for people <br/>and ideas</h1>
                         </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 3 }}>
                            <p className ="animated fadeIn">the place where you can help & earn</p>
                         </Col>
                    </Row>

                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 3 }}>
                            <Link to ="/increase"><div className="Login animated fadeInUp">Start Now!</div></Link>
                         </Col>
                    </Row>
                         
                </Container>

                </div>


                <div className = "HeaderRight">
                
                    <img className ="animated fadeIn" src={MainImage} alt={"logo"}/> 

                </div>


            </div>
        )
    }
};


export default Header;


