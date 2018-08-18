import React, { Component } from 'react';
import {LoginFacebook} from './Login/facebooklogin';
import {LoginGoogle} from './Login/googlelogin';

import {RoleAwareComponent} from './roleawarecomponent';


export class SignInModule extends RoleAwareComponent{

    constructor(props) {
        super(props);

        // component will be visible for the roles below:
        this.authorize = ['user'];
      }

    render(){

        const jsx = (
            <div className = "Signin">
                <p>Log in:</p>
                    <LoginFacebook/>
                    <LoginGoogle/>    
            </div>
          );
        
          return this.shouldBeVisible() ? jsx : null;
            
    }
}

