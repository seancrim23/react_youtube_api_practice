import React from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import * as actions from '../../redux/actions/index';

const Auth = props => {
        return (
            <div>
                <h1>Authorize through Google!</h1> 
                <GoogleLogin
                    clientId={process.env.REACT_APP_CLIENT_ID}
                    buttonText="Login"
                    onSuccess={response => props.authSuccess(response)}
                    onFailure={response => props.authFail(response.error)}
                    cookiePolicy={'single_host_origin'}
                    scope="profile email https://www.googleapis.com/auth/youtube.readonly"
                />
            </div>
        );
};

const mapDispatchToProps = dispatch => {
    return {
      authSuccess: (response) => dispatch(actions.authSuccess(response)),
      authFail: (response) => dispatch(actions.authFail(response.error))
    };
  };

export default connect(null, mapDispatchToProps)(Auth);