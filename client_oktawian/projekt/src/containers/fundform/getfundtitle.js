import React, { Component } from 'react';
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

import {Date} from '../fund.js';

import { Field, reduxForm, SubmissionError,} from 'redux-form';



// all validation



const validate = values => {

    const errors = {}


    //Title
    if (!values.Title ) {
    errors.Title ='Name of your idea is necessary'
  }

    //Description
    if (!values.Description ) {
      errors.Description ='Name of your Description is necessary'
    } else if (values.Description.length > 7) {
      errors.Description = 'Should be 7 characters or less'
    }


    //Btc Goal
    if (!values.BtcGoal ) {
      errors.BtcGoal ='Your money goal is necessary'
    }


    // Date


    return errors
  }

  // all warnings 
  const warn = values => {
    const warnings = {}
    return warnings
  }





//catch errors + callback to async func submitToServer
export var submit =(values) =>{

          let isError =false;

          if (isError) {
            //  throw new SumissionError(error);
          } else{
            return submitToServer(values)
              .then(data =>{
                  if (data.errors)  {
                    console.log(data.errors);
                      throw new SubmissionError(data.errors);
                  } else{
                      console.log(values)
                      console.log('server added data to database');
                  }
              });
          }
}


//async function send to server
export async function submitToServer(values){
    try{
        let response = await fetch('http://localhost:50647/fund/submitfund', {
            method: 'POST',
            headers: {
              'Content-type' :  'application/json',
            },
            body: JSON.stringify(values),
          });
          let responseJson = await response.json();
          return responseJson;
    }   catch (error) {
            console.error(error);
    }
  }
















  // Title

  const RenderTitle = ({ input, label, meta: { touched, error, warning }, custom, ...inputProps }) => (
    <div className="group">
        <input className="text" {...input} {...inputProps} />  
        <label>{label}</label>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  )

  // Description

  const RenderDescription = ({ input, label, meta: { touched, error, warning }, custom, ...inputProps }) => (
    <div>
        <input className="text" {...input} {...inputProps} />
        <label>{label}</label>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  )

//BTC Goal

const RenderBtcGoal = ({ input, label, meta: { touched, error, warning }, custom, ...inputProps }) => (
  <div>
      <input className="text" {...input} {...inputProps} />  
      <label>{label}</label>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

const RenderDatePicker = ({ input, label, meta: { touched, error }, ...custom }) => {
  return (
      <Date {...input} {...custom} autoOk={true} dateForm='MM/DD/YYYY' onChange={(event, value) => input.onChange(value)} />
  );
};







// Description



  let StepOneFormValidation = (props) => {
    const { handleSubmit, submitting, } = props
  
  
    return (
        <form onSubmit={handleSubmit(submitToServer)}>
  
        <Field name="Title"
          type="text"
          component={RenderTitle}
          placeholder="What is Title of idea?"
            />
    
        <Field name="Description"
          type="text"
          component={RenderDescription}
          placeholder="Describe your idea, the more precisely you do it, the greater the chance that someone will support you"
            />


        <Field name="BtcGoal"
          type="number"
          component={RenderBtcGoal}
          placeholder="How many you will achieve?"

           />

          <Field name="date"
          type="date"
          component={RenderDatePicker}
           />


        <div>
          <button
          className ="hero_button"
           type="submit"
            disabled={submitting}>
            Submit</button>
        </div>
  
      </form>
    )
  }






























export default reduxForm({
    form: 'syncValidation',           // a unique identifier for this form
    validate,                                  // <--- validation function given to redux-form
    warn,                                        // <--- warning function given to redux-form
  })(StepOneFormValidation)
  

