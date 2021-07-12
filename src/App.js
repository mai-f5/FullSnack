import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Header from './components/General/Header/Header';
import cookies from "js-cookies";
import './App.css';
import { useState, useEffect } from 'react';
import userContext from './utils/AuthContext';
import Routes from './components/MainPages/Routes';
import { getUserData } from './DAL/users';

function App() {

  const [loggedUser, setLoggedUser] = useState({})
  useEffect(async () => {
    if (cookies.getItem('fsCookieCli')) {
      const uId = cookies.getItem('fsCookieCli')
      const userData = await getUserData(uId)
      setLoggedUser(userData)
    }
  }, [])

  useEffect(() => {
    console.log(loggedUser)
  }, [loggedUser])

  return (
    <>
      <userContext.Provider value={{ loggedUser, setLoggedUser }}>
        <Router>
          <Header />
          <Routes />
        </Router>
      </userContext.Provider>
    </>
  );
}

export default App;
