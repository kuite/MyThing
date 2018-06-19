import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import showResults from "./showResults";
import StepOneFormValidation from "./form.js";




class StepOne extends React.Component{

    render(){
      return(
          <div>
          <Provider store={store}>
            <div>
              <StepOneFormValidation onSubmit={this.props.onSubmit} />
            </div>
          </Provider>
          </div>
      )
    }
};



export {
  StepOne,
}
