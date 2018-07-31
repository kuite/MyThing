import React, { Component } from 'react';

import {Navbar} from '../../components/navbar';
import '../../global-styles';

import {Funds} from '../../components/Authorized/HomePage/funds';
import {InvestmentsIdeas} from '../../components/Authorized/HomePage/investmentsideas';

export default class HomePage extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <Funds/>
             </div>
        )
    }
};



