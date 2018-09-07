import React, { Component } from 'react';

import {StormHeader} from '../../../components/HedgeFund/Plans/stormheader';
import {ChoiceSection} from '../../../components/HedgeFund/Plans/foursections';
import {StormFeatures} from '../../../components/HedgeFund/Plans/stormfeatures';
import {Invest} from '../../../components/HedgeFund/Plans/invest';

import '../../../global-styles';

export default class Storm extends Component{

    render(){
        return(
            <div>
                <StormHeader/>
                <ChoiceSection/>
                <StormFeatures/>
                <Invest/>
            </div>
        )
    }
};




