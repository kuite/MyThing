import React, { Component } from 'react';

import {Navbar} from '../../../components/navbar';
import {StormHeader} from '../../../components/HedgeFund/Plans/stormheader';
import {ChoiceSection} from '../../../components/HedgeFund/Plans/foursections';
import {StormFeatures} from '../../../components/HedgeFund/Plans/stormfeatures';
import {Invest} from '../../../components/HedgeFund/Plans/invest';

import '../../../global-styles';
import { Plans } from '../earnwithus';

export default class Storm extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <StormHeader/>
                <ChoiceSection/>
                <StormFeatures/>
                <Invest/>
            </div>
        )
    }
};




