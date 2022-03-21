import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Schools from '../Schools/Schools';
import Profile from '../Profile/Profile';
import React from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import * as auth from "../../utils/auth";
import mainApi from '../../utils/MainApi';
import { LoggedInUserContext } from '../../contexts/CurrentUserContext';
import Footer from '../Footer/Footer';

const App = () => {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    id: ''
  });
  const [schools, setSchools] = React.useState([]);
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

  // fetch user data

  const fetchUser = (user) => {
    mainApi.getUserData(user.id)
    .then((myData) => {
      console.log(myData)
      setUser(myData)
    })
    .catch((err) => {
      setIsLoading(false)
      console.log(err);
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
          console.log(loggedIn)
          localStorage.setItem('jwt', data.token)
          localStorage.setItem('user', JSON.stringify(data))
          navigate('/schools')
          setIsLoading(false)
          return data
        }
        fetchUser(user);
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
      let loggedInUser = JSON.parse(localStorage.getItem('user'))
      auth.checkToken(loggedInUser.id, jwt)
      .then((res) => {
          if (res) {
            setLoggedIn(true)
            // console.log(loggedIn)
            setUser(res)
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
    setUser({});
  }

  // update user info

  function handleUpdateUser(id, data) {
    mainApi.changeUserData(id, data)
    .then((data) => {
      setUser(data)
      fetchUser(user)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // fetch all schools info
  
  const fetchSchools = () => {
    mainApi.getSchools()
      .then((data) => {
        localStorage.setItem('schools',  JSON.stringify(data));
        setSchools(data)
        // console.log(data)
      })
      .catch((err) => {
        console.log(err);
      })
    }

    React.useEffect(() => {
      let jwt = localStorage.getItem('jwt');
      if (jwt) {
        fetchSchools()
      }
    }, [loggedIn])

  // update toners quantity 

  const changeQuantity = (id, data) => {
    mainApi.changeToner(id, data)
    .then((res) => {
      if (res) {
        setIsSuccess(true)
        fetchSchools()
      }
    })
    .catch((err) => {
      console.log(err)
      setIsSuccess(false)
    })
  }

  return (
      <div className="App">
        <LoggedInUserContext.Provider 
          value={loggedIn}
        >
          <Header> 
            onSignOut={handleLogout}
          </Header>
          <Routes>
            <Route path="/" index element={<Main />}>
            </Route>
            <Route path="/schools" element={<Schools 
              schools={schools} 
              onChangeQuantity={changeQuantity}
              isSuccess={isSuccess}
              setIsSuccess={setIsSuccess}
              />}>
            </Route>
            <Route path="/signup" element={<Register 
              onRegister={handleRegister}
              isLoading={isLoading} />}>
            </Route>
            <Route path="/signin" element={<Login 
              onLogin={handleLogin}
              isLoading={isLoading} />}>
            </Route>
            <Route path="/profile" element={<Profile user={user} onUpdateUser={handleUpdateUser} onSignOut={handleLogout}/>}>
            </Route>
          </Routes>
          <Footer/>
        </LoggedInUserContext.Provider>
      </div>
  );
}

export default App;
