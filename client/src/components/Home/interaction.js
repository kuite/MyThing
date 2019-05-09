import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {I18n, setLocale} from 'react-redux-i18n';
import {connect} from 'react-redux';

 class HomeInteraction extends Component{
    render(){
        return(
            <div className ="HomeInteraction">
                <h1>{I18n.t('Fulfill your objectives!')}</h1>
                <p> {I18n.t('Creating an account costs nothing and opens up many possibilities for you')}</p>
                <Link to ="/register"><button className ="Login"> {I18n.t('Create free account')}</button></Link>
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


export default connect(mapStateToProps)(HomeInteraction) 