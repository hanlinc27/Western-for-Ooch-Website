import React from 'react';
import './App.css';
import HomepageImage from './components/HomepageImage';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

function App(){
  const sayHello = () => {
    console.log("hello");
  }
  return (
    <div className="App">

    <Drawer fixed = "top" className="App-header">
              <Navigation>
                  <a href="#">About</a>
                  <a href="#">Fundraising</a>
                  <a href="#">Events</a>
                  <a class = "Get-involved-button" href="#">Get Involved</a>
              </Navigation>
            </Drawer>
      <header className = "Top-page">
            
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
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p><p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
        <p>
          Hello world
        </p>
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
