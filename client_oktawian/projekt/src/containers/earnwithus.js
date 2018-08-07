import React, { Component } from 'react';

import {Container, Row, Col} from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Navbar} from '../components/navbar';
import { Link } from 'react-router-dom';

import '../global-styles';

import BasicImg from '../img/basic.svg';
import IntermediateImg from '../img/intermediate.svg';
import ProImg from '../img/pro.svg';

export default class Browseideas extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <Plans/>
             </div>
        )
    }
};



export class Plans extends Component{

    render(){
        return(
            <div className="Plans">       

                <Container>
                    <Row>
                        <Col sm={{size:4}}> <Basic/>     </Col>   
                        <Col sm={{size:4}}> <Intermediate/>    </Col>
                        <Col sm={{size:4}}> <Pro/>    </Col>
                    </Row>
                </Container>                        
                
            </div>
        )
    }
};


const Basic = (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={BasicImg} alt="Card image cap" />
          <CardBody>
            <CardTitle><h2>Basic</h2></CardTitle>
            <CardSubtitle>0.005 BTC</CardSubtitle><br/>
            <CardText>
            <b>Risk:</b> low<br/>
            <b>Income:</b> ~0.0002/day<br/><br/>

            Plan for people who are starting an adventure with bitcoin, low risk and optimal growth.
          
            </CardText><br/>
            <button className="SecondaryButton">
                 <Link to="/planbasic">Learn more now</Link>
            </button>
          </CardBody>
        </Card>
      </div>
    );
  };

  const Intermediate = (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={IntermediateImg} alt="Card image cap" />
          <CardBody>
            <CardTitle><h2>Intermediate</h2></CardTitle>
            <CardSubtitle>0.010 BTC</CardSubtitle><br/>
            <CardText>
            <b>Risk:</b> medium<br/>
            <b>Income:</b> ~0.005/day<br/><br/>

            Plan for intermediate, high growth, but the risk also increases. Long-term probability of profits
          
          </CardText><br/>
            <button className="SecondaryButton">
                 <Link to="/planintermediate">Learn more now</Link>
            </button>
          </CardBody>
        </Card>
      </div>
    );
  };

  const Pro = (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={ProImg} alt="Card image cap" />
          <CardBody>
            <CardTitle><h2>Pro</h2></CardTitle>
            <CardSubtitle>0.1 BTC</CardSubtitle><br/>
            <CardText> <b>Risk:</b> medium<br/>
            <b>Income:</b> ~0.075/day<br/><br/>

            Plan for advanced, fast growth, a  short-term investment for experienced players
          </CardText><br/>
            <button className="SecondaryButton">
                 <Link to="/planpro">Learn more now</Link>
            </button>
          </CardBody>
        </Card>
      </div>
    );
  };




