import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
import {Modalfinal} from './Login/loginmodal';

import { userActions } from '../_actions/user.actions';
import { history } from '../_helpers';
import { alertActions } from '../_actions';


import {RoleAwareComponent, RoleAwareComponentUser} from './roleawarecomponent';

import { Link } from 'react-router-dom';


export class Navbar extends Component{

    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state={Navbar: 'Navbar'}
      }
        componentDidMount() {
          window.addEventListener('scroll', this.handleScroll);
        };

        handleScroll() {
            let Navbar = this.state.Navbar
             this.setState( {Navbar : 'Navbar ' + 'NavbarScroll' } )
     };


    render(){
        return(
            
            <div onScroll={this.handleScroll.bind(this)} className ={this.state.Navbar}>
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
                        <Col><Link to = "/">Home</Link></Col>
                        <Panel/>
                        <Fund/>
                        <Col><Link to = "/browseideas">Fundraiser</Link></Col>
                        <Col><Link to = "/earnwithus">Plans</Link></Col>
                        <Col><Logout/></Col>
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
    <div>
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

                    <Link to="/register"><button className ="SecondaryButton">Create Account</button></Link>  
                </div>
              );

              return this.shouldBeVisible() ? jsx : null;
        
    }
}









export class Logout extends RoleAwareComponentUser{



    constructor(props) {
        super(props);

        const { dispatch } = this.props;

         // component will be visible for the roles below:
        this.authorize = ['user'];

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(event) {
          
        userActions.logout();

    }


    render(){

    const jsx = (
    <div>
        <button onClick={this.handleClick} className ="SecondaryButton">Logout</button>
    </div>
      );

      return this.shouldBeVisible() ? jsx : null;
        
    }
}

export class Panel extends RoleAwareComponentUser{

    constructor(props) {
        super(props);
        // component will be visible for the roles below:

        this.authorize = ['user'];
        
      }

      handleClick(event) {

        const { dispatch } = this.props;

        dispatch(userActions.logout());
        history.push('/login');
    }


    render(){

    const jsx = (
    <div>
        <Col><Link to = "/HomePage">Panel</Link></Col>
    </div>
      );

      return this.shouldBeVisible() ? jsx : null;
        
    }
}



export class Fund extends RoleAwareComponentUser{



    constructor(props) {
        super(props);

        const { dispatch } = this.props;

         // component will be visible for the roles below:
        this.authorize = ['user'];

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(event) {
          
        userActions.logout();

    }


    render(){

    const jsx = (
    <div>
        <Col><Link to = "/fund">Fund</Link></Col>
    </div>
      );

      return this.shouldBeVisible() ? jsx : null;
        
    }
}



export default Navbar;






