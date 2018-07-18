import React, { Component } from 'react';
import {LoginFacebook} from './facebooklogin';
import {LoginGoogle} from './googlelogin';


export class SignInModule extends Component{

    render(){
        return(
            
            <div className = "Signin">
                Log in:
                    <LoginFacebook/>
                    <LoginGoogle/>
                  
            </div>
            
        )
    }
}