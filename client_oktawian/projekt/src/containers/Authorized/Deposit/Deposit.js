import React, { Component } from 'react';



import '../../../global-styles';

import {Deposit} from '../../../components/Authorized/Deposit/deposit';

export default class HomePage extends Component{

    render(){
        return(
            <div>
                <Deposit/>
             </div>
        )
    }
};



