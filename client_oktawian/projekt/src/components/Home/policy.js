import React from 'react';

export class Policy extends React.Component{


    constructor(props){
         super(props);
        this.state = {rodo_info: 'rodo_info' + ' show'};
         this.onClick = this.onClick.bind(this);
       }
  
     onClick()
     {
             this.setState( {rodo_info : 'rodo_info ' + ' hide'} );
     }
  render(){
    return(
      <div className = {this.state.rodo_info}>
      <p>For your security & better experience <a href="/policy">Read privacy notice...</a></p><button className="rodo_button" onClick={this.onClick}>ACCEPT</button>
      </div>
  
    )
  }
  
  }