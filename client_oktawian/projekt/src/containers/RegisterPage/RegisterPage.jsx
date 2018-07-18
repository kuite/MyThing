import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';


import { history } from '../../_helpers';
import { userActions } from '../../_actions';
import { alertActions } from '../../_actions';


import {Modalfinal} from '../../components/modal';




 class RegisterPage extends Component {

    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false,



        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;

        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
            history.push('/browseideas');
        }
    }

    render() {
        const { registering, alert  } = this.props;
        const { user, submitted } = this.state;

        
        return (
            <div className = "RegisterForm">

                        
            <div className ="RegistrationLeft">
            <Container>
               <Row>
                    <Col sm="12" md={{ size: 8, offset: 3 }}>
                        <h1>Create your account</h1>
                     </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <p>Lorem ipsum dolor sit amet</p>
                        
                        <form className ="RegistrationLeft" name="form" onSubmit={this.handleSubmit}>

                                <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                                    <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} placeholder="First Name" />
                                    {submitted && !user.firstName &&
                                        <div className="help-block">First Name is required</div>
                                    }
                                </div>

                                <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                                    <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} placeholder="Last Name"/>
                                    {submitted && !user.lastName &&
                                        <div className="help-block">Last Name is required</div>
                                    }
                                </div>


                                <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                                    <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} placeholder="Username"/>
                                    {submitted && !user.username &&
                                        <div className="help-block">Username is required</div>
                                    }
                                </div>

                                <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                    <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} placeholder="Password"/>
                                    {submitted && !user.password &&
                                        <div className="help-block">Password is required</div>
                                    }
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-primary">Register</button>
                                    {registering && 
                                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                    

                                    <Modalfinal/>


                                    <Link to="/login" className="btn btn-link">I have account</Link>
                                </div>

                        </form>

                    

                     </Col>
                </Row>
                     
            </Container>

            </div>


            <div className = "RegistrationRight">
            </div>


        </div>
        );
    }
}


function mapStateToProps(state) {
    const { registering, alert } = state.registration;
    return {
        registering,
        alert
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };