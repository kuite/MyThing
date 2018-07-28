import React, { Component } from 'react';

import {Container, Row, Col, Progress } from 'reactstrap';
import {Navbar} from '../components/navbar';
import { Link } from 'react-router-dom';

import {Browseideaheader} from '../components/browseideaheader';

import {Vote} from '../components/reactvote/vote';
import '../global-styles';

export default class Browseideas extends Component{

    render(){
        return(
            <div>  
                <Navbar/>
                <Browseideaheader/>
                <Idea/>
                <Idea/>
             </div>
        )
    }
};


export class Idea extends Component{

    render(){
        return(
            <div className ="Idea">                               
                <Container>

                    <Row>
                        <Col sm={{size:1}}><Vote/></Col>   
                        <Col sm={{size:3}}><div className ="Idea_image"></div></Col>
                        <Col sm={{size:6}}>
                        <h2>Simple title</h2>
                            <p>Business/Non Profit, Category</p>
                            <p>Started 27.01 - Finish: 32.02</p>
                        <div className ="Rectangle"></div>
                        
                        <p>Description about this specific issue with information about
                        it and why customer should support this idea</p>

                        <Progress multi>
                            <Progress bar color="success" value="35" /> 35 / 100 BTC funded
                        </Progress>

                            <Link to="/idea" className="btn btn-link">Support idea now</Link>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};




