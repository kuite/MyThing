import React, { Component } from 'react';


import '../../../global-styles';


import {Withdraw} from '../../../components/Authorized/Withdraw/withdraw';

export default class HomePage extends Component{

    render(){
        return(
            <div>
                <Withdraw/>
             </div>
        )
    }
};



