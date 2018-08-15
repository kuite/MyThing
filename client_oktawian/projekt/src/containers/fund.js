import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from '../_helpers';

import {Navbar} from '../components/navbar';
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

import {Fundheader, Fundheader2} from '../components/fundheader';
import StepOneFormValidation from './fundform/getfundtitle';

import '../global-styles';

//date
import 'react-dates/initialize';
import { DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export class FormTest extends React.Component{

    render(){
      return(
          <div>
                <StepOneFormValidation />
          </div>
      )
    }
};







export default class Fund extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <Fundheader/>
                <Fundheader2/>
                <Container>
                    <GetfundedForm/>
                </Container>
            </div>
        )
    }
};

class GetfundedForm extends Component{

    render(){
        return(
            <div>
                <FormTest/>

                
                {/*
                    <Row>
                        <Form className ="Getfundedform">
                            <Col sm={{size:10}}><Description/></Col>
                                <Row>
                                    <Col sm={{size:1}}><MoneyGoalSelect/></Col>
                                    <Col sm={{size:3}}><MoneyGoalValue/></Col>
                                </Row>
                            <Col sm={{size:12}}><Date/></Col>
                            <Col sm={{size:4}}><CategoryDropdown/></Col>
                            <Col sm={{size:4}}><FormRadio/></Col>
                            <Col sm={{size:4}}><Files/></Col>
                            <Button color="primary">Submit</Button>{' '}
                              </Form>
                            </Row> */}
            </div>
        )
    }
};


export class Description extends Component {

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

export class Date extends Component {

    constructor(props) {
        super(props);
        this.state = {
          startDate: null,
          endDate: null,
          focusedInput: null,
        };
      }

        render() {
            return (
                <div>
                    <DateRangePicker
                    startDateId="startDate"
                    endDateId="endDate"
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
                    />
                </div>
            );
          }
}

class MoneyGoalSelect extends Component {

    render(){
        return(
            <FormGroup>
            <Input type="select" name="select" id="exampleSelect">
              <option>BTC</option>
              <option>Etherum</option>
              <option>Dollars</option>
            </Input>
          </FormGroup>

        )
    }
}


class MoneyGoalValue extends Component {

    render() {
        return (
        <FormGroup>
            <div className="group">  
                 <Input placeholder="How many you will achieve?" type="number" step="1" />
            </div>
        </FormGroup>
        );
      }
}


class CategoryDropdown extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }
  
    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }
  
    render() {
      return (
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Category
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem># One </DropdownItem>
            <DropdownItem># Two</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }
}
class FormRadio extends Component {

    render(){
        return(
            <FormGroup tag="fieldset">
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Bussiness
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                    Non-Profit
              </Label>
            </FormGroup>
            </FormGroup>
        )
    }
}

class Files extends Component{

    render(){
        return(
            <FormGroup>
            <Label for="exampleFile">Select images</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              Select a image, which in the best way shows your idea
            </FormText>
          </FormGroup>

        )
    }
}








