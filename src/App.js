import 'bootstrap/dist/css/bootstrap.min.css'
// import {  } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Homepage from './components/MainPages/Homepage/Homepage';
import Header from './components/General/Header/Header';
import ExplorePage from './components/MainPages/Explore/ExplorePage';
// import UsersProject from './components/MainPages/UsersProjects/UsersProject';
import Settings from './components/MainPages/UserSettings/Settings';
import EditProject from './components/MainPages/AddEditProject/EditProject';
import ProjectDisplay from './components/MainPages/ProjectDisplay/ProjectDisplay';

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
          {/* <Route path="/usersproject/:uid">
            <ExplorePage type='userExplore' />
          </Route> */}
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
