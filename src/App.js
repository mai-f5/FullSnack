import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Homepage from './components/Homepage';
import UsersProject from './components/UsersProject';
import ExplorePage from './components/ExplorePage';
import EditProject from './components/EditProject';
import Settings from './components/Settings';
import ProjectDisplay from './components/ProjectDisplay';
import ProjectsForum from './components/ProjectsForum';
import './App.css';

function App() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Full Snack</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link >Explore</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link >Sign Up</Nav.Link>
            <Nav.Link >Sign In</Nav.Link>
            <Nav.Link >(Users menu)</Nav.Link>
            <Nav.Link >(Notifications)</Nav.Link>
          </Nav>
        </Navbar>
      </header>
      <Container>
        <Homepage />
        <hr />
        <UsersProject />
        <hr />
        <ExplorePage />
        <hr />
        <EditProject />
        <hr />
        <Settings />
        <hr />
        <ProjectDisplay />
        <hr />
        <ProjectsForum />
      </Container>
    </>
  );
}

export default App;
