import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { StepOne } from './steps'

/* Komponenty umożliwiające rozbudowe formualarza */
export const steps =
    [
      {name: 'Data', component: <StepOne/>},

    ]
export class MultiStep extends React.Component {


          constructor(props) {
            super(props);
            this.state = {
              showNextBtn: 'showNextBtn' + ' hero_button',
              compState: 0,
            };
          }

          render() {

              const Component = this.props.steps[this.state.compState].component.type;

            return (
              <div className="container" onKeyDown={this.handleKeyDown}>

                <Component onSubmit={this.next}/>
              </div>
            );
          }
        }

/* Wysyłanie serwer */
export var submit =(values) =>{

          let isError =false;

          if (isError) {
              throw new SumissionError(error);
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
export async function submitToServer(data){

  try{
      let response = await fetch('http://localhost:5000/stepone', {
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
/* Walidacja & Errory */
const validate = values => {
const errors = {}

            if (!values.username ) {
            errors.username =<div className ="error"> Username is neccesary</div>
          } else if (values.username.length > 7) {
            errors.username = <div className ="error">Should be 7 characters</div>
          }

            if (!values.email) {
              errors.email = <div className= "error">You should write your mail</div>
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = <div className ="error">Lets write in perfect scheme</div>
            }

            if(!values.password){
                  errors.password = <div className= "error">Password is neccessary</div>
            } else if (values.password.length <= 7){
              errors.password = <div className ="error">Should be 7 characters</div>
            }

            return errors
          }

  const warn = values => {
    const warnings = {}
    return warnings
  }



  const renderFieldOne = ({ input, label, meta: { touched, error, warning }, custom, ...inputProps }) => (
    <div>
      <div className ="group">
        <input className="text" {...input} {...inputProps} />
        <label>{label}</label>
        <span className="highlight"></span>
        <span className="bar"></span>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

/* Formularz z polami */
let StepOneFormValidation = (props) => {
  const { handleSubmit, submitting, } = props



  return (
    <form onSubmit={handleSubmit(submit)} >
      <Field name="name"
        type="text"
        component={renderFieldOne}
        label="Username"
          />

      <Field name="email"
       type="email"
        component={renderFieldOne}
        label="Email"
         />

         <Field name="password"
          type="password"
           component={renderFieldOne}
           label="Password"
            />

      <div>
        <button
        className ="submit_button"
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
  warn                                        // <--- warning function given to redux-form
})(StepOneFormValidation)
