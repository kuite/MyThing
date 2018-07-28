import React, { Component } from 'react';
import {LoginFacebook} from './facebooklogin';
import {LoginGoogle} from './googlelogin';


export class SignInModule extends Component{

    render(){
        return(
            
            <div className = "Signin">
                <p>Log in:</p>
                    <LoginFacebook/>
                    <LoginGoogle/>
                  
            </div>
            
        )
    }
}