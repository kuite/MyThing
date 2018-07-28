import React, { Component } from 'react';

import { connect } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_actions';

import {Routing} from './routes';

import { configureFakeBackend } from './_helpers';
{/*
configureFakeBackend();
*/}


class App extends Component {
    
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                
                {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Routing/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 