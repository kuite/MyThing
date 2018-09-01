import React, { Component } from 'react';
import {Container} from 'reactstrap';

import {Navbar} from '../../../components/navbar';
import '../../../global-styles';

import {IncreaseStep} from '../../../components/Authorized/Increase/increasesteps';
import {IncreaseHeader} from '../../../components/Authorized/Increase/increaseheader';


export default class IncreaseSteps extends Component{

    render(){
        return(
            <div>
            <Navbar/>
        <div className="HomeFund">
            <Container>
                <div className ="BitcoinAvailable">
                    
                    <IncreaseHeader/>
                    <IncreaseStep/>
                </div>
            </Container>
        </div>
        </div>
        )
    }
};
