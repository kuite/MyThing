
import React, { Component } from 'react';


export class Choice_section extends Component{

    render(){
        return(
            <div className = "Choice_sections">
                <Section_one/>
                <Section_two/>
                <Section_three/>
                <Section_four/>    
            </div>
        )
    }
};




export class Section_one extends Component{

    render(){
        return(
            <div className ="Section">
                <h2>Advantage #1
                <div className ="Rectangle"></div>
                </h2>
                
                <p>You are an entrepreneur and you need money to start?</p>
            </div>
        )
    }
}

export class Section_two extends Component{

    render(){
        return(
            <div className ="Section">
                <h2>Advantage #2
                <div className ="Rectangle"></div>
                </h2>
                
                <p>You are an investor and wan’t to increase your capital?</p>
            </div>
        )
    }

}

export class Section_three extends Component{

    render(){
        return(
            <div className ="Section">
                <h2>Advantage #3
                <div className ="Rectangle"></div>
                </h2>
                
                <p>You are an investor and wan’t to increase your capital?</p>
            </div>
        )
    }

}

export class Section_four extends Component{

    render(){
        return(
            <div className ="Section">
                <h2>Advantage #4
                <div className ="Rectangle"></div>
                </h2>
                
                <p>You are an investor and wan’t to increase your capital?</p>
            </div>
        )
    }

}




