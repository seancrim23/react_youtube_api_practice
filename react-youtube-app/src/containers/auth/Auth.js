import React from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = response => {
    console.log(response);
};

//need to make it so i can pull client id from an env file
const Auth = props => {
        return (
            <div>
                <h1>Authorize through Google!</h1> 
                <GoogleLogin
                    clientId=""
                    buttonText="Login"
                    onSuccess={response => props.authToggled(response)}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    scope="profile email https://www.googleapis.com/auth/youtube.readonly"
                />
            </div>
        );
};

export default Auth;