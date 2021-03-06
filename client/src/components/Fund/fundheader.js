import React, { Component } from 'react';

import {Container, Row, Col } from 'reactstrap';

import fundimg from '../../img/fundimg.jpg'

import fundheadericon1 from '../../img/addicon.svg'
import fundheadericon2 from '../../img/shareicon.svg'
import fundheadericon3 from '../../img/startupicon.svg'


export class Fundheader extends Component{

    render(){
        return(
            <div className ="SectionsHeader">      
             <div className ="HeaderLeft">                         
                <Container>
                    <Row>
                         <Col sm="12" md={{ size: 8, offset: 3 }}><h1 className ="animated fadeIn">Get funds for yourself<br/> or a loved one</h1>
                         <p className ="animated fadeInUp">Once you add the collection and make it available to<br/> the world, people can support your initiative</p> 
                        </Col>
                    </Row>
                </Container>
                </div>
                
                
                <div className = "SectionHeaderRight">
                
                    <img className ="animated fadeIn" alt ="Fund" src={fundimg}/> 

                </div>
            </div>
        )
    }
};


export class Fundheader2 extends Component{

    render(){
        return(
            <div>
            <Container>
                <Row>
            <div className ="FundHeader2">
                <h2>What's happening with your growing idea?</h2>
                <p>Our platform makes these ideas crystallize and have a much better chance to realize.</p>

                    <div className="FundIcon"><img alt ="Add Idea" src={fundheadericon1}/>
                    <h3>Add idea</h3>
                    <p>Filling out a short form will allow you to add your idea, it will be available to others</p>
                     </div>

                    <div className="FundIcon"><img alt ="Share with Friends"  src={fundheadericon2}/>
                    <h3>Share with friends</h3>
                    <p>Your idea is seen by the rest of the community, more interesting ideas will gain more interest</p>

                     </div>

                    <div className="FundIcon"><img alt ="Start up Resources"  src={fundheadericon3}/>
                    <h3>Start-up resources</h3>
                    <p>If your idea is interesting, there will bes people who will want to support it</p>
                    
                     </div>
            </div>
            </Row>
            </Container>
            </div>
        )
    }
};