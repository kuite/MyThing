import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';





const Arrow = ({direction, ...props}) => (
  <svg viewBox="0 0 28 12" {...props}>
    <polyline
      points={
        direction === 'up' ?
        "0.595,11.211 14.04,1.245 27.485,11.211" :
        "27.485,0.803 14.04,10.769 0.595,0.803"
      }
    />
  </svg>
)

Arrow.defaultProps = {
  direction: 'up'
}
  



export  class Vote extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      vote: this.props.vote
    }
  }

voteUp(){
//vote = vote + 1;
console.log(this.state.vote);
this.setState ({vote: this.state.vote +1})
};

voteDown(){
 // vote = vote -1;
  console.log|(this.state.vote);
 this.setState ({vote: this.state.vote -1})
}

  render() {
    const { count } = this.state

    
    return(
        
      <div className="vote">


        <button  onClick={() => this.voteUp(this.state.vote)}>
              <Arrow
                direction="up"
                className="vote__arrow vote__arrow--up"
              />
        </button>

        <div className="vote__columns">
          {this.state.vote}
        </div>

        <button  onClick={() => this.voteDown(this.state.vote)}>
                <Arrow
                  direction="down"
                  className="vote__arrow vote__arrow--down"
                />
        </button>

      </div>
    )
  }
}