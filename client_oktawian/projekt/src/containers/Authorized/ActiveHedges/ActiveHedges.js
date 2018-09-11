import React, { Component } from 'react';
import { connect } from 'react-redux';



import '../../../global-styles';
import {Container, Row, Col } from 'reactstrap';

import {Navbar} from '../../../components/navbar';

import {Lightning} from '../../../components/HedgeFund/Plans/lightning';
import {Storm} from '../../../components/HedgeFund/Plans/storm';

import {Footer} from '../../../components/footer';
import axios from 'axios';




export default class ActiveHedges extends Component{

    constructor(props) {
        
        super(props);
        this.state = {
      
          data: [],
          isLoaded: false,      
        }
    }

      componentDidMount() {

        axios
        fetch('http://localhost:50647/Invest/GetAllPlans')
  
        .then(response => {
          return response.json();
        })
        
        .then(data => {
  
          console.log(data);
          this.setState({isLoaded: true, data});

  
        }).catch(err => {
        });
        
      }


    render(){
        return(
            <div>
                 <Navbar/>
                <div className="HomeFund">
            
                        <Container>
                    
                        <div className ="BitcoinAvailable">
                        <ActiveHedge/>
                        </div>
                        <Plan/>
                        
                    </Container>
                    <Footer/>
                </div>
            </div>
        )
    }
};
















class Plan extends Component{

    render(){
      return(
        <div>
          <Container>
          <Row>
              <Col sm={{size:6}}><Lightning/></Col>
              <Col sm={{size:6}}><Storm/></Col>
          </Row>
          </Container>
        </div>
      )
    }
  }
  

class ActiveHedge extends Component{

    render(){
        return(
        <Container>
            <Row>
                <Col sm={{size:12}}>

                <div class ="PlanWidget">
                    <p> +4.77%</p>
                    <h1>Basic</h1>
                    <p>Next cycle starting in 15 days</p>
                    <h3> You invest: 0.5 BTC</h3>
                    
        {/* 
                    <Link to="/increase"> <button className="Login"> Upgrade</button></Link>
                    <Link to="/withdraw"><button className="SecondaryButton">Withdraw</button></Link>
        */}

                </div>
                </Col>
            </Row>
        </Container>

        )
    }
};


function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedActiveHedges = connect(mapStateToProps)(ActiveHedges);
export { connectedActiveHedges as ActiveHedges };
