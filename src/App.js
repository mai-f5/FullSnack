import 'bootstrap/dist/css/bootstrap.min.css'
// import {  } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Homepage from './components/Homepage';
import Header from './components/Header';
import ExplorePage from './components/ExplorePage';
import UsersProject from './components/UsersProject';
import Settings from './components/Settings';
import EditProject from './components/EditProject';
import ProjectDisplay from './components/ProjectDisplay';

import './App.css';

function App() {

  return (
    <>

      <Router>
        <Header />
        {/* ///////////////////////////////// */}
        <Switch>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route exact path="/explore">
            <ExplorePage />
          </Route>
          <Route path="/usersproject/:uid">
            <UsersProject />
          </Route>
          <Route path="/settings/:uid">
            <Settings />
          </Route>
          <Route path="/projectdisplay/:pid">
            <ProjectDisplay />
          </Route>
          <Route path="/editproject/:pid">
            <EditProject />
          </Route>
          <Route path='*'>
            <Redirect to='/home'></Redirect>
          </Route>
        </Switch>
      </Router>


    </>
  );
}

export default App;
