/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import Button from 'react-bootstrap/lib/Button';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';

import { loadRepos } from '../App/actions';
import { changeUsername, changeText, loadServerText } from './actions';
import { makeSelectUsername, makeSelectMyPropPM, makeSelectTextServer } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class ExamplePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    // if (this.props.username && this.props.username.trim().length > 0) {
    //   this.props.onSubmitForm();
    // }
  }

  render() {
    const text = this.props.myPropPM;
    const textServer = this.props.textServerProp;

    return (
      <div className="create_account_screen">

        <div className="create_account_form">
          <h1>Create account</h1>
          <p>String taken from input: { text }</p>
          <p>String taken from server: { textServer }</p>
          <Input
                  id="myPropPM"
                  type="text"
                  placeholder="mxstbr"
                  value={ this.props.myPropPM }
                  onChange={ this.props.refreshText }
                />
          <br/>
          <br/>
          <Button bsStyle="primary" onClick={this.props.onServerText}>Refresh text from server</Button>
          <form onSubmit={this.saveAndContinue}>
            <Input 
              text="Email Address" 
              ref="email"
              type="text"
              defaultValue={messages.startProjectHeader.value} 
              validate={"this.validateEmail"}
              value={messages.startProjectHeader.value}
              onChange={this.handleEmailInput} 
              errorMessage="Email is invalid"
              emptyMessage="Email can't be empty"
              errorVisible={"this.state.showEmailError"}
            />
            <br/>
            <Input 
              text="Company Name" 
              ref="companyName"
              validate={this.isEmpty}
              value={this.props.myPropPM}
              onChange={this.handleCompanyInput} 
              emptyMessage="Company name can't be empty"
            /> 
            <br/>
            <Button
              bsStyle="info">
              CREATE ACCOUNt
            </Button>

          </form>

           <a href="https://github.com/mikepro4/react-signup-form" target="_blank" className="github_link" title="View Source Code"> 

          </a>
        </div>

      </div>
    );
}
}

ExamplePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  textServerProp: PropTypes.string,
  onServerText: PropTypes.func,
  onSubmitForm: PropTypes.func,
  myPropPM: PropTypes.string,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  refreshText: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    refreshText: (evt) => dispatch(changeText(evt.target.value)),
    onServerText: (evt) => dispatch(loadServerText())
    
    // myPropPM: (evt) => {
    //   dispatch(changeText(evt.target.value))
    // }
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  myPropPM: makeSelectMyPropPM(),
  textServerProp: makeSelectTextServer()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'example', reducer });
const withSaga = injectSaga({ key: 'example', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ExamplePage);
