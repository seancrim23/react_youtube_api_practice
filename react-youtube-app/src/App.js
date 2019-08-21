import React, { useContext } from 'react';
import './App.css';
import Auth from './containers/Auth/Auth';
import YoutubeSearch from './containers/YoutubeSearch/YoutubeSearch';
import { AuthContext } from './context/auth-context';

const App = props => {
  const authContext = useContext(AuthContext);

  if(authContext.response){
    localStorage.setItem('accessToken', authContext.response.accessToken);
  }

  let content = !authContext.isAuth ? <Auth authToggled={authContext.toggleAuth} /> : <YoutubeSearch />;
  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
