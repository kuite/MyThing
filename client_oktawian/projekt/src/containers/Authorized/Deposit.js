import React, { Component } from 'react';



import {Navbar} from '../../components/navbar';
import '../../global-styles';

import {Deposit, DepositSteps} from '../../components/Authorized/Deposit/deposit';

export default class HomePage extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <Deposit/>
             </div>
        )
    }
};



