import React, { Component } from 'react';

import {Navbar} from '../../components/navbar';
import '../../global-styles';

import {IncreaseStep} from '../../components/Authorized/Increase/increasesteps';


export default class IncreaseSteps extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <IncreaseStep/>
             </div>
        )
    }
};



