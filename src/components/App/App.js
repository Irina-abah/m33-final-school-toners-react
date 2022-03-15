import './App.css';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
  });
  // const history = useHistory();
  // const location = useLocation();

  // user registraition

  const handleRegister = () => {

  }

  // user login

  const handleLogin = () => {
    
  }

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
      <Routes>
        <Route path="/signup" element={<Register 
          onRegister={handleRegister}
          isLoading={isLoading}/>}>
        </Route>
        <Route path="/signin" element={<Login 
          onLogin={handleLogin}
          isLoading={isLoading}/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
