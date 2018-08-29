
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
                <div className ="SectionInside">
                    <h2>medium<br/>
                    <div className ="Rectangle"></div>
                    </h2>
                    
                    <p>The degree of risk</p>
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
                    <h2>-0.54%<br/>
                    <div className ="Rectangle"></div>
                    </h2>
                    
                    <p>monthly result</p>
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
                    <h2>+4,77%<br/>
                    <div className ="Rectangle"></div>
                    </h2>  
                    <p>quarter result</p>
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
                    <h2>+14,77%<br/>
                    <div className ="Rectangle"></div>
                    </h2>
                    <p>total result</p>
                </div>
            </div>
        )
    }

}




