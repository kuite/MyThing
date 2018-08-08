
import React, { Component } from 'react';

import Reliability from '../img/reliabilityicon.svg';
import Growth from '../img/growthicon.svg';
import Innovation from '../img/innovationicon.svg';
import Investment from '../img/investmenticon.svg';


export class ChoiceSection extends Component{

    render(){
        return(
            <div className = "Choice_sections">
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <SectionFour/>    
            </div>
        )
    }
};




export class SectionOne extends Component{

    render(){
        return(
            <div className ="Section">
                <img src={Reliability} alt={"logo"}/> 
                <h2>Reliability
                <div className ="Rectangle"></div>
                </h2>
                
                <p>You are an entrepreneur and you need money to start?</p>
            </div>
        )
    }
}

export class SectionTwo extends Component{

    render(){
        return(
            <div className ="Section">
                <img src={Growth} alt={"logo"}/> 
                <h2>Growth
                <div className ="Rectangle"></div>
                </h2>
                
                <p>You are an investor and wan’t to increase your capital?</p>
            </div>
        )
    }

}

export class SectionThree extends Component{

    render(){
        return(
            <div className ="Section">
                <img src={Innovation} alt={"logo"}/> 
                <h2>Innovation
                <div className ="Rectangle"></div>
                </h2>
                
                <p>You are an investor and wan’t to increase your capital?</p>
            </div>
        )
    }

}

export class SectionFour extends Component{

    render(){
        return(
            <div className ="Section">
                <img src={Investment} alt={"logo"}/> 
                <h2>Investment plans
                <div className ="Rectangle"></div>
                </h2>
                
                <p>You are an investor and wan’t to increase your capital?</p>
            </div>
        )
    }

}




