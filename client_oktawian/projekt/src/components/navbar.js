import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
import {Modalfinal} from './modal';

import { Link } from 'react-router-dom';


export class Navbar extends Component{

    render(){
        return(
            
            <div className ="Navbar">
                <Container>
                    <Row>
                        <Col sm={{size:3,}}>Logo</Col>
                        <Col><Menu/></Col>
                    </Row>
                </Container>
            </div>
            
        )
    }
}

export class Menu extends Component{

    render(){
        return(

             <div className = "Menu">
                <Container>
                    <Row>
                        <Col><a href = "/fund">Fund</a></Col>
                        <Col><a href = "/browseideas">Browse ideas</a></Col>
                        <Col><a href = "/earnwithus">Earn with us</a></Col>
                        <Col><a href = "/whoweare">Who we are</a></Col>
                        <Col><Login/></Col>
                        <Col><Register/></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export class Login extends Component{

    render(){
        return(
            <div className = "Login">
                <Modalfinal/>
            </div>
        )
    }
}

export class Register extends Component{

    render(){
        return(
            <div className = "Register">  
                <Link to="/register" className="btn btn-link">Create Account</Link>  
            </div>
        )
    }
}


export default Navbar;


