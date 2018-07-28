import React, { Component } from 'react';

import {Container, Row, Col, Progress } from 'reactstrap';
import {Navbar} from '../components/navbar';

import {Browseideaheader} from '../components/browseideaheader';

import {Vote} from '../components/reactvote/vote';
import '../global-styles';

export default class Ideas extends Component{

    render(){
        return(
            <div>  
                <Navbar/>
                <Browseideaheader/>
                <Idea/>
             </div>
        )
    }
};

class Crypto extends Component{
    render(){
        return(
                <div>
                <a target ="_blank" rel="noopener noreferrer"  class="donate-with-crypto"
                    href="https://commerce.coinbase.com/checkout/6da189f179bc31">
                    <span>Donate with Crypto</span>
                </a>
                <script src="https://commerce.coinbase.com/v1/checkout.js">
                </script>
                </div>

        )
    }
}


export class Idea extends Component{

    render(){
        return(
            <div className ="Idea">                               
                <Container>

                    <Row>
                        <Col sm={{size:1}}><Vote/></Col>   
                        {/* <Col sm={{size:3}}><div className ="Idea_image"></div></Col>
                        <h2>Simple title</h2>
                            <p>Business/Non Profit, Category</p>
                            <p>Started 27.01 - Finish: 32.02</p>
        <div className ="Rectangle"></div> 
                        
                        <p>Description about this specific issue with information about
                        it and why customer should support this idea</p> */}

                        <Col sm={{size:12}}>
                       
                        <Progress multi>
                            <Progress bar color="success" value="35" /> 35 / 100 BTC funded
                        </Progress>

                        <Crypto/>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};




