import React, { Component } from 'react';
import { Link } from 'react-router-dom';




export class HomeInteraction extends Component{
    render(){
        return(
            <div className ="HomeInteraction">
                <h1>Fulfill your dreams!</h1>
                <p> Creating an account costs nothing and opens up many possibilities for you</p>
                <Link to ="/register"><button className ="Login"> Create free account</button></Link>
            </div>
        )
    }
};