import React from 'react';
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

import {Date} from '../fund.js';

import { Field, reduxForm, SubmissionError,} from 'redux-form';



// all validation

const required = value => value ? undefined : 'Required'

const validate = values => {

    const errors = {}

    if (!values.description ) {
    errors.description ='Required'
  } else if (values.description.length > 7) {
    errors.description = 'Should be 7 characters or less'
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
        {/* throw new SumissionError(error); */}
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
export async function submitToServer(data){
    try{
        let response = await fetch('http://localhost:5000/fund/submitfund', {
            method: 'POST',
            headers: {
              'Content-type' :  'application/json',
            },
            body: JSON.stringify(data),
          });
          let responseJson = await response.json();
          return responseJson;
    }   catch (error) {
            console.error(error);
    }
  }



// generic solution to display data
const RenderDescription = ({ input, label, meta: { touched, error, warning }, custom, ...inputProps }) => (
    <div>
        <Description/>
        <label>{label}</label>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  )

  export class Description extends React.Component {

    render() {
        return (
        <FormGroup>
            <div className="group">  
            
                <Input type="description" name="description" id="description" placeholder="Describe your idea, the more precisely you do it, the greater the chance that someone will support you" />      
            </div>
        </FormGroup>
        );
      }
}




  const RenderDate = ({ input, label, meta: { touched, error, warning }, custom, ...inputProps }) => (
    <div>
        <Date/>
    </div>
  )



  let StepOneFormValidation = (props) => {
    const { handleSubmit, submitting, } = props
  
  
    return (
        <form onSubmit={handleSubmit(submit)}>
  
        <Field name="description"
          type="text"
          component={RenderDescription}
          validate = {[required]}
            />
  
        <Field name="email"
         type="email"
          component={RenderDate}
          label="Email"
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






{/*
export class TitleForm extends Component {

    render() {
        return (
        <FormGroup>
                <Input type="title" name="title" id="title" placeholder="Title of project" />        
                <Field name="title" type="title" component={renderField} label="title"/>
        </FormGroup>
        )
      }
};


const Title = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props
    return(
        <form onSubmit = {handleSubmit(submit)}>
            <TitleForm/>
        </form>
    )
}

let StepOneFormValidation = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
      <form className ="formmailforbook" onSubmit={handleSubmit(submit)}>
  
        <Field name="email" type="email" component={renderField} label="Email"/>
        <div>
          <button className ="hero_button margin_left" type="submit" disabled={submitting}>Submit</button>
        </div>
  
      </form>
    )
}
*/}



StepOneFormValidation = reduxForm({
    form: 'syncValidation',           // a unique identifier for this form
    validate,                                  // <--- validation function given to redux-form
    warn,                                        // <--- warning function given to redux-form
  })(StepOneFormValidation)
  

export default StepOneFormValidation;