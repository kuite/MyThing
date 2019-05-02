import React from 'react';
import 'react-widgets/dist/css/react-widgets.css';
import { Container, Row, Col, Alert } from 'reactstrap';
import {authHeader} from '../../../_helpers/auth-header.js';
import { connect } from 'react-redux';

import { userActions } from '../../../_actions';
import { alertActions } from '../../../_actions';


class Form extends React.Component{

  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    this.state = {
      data: {
        Title: '',
        Description: '',
        btcGoal: '',
      },
        submitted:false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}


formhandleSubmit(event) {
event.preventDefault();
}


handleChange(event) {
  const { name, value } = event.target;
  const { data } = this.state;
  this.setState({
      data: {
          ...data,
          [name]: value
      }
  });
}

handleSubmit(event) {
  
  event.preventDefault();

  this.setState({ submitted: true });
  const { data } = this.state;
  const { dispatch } = this.props;
  if (data.Title && data.Description && data.btcGoal) {
  dispatch(userActions.sendFund(data));
  }
}

render(){

  const {registering, alert} = this.props;
  const {data, submitted } = this.state;

  return(
    <Row>
    <Col sm="12" md={{ size: 6, offset: 3 }}>

                <div>
             {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
                  
                    {/*
                          <form name="form" onSubmit={this.handleSubmit}>
                                <div className={'form-group' + (submitted && !this.state.Title ? ' has-error' : '')}>
                                <input type="text" className="form-control" name="Title" value={this.state.Title} onChange={e => this.setState({Title: e.target.value })} placeholder="Title" />
                                
                                {submitted && !this.state.Title &&
                                        <div className="help-block">First Name is required</div>
                                }
                                </div>
                                <button className="SecondaryButton">Send Form</button>
                      
                        </form>
                              */}

                  <form name="form" onSubmit={this.handleSubmit}>
                  <div className={'form-group' + (submitted && !this.state.Title ? ' has-error' : '')}>
                    <input type="text" className="form-control" name="Title" value={data.Title} onChange={this.handleChange} placeholder="Title" />
                    {submitted && !data.Title &&
                          <div className="help-block">First Name is required</div>
                    }
                    </div>

                    <div className={'form-group' + (submitted && !this.state.Description ? ' has-error' : '')}>
                    <input type="text" className="form-control" name="Description" value={data.Description} onChange={this.handleChange} placeholder="desc" />
                    {submitted && !data.Description &&
                          <div className="help-block">First Name is required</div>
                    }
                    </div>

                   <div className={'form-group' + (submitted && !this.state.btcGoal ? ' has-error' : '')}>
                    <input type="text" className="form-control" name="btcGoal" value={data.btcGoal} onChange={this.handleChange} placeholder="btc" />
                    {submitted && !data.btcGoal &&
                          <div className="help-block">First Name is required</div>
                    }
                    </div>

              
                       <button className="SecondaryButton">Send Data</button>
                                    {registering && 
                                        <img alt ="test" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }


{/*
   <input type="text" className="form-control" name="Description" value={this.state.Description} onChange={e => this.setState({Title: e.target.value })} placeholder="Title" />
                    <input type="text" className="form-control" name="Description" value={this.state.Description} onChange={e => this.setState({Description: e.target.value })} placeholder="Description" />
                    <input type="number" className="form-control" name="btcGoal" value={this.state.btcGoal} onChange={e => this.setState({btcGoal: e.target.value })} placeholder="Btc Goal" />

                    <button className="SecondaryButton" onClick={() => this.handleSubmit(this.state.Title, this.state.Description, this.state.btcGoal)}>
                    Send Form
                  </button>
*/}
                  </form>
                </div>

     </Col>
</Row>

  )
}
}

function mapStateToProps(state) {
  const {registering, alert } = state;
  return {
      alert,
      registering
  };
}

const connectedFundForm = connect(mapStateToProps)(Form);
export { connectedFundForm as Form };
