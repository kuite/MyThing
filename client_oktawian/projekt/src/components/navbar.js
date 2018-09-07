import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
import {Modalfinal} from './Login/loginmodal';

import { userActions } from '../_actions/user.actions';
import { history } from '../_helpers';

import {RoleAwareComponent, RoleAwareComponentUser} from './roleawarecomponent';

import { Link } from 'react-router-dom';

import Avatar from '../img/avatar.svg'




const ThemeContext = React.createContext();  



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
             this.setState( {Navbar : 'Navbar ' + 'NavbarScroll' } )
     };


    render(){
        return(
            
            <div onScroll={this.handleScroll.bind(this)} className ={this.state.Navbar}>
                <Container>
                    <Row>
                        <Col sm={{size:3}}><Link to ="/"><Logo/></Link></Col>

                        <ThemeContext.Provider value={this.state.Navbar} >
                            <Col><Menu navbarState={this.state.Navbar} /></Col>
                        </ThemeContext.Provider>

                    </Row>
                </Container>
            </div>
            
        )
    }
}


class Logo extends Component{

    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state={Logo: 'Logo'}
      }

        componentDidMount() {
          window.addEventListener('scroll', this.handleScroll);
        };

        handleScroll() {
             this.setState( {Logo : 'Logo ' + 'LogoScroll' } )
     };

    render(){
        return(
            <div onScroll={this.handleScroll.bind(this)} className ={this.state.Logo}></div>
        )
    }
}




export class Menu extends Component{

    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };
      }

      componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }

      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }

      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };





    render(){

        const { width } = this.state;
        const isMobile = width <= 500;


        if (isMobile){
            return(
                <nav role="navigation">
                <div id="menuToggle">

                    <input type="checkbox" />
                    
                    <span></span>
                    <span></span>
                    <span></span>
                    
                    <ul id="menu">
                    <a href="#"><Panel/></a>
                    <a href="#"><Link className ={this.props.navbarState} to = "/browseideas">Fundraiser</Link></a>
                    <a href="#"><Link className ={this.props.navbarState} to = "/earnwithus">HedgeFunds</Link></a>
                    <a href="#"><Fund/></a>
                    <a href="#"><Register/></a>
                    <a href="#"><Login/></a>
                    </ul>
                </div>
                </nav>
            )
        }

        else{

        return(

             <div className = "Menu">
                <Container>
                    <Row>
                            <Col><Panel /></Col>
                            <Col><Link className ={this.props.navbarState} to = "/browseideas">Fundraiser</Link></Col>
                            <Col><Link className ={this.props.navbarState} to = "/earnwithus">HedgeFunds</Link></Col>
                            <Col><Fund/></Col>
                            <Col><Register/></Col>
                            <Col><Login/></Col>
                            <Profil/>
                        
                    </Row>
                </Container>
            </div>
        )
    }
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
                    <Link  to="/register"><button className ="Login">Create Account</button></Link>  
                </div>
              );

              return this.shouldBeVisible() ? jsx : null;
        
    }
}









export class Logout extends RoleAwareComponentUser{



    constructor(props) {
        super(props);

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
    <div onClick={this.handleClick}>
        Logout
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

    render(){

    const jsx =(
    <div>
        <ThemeContext.Consumer>
            {value => <Link className={value} to= "/HomePage">Panel</Link>}
        </ThemeContext.Consumer>
    </div>
      );

      return this.shouldBeVisible() ? jsx : null;
        
    }
}


















export class Fund extends RoleAwareComponentUser{



    constructor(props) {
        super(props);


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
         <ThemeContext.Consumer>
            {value => <Link className={value} to= "/fund">Fund</Link>}
        </ThemeContext.Consumer>
    </div>
      );

      return this.shouldBeVisible() ? jsx : null;
        
    }
}























export class Profil extends RoleAwareComponentUser{



    constructor(props) {
        super(props);

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
        <Col>
        <ul id="mainmenu">
        <li className ="limenu"><a className ="link_menu tenth before after"><img alt ="Avatar" className="Avatar" src ={Avatar}/></a>
          <ul>
            <li><Link to ="/userprofile">User Profile</Link></li>
            <li><Link to="/myfunds">My Funds</Link></li>
            <li><Link to="/activehedges">Active Hedges</Link></li>
            <li><Link to="/"><Logout/></Link></li>
          </ul>
        </li>
        </ul>
        </Col>
    </div>
      );

      return this.shouldBeVisible() ? jsx : null;
        
    }
}



export default Navbar;






