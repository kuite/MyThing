import React, { Component } from 'react';


import PlanIcon1 from '../../../img/planicon1.svg';
import PlanIcon2 from '../../../img/planicon2.svg';
import PlanIcon3 from '../../../img/planicon3.svg';
import PlanIcon4 from '../../../img/planicon4.svg';
import PlanIcon5 from '../../../img/planicon5.svg';
import PlanIcon6 from '../../../img/planicon6.svg';


export class LightningFeatures extends Component{

    render(){
        return(
            <div className ="PlanFeatures">
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

                    <div className="FundIcon"><img alt ="Pump'n dump" src={PlanIcon1}/>
                    <h3>Pump'n dump</h3>
                    <p>Main asset we invest on  cryptocurencies/ ICO Tokens</p>
                     </div>

                    <div className="FundIcon"><img alt ="More money = compatibility" src={PlanIcon2}/>
                    <h3>More money = compatibility</h3>
                    <p>More money we have - more ROI we can achive with this system. </p>

                     </div>

                    <div className="FundIcon"><img alt ="Dedicated programs" src={PlanIcon3}/>
                    <h3>Dedicated programs</h3>
                    <p>We have reliabble information for gaining profits from pump'n dumps.</p>
                    
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

                    <div className="FundIcon"><img alt ="90 days"  src={PlanIcon4}/>
                    <h3>90 days</h3>
                    <p>Every cycle during 3 months</p>
                     </div>

                    <div className="FundIcon"><img alt ="15%" src={PlanIcon5}/>
                    <h3>~15%</h3>
                    <p>Projected capital increase during one cycle</p>

                     </div>

                    <div className="FundIcon"><img alt ="0.5 btc" src={PlanIcon6}/>
                    <h3>0.5 btc</h3>
                    <p>The minimum investment values</p>
                    
                     </div>
                </div>
            </div>
        )
    }
};