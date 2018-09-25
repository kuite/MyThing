import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col } from 'reactstrap';
import {Btc} from '../../../btc_graph/src/index';

import axios from 'axios';




class MyFunds extends Component{

    constructor(props) {
        super(props);
        this.state = {
      
          data: [],
          products: [],
          isLoaded: false,
        };
  
      }
  
      componentDidMount() {
  
        axios
        fetch('http://localhost:50647/Fund/GetUserFunds')
  
        .then(response => {
          return response.json();
        })
        
        .then(data => {
  
          console.log(data);
          this.setState({isLoaded: true, data});
          console.log(this.state);
  
          const products = data.items.map(obj => ({title: obj.title, description: obj.description,btcGoal: obj.btcGoal}));
          this.setState({isLoaded: true, products});
    
          console.log('Products', products);
  
        }).catch(err => {
        });
        
      }
    
    render(){
        return(
            <div>
                <Link to="/login" className="btn btn-link">Name of fund  1</Link><br/>
                <Link to="/login" className="btn btn-link">Name of fund  2</Link><br/>
                <Link to="/login" className="btn btn-link">Name of fund  3</Link><br/>
                <Link to="/login" className="btn btn-link">Name of fund  4</Link><br/>
            </div>
        )

    }
}


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
                <Link to="/login" className="btn btn-link">Name of Plan 1</Link><br/>
            </div>
        )
    }
};











export class Funds extends Component{

    render(){
        return(     
            <div className ="HomeFund">                     
                <Container>
                    <Row>
                    
        {/*  <Col sm={{size:12}}>
                        <div class ="BitcoinAvailable">
                            <p> Available funds:</p>
                            <h1>3,04343 BTC</h1>

                            <Link to="/increase"> <button className="Login"> Increase</button></Link>
                            <Link to="/deposit"><button className="SecondaryButton">Deposit</button></Link>
                            <Link to="/withdraw"><button className="SecondaryButton">Withdraw</button></Link>
                        </div>
                        </Col>


                   
                            <Col sm={{size:12}}>

                            <div class ="PlanWidget">
                                <p> Your currently plan:</p>
                                <h1>Basic</h1>
                                <p>expires in: 5 days</p>

                                <h3> You invest: 0.005 BTC</h3>
                                <h3> Available funds: 0.0057 BTC </h3><p> + 0.0002 /day</p>
                                
                                <Link to="/increase"> <button className="Login"> Upgrade</button></Link>
                                <Link to="/withdraw"><button className="SecondaryButton">Withdraw</button></Link>

                            </div>

                            </Col>
                */}       

                        <Col sm={{size:6}}>

                        <div class ="BitcoinAvailable">
                            <h4>My Funds</h4>
                            <p>Check your ideas and other people's investments in them</p>
                            <div className ="Rectangle"></div>
                                    <MyFunds/>


                        </div>


                        </Col>

                        <Col sm={{size:6}}>

                        <div className ="BitcoinAvailable">
                            <h4>Active Plans</h4>
                            <p>Check all your investments and profits from ideas</p>

                            <div className ="Rectangle"></div>
                                <ActiveHedges/>


                        </div>


                        </Col>








                    
                    </Row>
                </Container>
             </div>
        )
    }
};
