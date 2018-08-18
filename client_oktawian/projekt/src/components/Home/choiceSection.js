
import React, { Component } from 'react';

import Reliability from '../../img/reliabilityicon.svg';
import Growth from '../../img/growthicon.svg';
import Innovation from '../../img/innovationicon.svg';
import Investment from '../../img/investmenticon.svg';


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
                <div className ="SectionInside">
                    <img src={Reliability} alt={"logo"}/> 
                    <h2>Reliability<br/>
                    <div className ="Rectangle"></div>
                    </h2>
                    
                    <p>You are an entrepreneur and you need money to start?</p>
                </div>
            </div>
        )
    }
}

export class SectionTwo extends Component{

    render(){
        return(
            <div className ="Section">
                <div className ="SectionInside">
                    <img src={Growth} alt={"logo"}/> 
                    <h2>Growth<br/>
                    <div className ="Rectangle"></div>
                    </h2>
                    
                    <p>You are an investor and wan’t to increase your capital?</p>
                </div>
            </div>
        )
    }

}

export class SectionThree extends Component{

    render(){
        return(
            <div className ="Section">
              <div className ="SectionInside">
                    <img src={Innovation} alt={"logo"}/> 
                    <h2>Innovation<br/>
                    <div className ="Rectangle"></div>
                    </h2>
                    
                    <p>You are an investor and wan’t to increase your capital?</p>
                </div>
            </div>
        )
    }

}

export class SectionFour extends Component{

    render(){
        return(
            <div className ="Section">
                  <div className ="SectionInside">
                    <img src={Investment} alt={"logo"}/> 
                    <h2>Investment plans<br/>
                    <div className ="Rectangle"></div>
                    </h2>
                    
                    <p>You are an investor and wan’t to increase your capital?</p>
                </div>
            </div>
        )
    }

}




