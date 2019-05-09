
import React, { Component } from 'react';

import Reliability from '../../img/reliabilityicon.svg';
import Growth from '../../img/growthicon.svg';
import Innovation from '../../img/innovationicon.svg';
import Investment from '../../img/investmenticon.svg';
import {I18n, setLocale} from 'react-redux-i18n';
import {connect} from 'react-redux';


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
                    <img className ="animated fadeIn" src={Reliability} alt={"logo"}/> 
                    <h2>{I18n.t('reliability')}<br/>
                    <div className ="Rectangle"></div>
                    </h2>
                    
                    <p>{I18n.t('You are an entrepreneur and you need money to start?')} </p>
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
                    <img className ="animated fadeIn" src={Growth} alt={"logo"}/> 
                    <h2>{I18n.t('growth')}<br/>
                    <div className ="Rectangle"></div>
                    </h2>
                    
                    <p>{I18n.t('You are an investor and wan’t to increase your capital?')}</p>
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
                    <img className ="animated fadeIn"  src={Innovation} alt={"logo"}/> 
                    <h2>{I18n.t('help')}<br/>
                    <div className ="Rectangle"></div>
                    </h2>
                    
                    <p>
                    {I18n.t('You need money for your friend or passion?')}
                    </p>
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
                    <img className ="animated fadeIn" src={Investment} alt={"logo"}/> 
                    <h2>{I18n.t('influence')}<br/>
                    <div className ="Rectangle"></div>
                    </h2>
                    
                    <p>{I18n.t('Have influence and support initiatives')}</p>
                </div>
            </div>
        )
    }

}


function mapStateToProps(state) {

    const { lang } = state;
    return {
      lang: state.i18n.locale,
    }
}


export default connect(mapStateToProps)(ChoiceSection) 



