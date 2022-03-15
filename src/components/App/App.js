import './App.css';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Schools from '../Schools/Schools';
import React, { useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import * as auth from "../../utils/auth";
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const App = () => {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
  });
  const navigate = useNavigate();
  const location = useLocation();

  // user registraition

  const handleRegister = ({name, email, password}) => {
    setIsLoading(true)
    return auth.register({name, email, password})
    .then((res) => {
        if (res) {
          console.log(res)
          handleLogin({email, password})
          setIsLoading(false)
          return res
        }
      })
    .catch((err) => {
      console.log(err);
      setIsLoading(false)
    }); 
  }

  // user login

  const handleLogin = ({email, password}) => {
    setIsLoading(true)
    return auth.authorize({email, password})
      .then((data) => {
        console.log(data)
        if (!data) throw new Error('Wrong email or password')
        if (data.token) {
          setLoggedIn(true)
          localStorage.setItem('jwt', data.token)
          localStorage.setItem('user', JSON.stringify(data))
          navigate('/schools')
          setIsLoading(false)
          return data
        }
        mainApi.getUserData()
        .then((myData) => {
          console.log(myData)
          setCurrentUser(myData)
          console.log(currentUser) 
        })
        .catch((err) => {
          setIsLoading(false)
          console.log(err);
        });
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false)
        setIsLoading(false)
      })
  };

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      let jwt = localStorage.getItem('jwt');
      auth.checkToken(jwt)
      .then((res) => {
          if (res) {
            setLoggedIn(true)
            console.log(loggedIn)
            setCurrentUser(res)
            if (location.pathname === '/schools') {
              navigate('/schools')
            } else if (location.pathname === '/profile') {
              navigate('/profile')
            } else if (location.pathname === '/toners') {
              navigate('/toners')
            } else if (location.pathname === '/signin') {
              navigate('/schools')
            } else if (location.pathname === '/signup') {
              navigate('/schools')
            }  
            return res
          }
        })
      .catch((err) => console.log(err));
    }
  }, [navigate, loggedIn, location.pathname]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
    setLoggedIn(false);
    console.log(loggedIn)
    setCurrentUser({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header> 
          loggedIn={loggedIn}
          onLogout={handleLogout}
        </Header>
        <Routes>
          <Route path="/" index element={<Main />}>
          </Route>
          <Route path="/schools" element={<Schools />}>
          </Route>
          <Route path="/signup" element={<Register 
            onRegister={handleRegister}
            isLoading={isLoading} />}>
          </Route>
          <Route path="/signin" element={<Login 
            onLogin={handleLogin}
            isLoading={isLoading} />}>
          </Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
