
import React from 'react';
import {authHeader} from '../../../_helpers/auth-header.js';
import { Field, reduxForm, SubmissionError,} from 'redux-form';



//catch errors + callback to async func submitToServer
export var submit =(values) =>{

    let isError =false;

    if (isError) {
      //  throw new SumissionError(error);
    } else{
      return SendAmount(values)
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


export async function SendAmount(values) {

    //FUND
     try {
      let response = await fetch('endpointforbtcamount', {
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
  }

  //BTC Goal
const Amount = ({ input, label, meta: { touched, error, warning }, custom, ...inputProps }) => (
    <div>
        <input className="text" {...input} {...inputProps} />  
        <label>{label}</label>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  )

  let AmountBtc = (props) => {
    const { handleSubmit, submitting, } = props
  
    return (
        <form onSubmit={handleSubmit(SendAmount)}>

                    <Field name="Amount"
                      Type="number"
                      component={Amount}
                      placeholder="How many btc you sending?"
                      />

                      <button
                      className ="Login"
                      Type="submit"
                        disabled={submitting}>
                        Submit</button>
      </form>
    )
  }


  const validate = values => {

    const errors = {}
  
    //Title
    if (!values.Amount ) {
    errors.Amount =<div className ="help-block">Value of btc is neccessary</div>
  }

  return errors
}

const warn = values => {
    const warnings = {}
    return warnings
  }



export default reduxForm({
    form: 'btcAmount',           // a unique identifier for this form
    validate,                                  // <--- validation function given to redux-form
    warn,                                        // <--- warning function given to redux-form
  })(AmountBtc)