/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ExamplePage from 'containers/ExamplePage/Loadable';
import Footer from 'components/Footer';


import {Header, HeaderMobile} from 'components/Header';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const AppWrapperMobile = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

/*
MENU MOBILE TEST
*/





class Example extends React.Component {
  showSettings () {
    e.preventDefault();
  }

constructor(){
  super();
    this.state = {
      width: window.innerWidth,
    };
}

componentWillMount() {
  window.addEventListener('resize', this.handleWindowsSizeChange);
}

componentWillUnmount(){
  windows.removeEventListener('resize', this.handleWindowsSizeChange)
}

handleWindowsSizeChange = () => {
    this.setState({width: window.innerWidth});
};


  render () {

  const {width} = this.state;
  const isMobile = width <= 500;

    if (isMobile){
    return (
      <AppWrapperMobile>
        <Helmet
          titleTemplate="%s - Mobile"
          defaultTitle="Mobile"
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        <HeaderMobile />
        <div className ="TestMobile">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="/example" component={ExamplePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      <Footer />
      </div>
    </AppWrapperMobile>
    );
  }

  else{
    return(
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Desktop"
          defaultTitle="Desktop"
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        <Header/>
        <div className ="Test">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="/example" component={ExamplePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
        </div>
      </AppWrapper>
    )
  }
}
}




export default function App() {
  return (

        <Example/>
  );
}
