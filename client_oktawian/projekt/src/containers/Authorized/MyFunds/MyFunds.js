import React, { Component } from 'react';

import {Container} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Navbar from '../../../components/navbar';
import {Footer} from '../../../components/footer';

import axios from 'axios';




import '../../../global-styles';


export default class MyFunds extends Component{

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
                <Navbar/>
                <NoFunds/>
                <Footer/>
             </div>
        )
    }
};

class NoFunds extends Component{

    render(){
        return(
            <div className="HomeFund">
            <Container>
                <div className ="BitcoinAvailable">
                <h2>No active funds</h2>
                <Link to ="/fund"><button className ="Login">Add fund now</button></Link>
                </div>
            </Container>
            </div>
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

const connectedMyFunds = connect(mapStateToProps)(MyFunds);
export { connectedMyFunds as MyFunds };
