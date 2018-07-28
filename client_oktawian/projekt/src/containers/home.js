import React, { Component } from 'react';




import {Navbar} from '../components/navbar';
import {Header} from '../components/header';
import {ChoiceSection} from '../components/choiceSection';
import {LatestIdeas} from '../components/latestIdeas';
import {SignInModule} from '../components/signin'

import {Idea, ResultItem} from './browseideas';


import '../global-styles';


export default class Home extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <Header/>
                <SignInModule/>
                <ChoiceSection/>
                <LatestIdeas/>
                <ResultItem/>
            </div>
        )
    }
};







