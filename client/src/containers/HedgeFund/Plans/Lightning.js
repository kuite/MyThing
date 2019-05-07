import React, { Component } from 'react';

import Navbar from '../../../components/navbar';

import {LightningHeader} from '../../../components/HedgeFund/Plans/lightningheader';
import {ChoiceSection} from '../../../components/HedgeFund/Plans/foursections';
import {LightningFeatures} from '../../../components/HedgeFund/Plans/lightningfeatures';
import {Invest} from '../../../components/HedgeFund/Plans/invest';

import {Footer} from '../../../components/footer';

import '../../../global-styles';


export default class Lightning extends Component{

    render(){
        return(
            <div>
                <Navbar/>

                <LightningHeader/>
                <ChoiceSection/>
                <LightningFeatures/>
                <Invest/>
              
                <Footer/>
            </div>
        )
    }
};






















