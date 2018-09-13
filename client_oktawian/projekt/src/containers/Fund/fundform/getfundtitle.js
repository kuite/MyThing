import React from 'react';

import DropdownList from 'react-widgets/lib/DropdownList';

import 'react-widgets/dist/css/react-widgets.css';
import SelectList from 'react-widgets/lib/SelectList';

import Dropzone from "react-dropzone"
import dropzoneStyle from "react-dropzone"

import {Date} from '../fund.js';

import {authHeader} from '../../../_helpers/auth-header.js';

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
      errors.Category = <div className ="help-block">Your categoryis necessary</div>
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
export async function submitToServer(values) {


  //FUND
   try {
    let response = await fetch('http://localhost:50647/fund/submitfund', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader()
      },
      body: JSON.stringify(values),
      
    });
    let responseJson = await response.json();
    return responseJson;

  } catch (error) {
    console.error(error);
  }


 //
  try {


    let response = await fetch('http://localhost:50647/Fund/SubmitFundImages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader()
      },
      body: JSON.stringify(values),
      
    });
    let responseJson = await response.json();
    return responseJson;

  } 
  
  catch (error) {
    console.error(error);
  }



}

  // Title
  const RenderTitle = ({ input, label, meta: { touched, error, warning }, custom, ...inputProps }) => (
    <div>
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
  { value: 'Medical', enum: '1'},
  { value: 'Passion', enum: '2'},
  { value: 'Family', enum: '3'},
  { value: 'Start-up', enum: '4'},
  { value: 'Animals', enum: '5'},
 ]


// File

//PARSE DATA IMG TO BASE 64

const FILE_FIELD_NAME = 'files';

const renderDropzoneInput = (field) => {
  
  const files = field.input.value;




  return (
    <div>


      <Dropzone
        name={field.name}
        onDrop={( files, e ) => field.input.onChange(files)}
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
      <div className ="FundForm">
              <div className ="FundFormLeft">
{/* <UploadFileContent/> */}

                  <Field
                        name={FILE_FIELD_NAME}
                        component={renderDropzoneInput}
                      />

             </div>
              <div className ="FundFormRight">
                    <Field name="Title"
                      Type="text"
                      component={RenderTitle}
                      placeholder="What is Title of idea?"
                        />
                
                    <Field name="Description"
                      Type="text"
                      component={RenderDescription}
                      placeholder="Describe your idea, the more precisely you do it, the greater the chance that someone will support you"
                        />


                    <Field name="BtcGoal"
                      Type="number"
                      component={RenderBtcGoal}
                      placeholder="Your BTC Goal? (np 0,65)"
                      />

                  
                     {/*   <Field
                      name="type"
                      component={renderSelectList}
                      data={[ 'bussiness', 'nonprofit' ]}/>
                      
                      <Field name="Date"
                      Type="Date"
                      component={RenderDatePicker}
                      />
                     */}

                    <Field
                      name="Category"
                      component={renderDropdownList}
                      data={Category}
                      valueField="value"
                      textField="value"/>

                      <button
                      className ="Login"
                      Type="submit"
                        disabled={submitting}>
                        Submit</button>

              </div>
            </div>
      </form>
    )
  }






























export default reduxForm({
    form: 'syncValidation',           // a unique identifier for this form
    validate,                                  // <--- validation function given to redux-form
    warn,                                        // <--- warning function given to redux-form
  })(StepOneFormValidation)
  

