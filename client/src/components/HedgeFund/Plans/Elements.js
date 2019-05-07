import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class PlanStartOne extends Component{

    render(){
        return(
                <div class ="PlanElement">
                    <h2>1. Create account</h2>
                    <div className ="Rectangle"></div>
                    <p>First step is getting free account. Let's create and explore. It's easy and fast.</p>
                    <Link to="/register"><button className="SecondaryButton">Register</button></Link>
                </div>
        )
    }
};

export class PlanStartTwo extends Component{

    render(){
        return(
                <div class ="PlanElement">
                    <h2>2. Choose the best plan for you </h2>
                    <div className ="Rectangle"></div>
                    <p>Make a decision and participate in the rotation of cryptocurrencies designated for business and non-profit initiatives</p>
                </div>
        )
    }
};

export class PlanStartThree extends Component{

    render(){
        return(
                 <div class ="PlanElement">
                    <h2>3. Choose plan and do nothing</h2>
                    <div className ="Rectangle"></div>
                    <p>withdraw your capital in the intervals specified by the system</p>
                </div>
        )
    }
};