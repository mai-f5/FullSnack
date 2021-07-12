import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import { getUserData } from './DAL/users';
import cookies from "js-cookies";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './components/General/Header/Header';
import Routes from './components/MainPages/Routes';
import userContext from './utils/AuthContext';
import './App.css';

function App() {

  const [loggedUser, setLoggedUser] = useState({})

  useEffect(async () => {
    if (cookies.getItem('fsCookie')) {
      const uId = cookies.getItem('fsCookie')
      const userData = await getUserData(uId)
      setLoggedUser(userData)
    }
  }, [])


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
