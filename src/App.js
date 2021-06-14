import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Homepage from './components/Homepage';
import Header from './components/Header';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import UserMenu from './components/UserMenu';

import ExplorePage from './components/ExplorePage';
import UsersProject from './components/UsersProject';
import Settings from './components/Settings';
import EditProject from './components/EditProject';
import ProjectDisplay from './components/ProjectDisplay';
import ProjectsForum from './components/ProjectsForum';
// import logo from './images/logo.png'
// import logo from './images/logoSvg.svg'
import './App.css';

function App() {
  return (
    <>

      <Router>
        <Header />
        {/* <header>
          <Navbar variant="dark">
            <Navbar.Brand><Link to="/home" ><img src={logo} alt='full snack logo' className='img-fluid mr-3' id='logo' />Full Snack</Link></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link ><Link to="/explore" >Explore</Link></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link ><Link to="/signup" >Sign Up</Link></Nav.Link>
              <Nav.Link ><Link to="/signin" >Sign In</Link></Nav.Link>
            </Nav>
          </Navbar>
        </header> */}
        {/* <Nav.Link ><Link to="/usermenu" >(user menu icon)</Link></Nav.Link> */}
        {/* <Nav.Link >(Notifications)</Nav.Link> */}

        {/* ///////////////////////////////// */}
        <Switch>
          {/* <Container> */}
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/explore">
            <ExplorePage />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/usermenu">
            <UserMenu />
          </Route>
          <Route path="/usersproject">
            <UsersProject />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          {/* </Container> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
