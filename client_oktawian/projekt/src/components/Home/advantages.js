import React, { Component } from 'react';



import fundheadericon1 from '../../img/addicon.svg'
import fundheadericon2 from '../../img/shareicon.svg'
import fundheadericon3 from '../../img/startupicon.svg'



export class Advantages extends Component{
    render(){
        return(
            <div className ="FundHeader2">
                <h2>What's happening with your growing idea?</h2>
                <p>Our platform makes these ideas crystallize and have a much better chance of success.</p>

                <div className ="FundHeader2Icons">

                    <div className="FundIcon"><img src={fundheadericon1}/>
                    <h3>Add your fundraisers</h3>
                    <p>Filling out a short form will allow you to add your idea, it will be available to others</p>
                     </div>

                    <div className="FundIcon"><img src={fundheadericon2}/>
                    <h3>Helping other people</h3>
                    <p>Your idea is seen by the rest of the community, more interesting ideas will gain more interest</p>

                     </div>

                    <div className="FundIcon"><img src={fundheadericon3}/>
                    <h3>Be part of our HedgeFund</h3>
                    <p>If your idea is interesting, there will be investors and people who will want to support it</p>
                    
                     </div>
                </div>
            </div>
        )
    }
};