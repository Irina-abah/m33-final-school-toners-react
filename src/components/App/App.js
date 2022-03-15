import './App.css';
import Header from '../Header/Header';
import React, { useState } from "react";
// import { Route, Switch, useHistory, useLocation } from "react-router-dom";

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
  });
  // const history = useHistory();
  // const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    // history.push('/');
    setLoggedIn(false);
    setCurrentUser({});
  }

  return (
    <div className="App">
      <Header> 
        loggedIn={loggedIn}
        onLogout={handleLogout}
      </Header>
      {/* <Switch>

      </Switch> */}
    </div>
  );
}

export default App;
