import React, { Component } from 'react';

import {PaymentModalfinal} from '../../Payment/paymentmodal'

import SecureIcon from '../../../img/secureicon.svg'

export class Invest extends Component{

    render(){
        return(
            <div className ="Invest">
                <PaymentModalfinal/>
                <Secure/>
                <LawNote/>
            </div>
        )
    }
};

export class Secure extends Component{

    render(){
        return(
            <div className ="Secure">
                <img alt ="Secure Icon" src ={SecureIcon}/>
                <p>your payment is secured by our security systems and 100% anonymous, in addition, you can withdraw your funds within 48 hours</p>
            </div>
        )
    }
};

class LawNote extends Component{

    render(){
        return(
            <div class="LawNote">
            <p>Investments in fund shares are subject to investment risk, which means that you may not be able to profit or lose some or all of your invested capital. Investment funds do not guarantee the implementation of investment objectives, they do not give a guarantee of obtaining a profit or protection of capital. Funds not invested in are not covered by the statutory guarantee system of the Bank Guarantee Fund. The bank does not provide protection for the capital invested through it in the funds' participation titles. The value of net assets of investment funds may be characterized by high volatility due to the composition of investment portfolios, which means that in the investment period the value of shares acquired by the client may be subject to considerable fluctuations, in particular it may be significantly lower than the amount paid. Pursuant to a separate agreement with the fund, the Bank acts as a distributor of shares.</p>
            <p>This information is only for advertising and information purposes and does not constitute an offer within the meaning of art. 66 of the Civil Code. The Bank does not provide investment, tax or legal advice. The Customer's decision to purchase investment fund shares should be made after having read the Information Prospectus, the Funds Charter and the Key Investor Information, where information on risks related to the investment, fees and investment strategy.</p>
            <p>A detailed description of risk factors can be found in the information prospectuses. These documents are available at Getin Noble Bank SA offices. and on the websites of Investment Fund Societies.</p>
            </div>
        )
    }
};