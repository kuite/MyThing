import React, { Component } from 'react';

import {LightningHeader} from '../../../components/HedgeFund/Plans/lightningheader';
import {ChoiceSection} from '../../../components/HedgeFund/Plans/foursections';
import {LightningFeatures} from '../../../components/HedgeFund/Plans/lightningfeatures';
import {Invest} from '../../../components/HedgeFund/Plans/invest';

import '../../../global-styles';


export default class Lightning extends Component{

    render(){
        return(
            <div>
                <LightningHeader/>
                <ChoiceSection/>
                <LightningFeatures/>
                <Invest/>
            </div>
        )
    }
};






















