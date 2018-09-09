import React, { Component } from 'react';
import {Container} from 'reactstrap';

import '../../../global-styles';

import {Navbar} from '../../../components/navbar';

import {IncreaseStep} from '../../../components/Authorized/Increase/increasesteps';
import {IncreaseHeader} from '../../../components/Authorized/Increase/increaseheader';

import {Footer} from '../../../components/footer';


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
        <Footer/>
        </div>
        )
    }
};
