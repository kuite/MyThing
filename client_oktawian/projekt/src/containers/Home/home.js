import React, { Component } from 'react';



import {Navbar} from '../../components/navbar';
import {Header} from '../../components/Home/header';
import {ChoiceSection} from '../../components/Home/choiceSection';
import {SignInModule} from '../../components/signin'



import '../../global-styles';


export default class Home extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <Header/>
                <SignInModule/>
                <ChoiceSection/>
            </div>
        )
    }
};







