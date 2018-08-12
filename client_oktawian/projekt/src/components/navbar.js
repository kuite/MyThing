import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
import {Modalfinal} from './modal';

import {RoleAwareComponent} from './roleawarecomponent';

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
                        <Col><Link to = "/fund">Fund</Link></Col>
                        <Col><Link to = "/browseideas">Browse ideas</Link></Col>
                        <Col><Link to = "/earnwithus">Earn with us</Link></Col>
                        <Col><Login/></Col>
                        <Col><Register/></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}





export class Login extends RoleAwareComponent{

    constructor(props) {
        super(props);

        // component will be visible for the roles below:
        this.authorize = ['user'];
      }

    render(){

    const jsx = (
        <div className = "Login">
        <Modalfinal/>
    </div>
      );

      return this.shouldBeVisible() ? jsx : null;
        
    }
}


export class Register extends RoleAwareComponent{

    constructor(props) {
        super(props);

        // component will be visible for the roles below:
        this.authorize = ['user'];
      }

    render(){

            const jsx = (
                <div className = "Register">  
                    <Link to="/register" className="SecondaryButton">Create Account</Link>  
                </div>
              );

              return this.shouldBeVisible() ? jsx : null;
        
    }
}


export default Navbar;


