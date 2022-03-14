import './App.css';
import Header from '../Header/Header';
import React, { useState} from "react";

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header> 
        loggedIn={loggedIn}
      </Header>
    </div>
  );
}

export default App;
