import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import { history } from '../../_helpers';
import { userActions } from '../../_actions';
import { alertActions } from '../../_actions';

import {LoginGoogle} from '../../components/googlelogin';
import {LoginFacebook} from '../../components/facebooklogin';




class LoginPageModal extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;

        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });


        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            Email: '',
            Password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }




    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }





    handleSubmit(e) {

        e.preventDefault();
        this.setState({ submitted: true });

        const { Email, Password } = this.state;
        const { dispatch } = this.props;

        if (Email && Password && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Email)) {
            dispatch(userActions.login(Email, Password));
        }

    }

    render() {
        const { loggingIn, alert } = this.props;
        const { Email, Password, submitted } = this.state;



        return (
           

            <Container>
            <div className ="LoginModal">

            {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }


               <Row>
                

                    <Col sm="12" md={{ size: 12, offset: 0 }}>
                        <h1>Welcome back</h1>
                     </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 12, offset: 0 }}>
                        <p>We are glad that you are coming back</p>
                        
                        
                <form className="" name="form" onSubmit={this.handleSubmit}>



                    <div className={'form-group' + (submitted && !Email ? ' has-error' : '')}>
                        <input type="text" className="form-control" name="Email" value={Email} onChange={this.handleChange} placeholder ="Write your mail" />

                        {submitted && !Email &&
                            <div className="help-block">Email is required</div>
                        }
                        {submitted && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Email) &&
                                        <div className="help-block">It's seems email isn't in correctly form</div>
                        }
                    </div>


                    <div className={'form-group' + (submitted && !Password ? ' has-error' : '')}>
                        <input type="password" className="form-control" name="Password" value={Password} onChange={this.handleChange}placeholder ="Wrire your password" />

                        {submitted && !Password &&
                            <div className="help-block">Password is required</div>
                        }

                    </div>

                    <div className="form-group">

                        <button className="Login">Login</button><br/><br/>


                        {loggingIn &&
                            <img alt ="test" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/register">I don't have account yet</Link>
                    </div>

                </form>
                    </Col>
                </Row>
                </div>
             </Container>


        );
    }
}

function mapStateToProps(state) {
    const { loggingIn, alert } = state;
    return {
        loggingIn,
        alert
    };

    
}

const connectedLoginPageModal = connect(mapStateToProps)(LoginPageModal);
export { connectedLoginPageModal as LoginPageModal }; 