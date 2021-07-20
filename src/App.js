import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import { getUserData } from './DAL/users';
import Cookies from "js-cookie";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './components/General/Header/Header';
import Routes from './components/MainPages/Routes';
import userContext from './utils/AuthContext';
import './App.css';
import Footer from './components/General/Footer/Footer';

function App() {

  const [loggedUser, setLoggedUser] = useState({})

  useEffect(() => {
    (async () => {
      if (Cookies.get('fsCookie')) {
        const uId = Cookies.get('fsCookie')
        const userData = await getUserData(uId)
        setLoggedUser(userData)
      }
    })();
  }, [])


  return (
    <userContext.Provider value={{ loggedUser, setLoggedUser }}>
      <Router>
        <Header />
        <Routes />
        {/* <Footer /> */}
      </Router>
    </userContext.Provider>
  );
}

export default App;
