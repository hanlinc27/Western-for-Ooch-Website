import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomepageImage from './components/HomepageImage';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar>
          <HomepageImage />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <p>
          Hello world
        </p>
      </body>
      <footer>
        <p>
          hello
        </p>
      </footer>
    </div>
  );
}

export default App;
