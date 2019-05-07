import React, { Component } from 'react';


import {Container, FormGroup, Input, Alert} from 'reactstrap';

import Navbar from '../../components/navbar';

import {Fundheader, Fundheader2} from '../../components/Fund/fundheader';
import {Form} from './fundform/getfundtitle';

import {Footer} from '../../components/footer';
import '../../global-styles';

//date
import 'react-dates/initialize';
import { DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

  
export default class Fund extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <Fundheader/>
                <Fundheader2/>
                <Container>
                     <Form/>
                </Container>
                <Footer/> 
            </div>
        )
    }
};
