import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Homepage from './components/Homepage';
import UsersProject from './components/UsersProject';
import ExplroePage from './components/ExplroePage';
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
          </Nav>
        </Navbar>
      </header>
      <Container>
        <Homepage />
        <UsersProject />
      </Container>
    </>
  );
}

export default App;
