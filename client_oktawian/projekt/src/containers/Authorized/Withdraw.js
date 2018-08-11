import React, { Component } from 'react';


import {Btc} from '../../btc_graph/src/index';

import {Navbar} from '../../components/navbar';
import '../../global-styles';


import {Withdraw} from '../../components/Authorized/Withdraw/withdraw';

export default class HomePage extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <Withdraw/>
             </div>
        )
    }
};



