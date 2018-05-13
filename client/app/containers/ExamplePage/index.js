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
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class ExamplePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const text = "constant text"

    return (
      <div className="create_account_screen">

        <div className="create_account_form">
          <h1>Create account</h1>
          <p>Example of string taken from webapi: { text }</p>
          <Button bsStyle="primary" onClick={this.props.refreshText}>Refresh text from server</Button>
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
              value={"this.state.companyName"}
              onChange={this.handleCompanyInput} 
              emptyMessage="Company name can't be empty"
            /> 
            <br/>
            <Input 
              text="Password" 
              type="password"
              ref="password"
              validator="true"
              minCharacters="8"
              requireCapitals="1"
              requireNumbers="1"
              forbiddenWords={"this.state.forbiddenWords"}
              value={"this.state.passsword"}
              emptyMessage="Password is invalid"
              onChange={this.handlePasswordInput} 
            /> 
            <br/>
            <Input 
              text="Confirm password" 
              ref="passwordConfirm"
              type="password"
              validate={this.isConfirmedPassword}
              value={"this.state.confirmPassword"}
              onChange={this.handleConfirmPasswordInput} 
              emptyMessage="Please confirm your password"
              errorMessage="Passwords don't match"
            /> 
            <br/>
            {/* <Select 
              options={STATES} 
              ref="state"
              value={"this.state.statesValue"} 
              onChange={this.updateStatesValue} 
              searchable={this.props.searchable} 
              emptyMessage="Please select state"
              errorMessage="Please select state"
              placeholder="Choose Your State"
              placeholderTitle="Your State"
            />  */}
            
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
  onSubmitForm: PropTypes.func,
  refreshText: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  myPropPM: PropTypes.string
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    refreshText: (evt) => {
      evt.text = "refreshed"
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ExamplePage);
