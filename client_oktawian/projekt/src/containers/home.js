import React, { Component } from 'react';




import {Navbar} from '../components/navbar';
import {Header} from '../components/header';
import {Choice_section} from '../components/choice_section';
import {Latest_ideas} from '../components/latest_ideas';
import {SignInModule} from '../components/signin'

import {Idea} from './browseideas';


import '../global-styles';


export default class Home extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <Header/>
                <SignInModule/>
                <Choice_section/>
                <Latest_ideas/>
                <Idea/>
            </div>
        )
    }
};







