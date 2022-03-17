import './App.css';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Schools from '../Schools/Schools';
import Profile from '../Profile/Profile';
import Popup from '../Popup/Popup';
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
  const [schools, setSchools] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
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
          const userData = JSON.parse(localStorage.getItem('user'));
          setCurrentUser(userData)
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
            const userData = JSON.parse(localStorage.getItem('user'));
            setCurrentUser(userData)
            console.log(currentUser)
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

  // log out from account
  
  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
    setLoggedIn(false);
    console.log(loggedIn)
    setCurrentUser({});
  }

  // update user info

  function handleUpdateUser(user) {
    const userData = JSON.parse(localStorage.getItem('user'));
    mainApi.changeUserData(userData.id)
    .then((data) => {
      setCurrentUser(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // fetch schools, locations and toners info
  React.useEffect(() => {
    let jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getSchools()
      .then((data) => {
        localStorage.setItem('schools',  JSON.stringify(data));
        setSchools(data)
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [loggedIn])

  // Update toners quantity 

  const changeQuantity = () => {
      setIsOpen(!isOpen)
  }

  const closePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header> 
          loggedIn={loggedIn}
          onSignOut={handleLogout}
        </Header>
        <Routes>
          <Route path="/" index element={<Main />}>
          </Route>
          <Route path="/schools" element={<Schools schools={schools} onChangeQuantity={changeQuantity}/>}>
          </Route>
          <Route path="/signup" element={<Register 
            onRegister={handleRegister}
            isLoading={isLoading} />}>
          </Route>
          <Route path="/signin" element={<Login 
            onLogin={handleLogin}
            isLoading={isLoading} />}>
          </Route>
          <Route path="/profile" element={<Profile onUpdateUser={handleUpdateUser} onSignOut={handleLogout}/>}>
          </Route>
        </Routes>
        <Popup
          isOpen={isOpen}
          isSuccess={isSuccess}
          onClose={closePopup}
        >

        </Popup>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
