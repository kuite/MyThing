import React from 'react';

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import {Timer} from './timer'
import AmountBtc from './amount';


export class BtcPaymentFull extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }



  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Address
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Qr Code
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Address/>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                  <QRCode/>
              </Col>
            </Row>
          </TabPane>

        </TabContent>
      </div>
    );
  }
}


 class Address extends React.Component{
  
    render(){
      return(
        <div className ="PaymentBtc">
          <div className ="PaymentHeader">
            <h2>Title</h2>
            <p> Investing plan that</p>
          </div>

          <p>to pay send amouth to the adress</p>
  
            <h3>Adress</h3>
            <p>0xd200f0f4d02a980d376b5d</p>
  
            <AmountBtc/>
            
            <Timer/>

        </div>
      )
    }
  };


  class QRCode extends React.Component{
  
    render(){
      return(
        <div className ="PaymentBtc">
          <div className ="PaymentHeader">
            <h2>Title</h2>
            <p> Investing plan that</p>
          </div>

            <p>to pay scan qr code</p>
  
            <h3>QR CODE</h3>
            
            <Timer/>

        </div>
      )
    }
  };
