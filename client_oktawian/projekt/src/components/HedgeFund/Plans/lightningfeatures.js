import React, { Component } from 'react';



export class LightningFeatures extends Component{

    render(){
        return(
            <div>
                <LightningFeaturesOne/>
                <LightningFeaturesSecond/>
            </div>
        )
    }
};



class LightningFeaturesOne extends Component{

    render(){
        return(
            <div className ="FundHeader2">

                <div className ="FundHeader2Icons">

                    <div className="FundIcon"><img src="test"/>
                    <h3>Add idea</h3>
                    <p>Filling out a short form will allow you to add your idea, it will be available to others</p>
                     </div>

                    <div className="FundIcon"><img src="test"/>
                    <h3>Share with friends</h3>
                    <p>Your idea is seen by the rest of the community, more interesting ideas will gain more interest</p>

                     </div>

                    <div className="FundIcon"><img src="test"/>
                    <h3>Start-up resources</h3>
                    <p>If your idea is interesting, there will be investors and people who will want to support it</p>
                    
                     </div>
                </div>
            </div>
        )
    }
};

class LightningFeaturesSecond extends Component{

    render(){
        return(
            <div className ="FundHeader2">

                <div className ="FundHeader2Icons">

                    <div className="FundIcon"><img src="test"/>
                    <h3>Add idea</h3>
                    <p>Filling out a short form will allow you to add your idea, it will be available to others</p>
                     </div>

                    <div className="FundIcon"><img src="test"/>
                    <h3>Share with friends</h3>
                    <p>Your idea is seen by the rest of the community, more interesting ideas will gain more interest</p>

                     </div>

                    <div className="FundIcon"><img src="test"/>
                    <h3>Start-up resources</h3>
                    <p>If your idea is interesting, there will be investors and people who will want to support it</p>
                    
                     </div>
                </div>
            </div>
        )
    }
};