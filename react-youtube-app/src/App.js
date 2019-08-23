import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Auth from './containers/Auth/Auth';
import YoutubeSearch from './containers/YoutubeSearch/YoutubeSearch';

const App = props => {

  if(props.authResponse){
    localStorage.setItem('accessToken', props.authResponse.accessToken);
  }

  let content = !props.isAuthenticated ? <Auth /> : <YoutubeSearch />;
  let errorMessage = !props.authError ? null : <h2>ERROR! {props.authError}</h2>;

  return (
    <div className="App">
      {content}
      {errorMessage}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuth,
    authResponse: state.auth.response,
    authError: state.auth.error
  };
};

export default connect(mapStateToProps)(App);
