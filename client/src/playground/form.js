import React from 'react';

import DropdownList from 'react-widgets/lib/DropdownList';

import 'react-widgets/dist/css/react-widgets.css';
import SelectList from 'react-widgets/lib/SelectList';

import Dropzone from "react-dropzone"
import dropzoneStyle from "react-dropzone"

import {ModalSuccess} from './successmodal';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';
import {authHeader} from '../../../_helpers/auth-header.js';

import { Field, reduxForm, SubmissionError,} from 'redux-form';






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
                      this.setState({x: true})
                      console.log('server added data to database');
                  }
              });
          }
}


{/*
class TestModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  submitToServer = async values => {
    try {
      let response = await fetch("http://localhost:50647/fund/submitfund", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...authHeader()
        },
        body: JSON.stringify(values)
      });

      let responseJson = await response.json();
      this.setState({ modal: true });
      return responseJson;

    } catch (error) {
      console.error(error);
    }
  };

  
  render() {
    return (
      <div> 
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Success!</ModalHeader>
          <ModalBody>
            Congratulations your fund send sucesffuly
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

}

*/}



//async function send to server
export async function submitToServer(values) {

  this.setState({x: true})

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

  } catch (error) {
    console.error(error);
  }
{/* 
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
*/}
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

{/*

// File

//PARSE DATA IMG TO BASE 64
const FILE_FIELD_NAME = 'files';


export class renderDropzoneInput extends React.Component{

  
  onDrop(acceptedFiles: any): any {

    let images: any = this.state.Images;

    acceptedFiles.forEach((file: any) => {

        const reader: FileReader = new FileReader();
        reader.onload = () => {
            const fileAsBase64: any = reader.result.substr(reader.result.indexOf(",") + 1);
            images.push(fileAsBase64);
        };

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");

        reader.readAsDataURL(file);
    });

    this.setState(prevState => ({   
         Images: images,
    }));
}




  render(){

    const files = field.input.value;


      return(
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
          
      )
  }
}




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
*/}

// Description


let StepOneFormValidation = (props) => {
    const { handleSubmit, submitting,x } = props
  
    return (

      
        <form onSubmit={handleSubmit(submitToServer)}>
      <div className ="FundForm">

      {this.props.x}
      
              <div className ="FundFormLeft">

               
 {/*              
               <Field name={FILE_FIELD_NAME} component={renderDropzoneInput} field={Dropzone} />
               <renderDropzoneInput/> 
                  <Field
                        name={FILE_FIELD_NAME}
                        component={renderDropzoneInput}
                      />
*/}
           

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
                    <Field
                      name="Category"
                      component={renderDropdownList}
                      data={Category}
                      valueField="value"
                      textField="value"/>
                      */}
                      <button
                      className ="Login"
                      Type="submit"
                        disabled={submitting}>
                        Submit</button>

                    {/*  <TestModal/> */}
              </div>
            </div>
      </form>
    )
  }



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


export default reduxForm({
  form: 'syncValidation',           // a unique identifier for this form
  validate,                                  // <--- validation function given to redux-form
  warn,                                        // <--- warning function given to redux-form
})(StepOneFormValidation)
