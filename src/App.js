import 'bootstrap/dist/css/bootstrap.min.css'
// import {  } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
          <Route path="/explore">
            <ExplorePage />
          </Route>
          <Route path="/usersproject">
            <UsersProject />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/projectdisplay">
            <ProjectDisplay />
          </Route>
        </Switch>
      </Router>


    </>
  );
}

export default App;
