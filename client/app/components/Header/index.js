import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

import { slide as Menu } from 'react-burger-menu'



export class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <A href="https://twitter.com/mxstbr">
        </A>
        <NavBar>
        <ul id="mainmenu">
          <li className ="limenu"><span className="square"><a className ="link_menu tenth before after">Link1<i className="arrow"></i></a></span>
            <ul>
              <li><a href="/">Home</a></li>
            </ul>
          </li>
          <li className ="limenu">  <span className="square"><a className ="link_menu tenth before after" href ="/features">Feature</a></span></li>
          <li className ="limenu">  <span className="square"><a className ="link_menu tenth before after" href ="/example">Example</a></span></li>
        </ul>
        </NavBar>
      </div>
    );
  }
}

export class HeaderMobile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className ="Menu_mobile">
                <Menu>
                  <a id="home" className="menu-item" href="/">Home</a>
                  <a id="about" className="menu-item" href="/features">Features</a>
                  <a id="contact" className="menu-item" href="/example">Example</a>
                  <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
                </Menu>
      </div>
    );
  }
}




export default Header;
