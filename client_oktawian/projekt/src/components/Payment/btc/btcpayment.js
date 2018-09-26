import React from 'react';

import {Timer} from './timer'
import AmountBtc from './amount';






export class BtcPayment extends React.Component{
  
    render(){
      return(
        <div>
          <div className ="PaymentHeader">
            <h2></h2>
            <p> Investing plan that</p>
          
          </div>
          <p>to pay send amouth to the adress</p>
  
            <AmountBtc/>
            <h3>Adress</h3>
            <p>0xd200f0f4d02a980d376b5d</p>
  
            <Timer/>
            <button className = "SecondaryButton">show qr code instead</button>
        </div>
      )
    }
  };


