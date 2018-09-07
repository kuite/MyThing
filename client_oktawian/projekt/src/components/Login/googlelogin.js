import React from 'react';
import { GoogleLogin } from 'react-google-login-component';

import GoogleIcon from '../../img/chromeicon.svg';


var ChromeIconStyle = {
  width: "100%",
  height: "60px",
  backgroundImage: `url(${GoogleIcon})`,
  backgroundSize: 'cover',
  overflow: 'hidden',
  border: 'none',
};


export class LoginGoogle extends React.Component{
 
    constructor (props, context) {
      super(props, context);
    }
   
    responseGoogle (googleUser) {
      var id_token = googleUser.getAuthResponse().id_token;
      var googleId = googleUser.getId();
      
      console.log({ googleId });
      console.log({accessToken: id_token});
      //anything else you want to do(save to localStorage)...
    }

    
   
    render () {
      return (
        <div>

          {/* <img src={GoogleIcon} alt={"logo"}/>  */}
          
          <GoogleLogin socialId="yourClientID"
                       className="google-login"
                       style = {ChromeIconStyle}
                       scope="profile"
                       fetchBasicProfile={false}
                       responseHandler={this.responseGoogle}
                      />
        </div>
      );
    }
   
  }