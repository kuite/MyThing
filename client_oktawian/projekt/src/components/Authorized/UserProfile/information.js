import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import Avatar from '../../../img/avatar.svg'



export  class UserStatistics extends Component{

    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <UserAvatar/>
                    </Row>
                    <Row>
                        <Col sm={{size:3}}><p>1 active Plan</p></Col>
                        <Col sm={{size:3}}><p>423 donations made</p></Col>
                        <Col sm={{size:3}}><p>4 fundraiser created</p></Col>
                        <Col sm={{size:3}}><p>0.43 BTC raised from sharing</p></Col>
                    </Row>
                </Container>
             </div>
        )
    }
}

class UserAvatar extends Component{

    render(){
        return(
            <div>
                <img src ={Avatar}/>
             </div>
        )
    }

}