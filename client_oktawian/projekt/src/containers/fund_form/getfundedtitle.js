import React, { Component } from 'react';
import {FormGroup,Input} from 'reactstrap';

import { Field, reduxForm } from 'redux-form';



// all validation
const validate = values => {
    const errors = {};
    return errors;
}

// all warnings 
const warn = values => {
    const warning = {};
}


// generic solution to display data
const renderField = ({input, label, type, meta: { touched, error, warning }}) => (
    <div>
        <label>{label}</label>
        <input  {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
)


//async function send to server
async function submitToServer(data){

    try{
        let response = await fetch ('endpoint to api', {
            method: POST,
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(data),
            });

            let responseJson = await response.json();
            return responseJson;
        }
        
        catch (error) {
            console.error(error);
        }
}



//catch errors + callback to async func submitToServer
var submit = (values) =>{
    let isError = false;

    if(isError){
        throw new SumissionError(error);
    } else {
      return submitToServer(values)
            .then(data =>{
                if(data.errors) {
                    console.log(data.errors);
                         throw new SubmissionError(data.errors);
                }   else{
                        console.log(values)
                        console.log('confirmed')
                }
        });
    }
}

export class Title extends Component {

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
     
        </form>
    )
}


const SyncValidationForm = (props) => {
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


