import React from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = response => {
    console.log(response);
};

const Auth = props => {
        return (
            <div>
                <h1>Authorize through Google!</h1> 
                <GoogleLogin
                    clientId="286012764941-eg4lgeclaf29a3mjq61852d4rjome2hg.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={response => props.authToggled(response)}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
};

export default Auth;