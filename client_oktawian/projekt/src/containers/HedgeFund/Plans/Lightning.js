import React, { Component } from 'react';

import {Navbar} from '../../../components/navbar';
import {LightningHeader} from '../../../components/HedgeFund/Plans/lightningheader';
import {ChoiceSection} from '../../../components/HedgeFund/Plans/foursections';
import {LightningFeatures} from '../../../components/HedgeFund/Plans/lightningfeatures';

import '../../../global-styles';
import { Plans } from '../earnwithus';


export default class Lightning extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <LightningHeader/>
                <ChoiceSection/>
                <LightningFeatures/>
            </div>
        )
    }
};






















