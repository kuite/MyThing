
import React, { Component } from 'react';


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
                <h2>Investment plans
                <div className ="Rectangle"></div>
                </h2>
                
                <p>You are an investor and wan’t to increase your capital?</p>
            </div>
        )
    }

}




