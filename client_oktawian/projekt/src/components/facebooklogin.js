import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';

import GoogleIcon from '../img/fbicon.svg';


var FacebookIconStyle = {
  width: "100%",
  height: "60px",
  backgroundImage: `url(${GoogleIcon})`,
  backgroundSize: 'cover',
  overflow: 'hidden',
  border: 'none',
};

export class LoginFacebook extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseFacebook (response) {
    console.log(response);
    //anything else you want to do(save to localStorage)...
  }

  render () {
    return (
      <div>
        <FacebookLogin socialId="yourAppID"
                       language="en_US"
                       scope="public_profile,email"
                       style = {FacebookIconStyle}
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.5"
                       className="facebook-login"/>
      </div>
    );
  }

}
