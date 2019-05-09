import React from 'react';
import {I18n, setLocale} from 'react-redux-i18n';
import {connect} from 'react-redux';

export class Policy extends React.Component{


    constructor(props){
         super(props);
        this.state = {rodo_info: 'rodo_info' + ' show'};
         this.onClick = this.onClick.bind(this);
       }
  
     onClick()
     {
             this.setState( {rodo_info : 'rodo_info ' + ' hide'} );
     }
  render(){
    return(
      <div className = {this.state.rodo_info}>
      <p>{I18n.t('For your security & better experience')} <a href="/policy">{I18n.t('Read privacy notice...')}</a></p><button className="rodo_button" onClick={this.onClick}>ACCEPT</button>
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


export default connect(mapStateToProps)(Policy) 