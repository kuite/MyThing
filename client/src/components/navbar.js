import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
import {Modalfinal} from './Login/loginmodal';


import {I18n, setLocale} from 'react-redux-i18n';
import {connect} from 'react-redux';

import { userActions } from '../_actions/user.actions';
import {RoleAwareComponent, RoleAwareComponentUser} from './roleawarecomponent';
import { Link } from 'react-router-dom';


import Avatar from '../img/avatar.svg'




const ThemeContext = React.createContext();  


 class Navbar extends Component{

    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state={Navbar: 'Navbar'}
        this.langSwitch = this.langSwitch.bind(this);
      }

      langSwitch = (lang) => {
        this.props.dispatch(setLocale(lang))
        localStorage.setItem('lang', lang)
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
                        <Col  xs="6" sm={{size:3}}><Link to ="/"><Logo/></Link></Col>

                        <ThemeContext.Provider value={this.state.Navbar} >
                            <Col xs="6" sm={{size:8}}><Menu navbarState={this.state.Navbar} /></Col>
                        </ThemeContext.Provider>
                        <li><span onClick={e => {e.preventDefault(); this.langSwitch('en')}}>EN</span></li>
                        <li><span onClick={e => {e.preventDefault(); this.langSwitch('pl')}}>PL</span></li>

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
                <nav className="navigation">
                <div id="menuToggle">

                    <input type="checkbox" />
                    
                    <span></span>
                    <span></span>
                    <span></span>
                    
                    <ul id="menu">
                        <li><Panel/></li>
                        <li><Link className ={this.props.navbarState} to = "/browseideas">{I18n.t('fundraiser')}</Link></li>
                        {/* <li><Link className ={this.props.navbarState} to = "/earnwithus">HedgeFunds</Link></li> */}
                        <li><Fund/></li>
                        <li><Register/></li>
                        <li><Login/></li>
                        <li><Profil/></li>
                        
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
                            
                            <Col><Link className ={this.props.navbarState} to = "/browseideas">{I18n.t('fundraiser')}</Link></Col>
                            {/* <Col><Link className ={this.props.navbarState} to = "/earnwithus">HedgeFunds</Link></Col> */}
                            <Col><Panel /></Col>
                            <Col  xs="6" sm={{size:4}}><Fund/></Col>
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
                    <Link  to="/register"><button className ="Login">{I18n.t('createAccount')}</button></Link>  
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
        {I18n.t('logout')}
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
            {value => <Link className={value} to= "/fund"> {I18n.t('addFund')} </Link>}
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
        <li><a><img alt ="Avatar" className="Avatar" src ={Avatar}/></a>
          <ul>
            <li><Link to ="/userprofile">{I18n.t('userProfile')}</Link></li>
            <li><Link to="/myfunds">{I18n.t('myFunds')}</Link></li>
            {/*} <li><Link to="/activehedges">Active Hedges</Link></li> */}
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


function mapStateToProps(state) {

    const { lang } = state;
    return {
      lang: state.i18n.locale,
    }
}


export default connect(mapStateToProps)(Navbar) 