import React, { Component } from 'react';

import {Container, Row, Col, Progress } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Navbar} from '../components/navbar';

import '../global-styles';

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
            <div>       

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
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Basic</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  };

  const Intermediate = (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Intermediate</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  };

  const Pro = (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Pro</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  };




