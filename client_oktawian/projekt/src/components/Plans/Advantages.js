import React, { Component } from 'react';


export class PlanAdvantageOne extends Component{

    render(){
        return(
                <div class ="PlanElement">
                <h2>1. Deposit cryptocurrencies</h2>
                <div className ="Rectangle"></div>
                <p>Deposit cryptocurrencies using our system, after logging in you can fully manage your shares, add ideas and support other</p>
                </div>
        )
    }
};

export class PlanAdvantageTwo extends Component{

    render(){
        return(
                <div class ="PlanElement">
                <h2>2. Measure results</h2>
                <div className ="Rectangle"></div>
                <p>Check if others support your initiatives and monitor the profit and rotation of bitcoins in your profile</p>
                </div>
        )
    }
};

export class PlanAdvantageThree extends Component{

    render(){
        return(
                <div class ="PlanElement">
                <h2>3. Withdraw your profits</h2>
                <div className ="Rectangle"></div>
                <p>Withdraw your capital in the intervals specified by the system</p>
                </div>
        )
    }
};
