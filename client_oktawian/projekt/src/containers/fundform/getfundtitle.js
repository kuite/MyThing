import React, { Component } from 'react';
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';
import SelectList from 'react-widgets/lib/SelectList';

import Dropzone from "react-dropzone"
import dropzoneStyle from "react-dropzone"

import {Date} from '../fund.js';


import { Field, reduxForm, SubmissionError,} from 'redux-form';



// all validation



const validate = values => {

    const errors = {}


    //Title
    if (!values.Title ) {
    errors.Title =<div className ="help-block">Name of your idea is necessary</div>
  }

    //Description
    if (!values.Description ) {
      errors.Description =<div className ="help-block">Your description is necessary</div>
    } else if (values.Description.length < 7) {
      errors.Description = <div className ="help-block">Should be 7 characters or more</div>
    }

    //Btc Goal
    if (!values.BtcGoal ) {
      errors.BtcGoal =<div className ="help-block">Your money goal is necessary</div>
    }

    // Date



    // Category
    if (!values.Category ) {
      errors.Category = <div className ="help-block">Your money goal is necessary</div>
    }

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
              'Accept': 'application/json',
              'Content-Type' :  'application/json',
            },
            body: JSON.stringify(values),
          });
          let responseJson = await response.json();
          return responseJson;
    }   catch (error) {
            console.error(error);
    }
  }




  // test normal function (other method)

  function onSubmit(data) {
    var body = new FormData();
    Object.keys(data).forEach(( key ) => {
      body.append(key, data[ key ]);
    });

    console.info('POST', body, data);
    console.info('This is expected to fail:');
    fetch(`http://example.com/send/`, {
      method: 'POST',
      body: body,
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
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
      <Date {...input} {...custom} autoOk={true} DateForm='MM/DD/YYYY' onChange={(event, value) => input.onChange(value)} />
  );
};

//Type
const renderSelectList = ({ input, data }) =>
  <SelectList {...input}
    onBlur={() => input.onBlur()}
    data={data} />

//Category

const renderDropdownList = ({ input, data, valueField, textField }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange} />


const Category = 
[ 
  { color: 'Startup', value: '1' },
  { color: 'Technology', value: '2' },
  { color: 'Economy', value: '3' },
  { color: 'SocialMedia', value: '4' }
 ]


// File

const FILE_FIELD_NAME = 'files';

const renderDropzoneInput = (field) => {
  const files = field.input.value;
  return (
    <div>
      <Dropzone
        name={field.name}
        onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
      >
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
      {files && Array.isArray(files) && (
        <ul>
          { files.map((file, i) => <li key={i}>{file.name}</li>) }
        </ul>
      )}
    </div>
  );
}


// Description



  let StepOneFormValidation = (props) => {
    const { handleSubmit, submitting, } = props
  
  
    return (
        <form onSubmit={handleSubmit(submitToServer)}>
  
      <h3>Title:</h3>
        <Field name="Title"
          Type="text"
          component={RenderTitle}
          placeholder="What is Title of idea?"
            />
    
    <h3>Description:</h3>
        <Field name="Description"
          Type="text"
          component={RenderDescription}
          placeholder="Describe your idea, the more precisely you do it, the greater the chance that someone will support you"
            />

    <h3>Money Goal:</h3>
        <Field name="BtcGoal"
          Type="number"
          component={RenderBtcGoal}
          placeholder="How many you will achieve?"
           />

      <h3>Type:</h3>
          <Field
          name="Type"
          component={renderSelectList}
          data={[ 'bussiness', 'nonprofit' ]}/>

      <h3>Date:</h3>
          <Field name="Date"
          Type="Date"
          component={RenderDatePicker}
           />
      <h3>Category:</h3>
        <Field
          name="Category"
          component={renderDropdownList}
          data={Category}
          valueField="value"
          textField="color"/>

      {/* <h3>Image:</h3>
      <Field
            name={FILE_FIELD_NAME}
            component={renderDropzoneInput}
          />
      */}


        <div>
          <button
          className ="SecondaryButton"
           Type="submit"
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
  

