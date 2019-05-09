import React, { Component } from 'react';

import {I18n, setLocale} from 'react-redux-i18n';
import {connect} from 'react-redux';


import fundheadericon1 from '../../img/addicon.svg'
import fundheadericon2 from '../../img/shareicon.svg'
import fundheadericon3 from '../../img/startupicon.svg'



export class Advantages extends Component{
    render(){
        return(
            <div className ="FundHeader2">

                    <div className="FundIcon"><img alt ="Add your fundraisers" src={fundheadericon1}/>
                    <h3>{I18n.t('Add your fundraisers')}</h3>
                    <p>{I18n.t('Filling out a short form will allow you to add your idea, it will be available to others')} </p>
                     </div>

                    <div className="FundIcon"><img alt ="Helping other people" src={fundheadericon2}/>
                    <h3>{I18n.t('Helping other people')}</h3>
                    <p>{I18n.t('Your idea is seen by the rest of the community, more interesting ideas will gain more interest')}</p>

                     </div>

                    <div className="FundIcon"><img alt ="Be part of our hedgefund" src={fundheadericon3}/>
                    <h3>{I18n.t('Be part of our community')} </h3>
                    <p>{I18n.t('If your idea is interesting, there will be investors and people who will want to support it')} </p>
                     </div>
            </div>
        )
    }
};


function mapStateToProps(state) {

    const { lang } = state;
    return {
      lang: state.i18n.locale,
    }
}


export default connect(mapStateToProps)(Advantages) 