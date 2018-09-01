import React from "react";
import { Provider } from "react-redux";
import Raven from "raven-js";
import ReactGA from "react-ga";

import ErrorBoundary from "./components/ErrorBoundary";
import MainView from "./views/MainView";
import configureStore from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";



if (process.env.NODE_ENV === "production" && process.env.REACT_APP_RAVEN_PUBLIC_DSN) {
  Raven.config(process.env.REACT_APP_RAVEN_PUBLIC_DSN, {
    release: process.env.REACT_APP_VERSION,
  }).install();
}

if (process.env.NODE_ENV === "production" && process.env.REACT_APP_GA_TRACKING_ID) {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}


export class Btc extends React.Component{
  render(){
    return(
      <div>
      <ErrorBoundary>
        <Provider store={configureStore().store}>
         <MainView />
       </Provider>
     </ErrorBoundary>,
     </div>
        )
    }
};

registerServiceWorker();
