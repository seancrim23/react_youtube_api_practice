import React, { useContext } from 'react';
import './App.css';
import Auth from './containers/auth/Auth';
import { AuthContext } from './context/auth-context';

const App = props => {
  const authContext = useContext(AuthContext);

  if(authContext.response){
    console.log(authContext.response);
  }

  let content = !authContext.isAuth ? <Auth authToggled={authContext.toggleAuth} /> : <div><h1>Successful Auth!</h1></div>;
  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
