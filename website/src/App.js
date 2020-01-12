import React from 'react';
import './App.css';
import HomepageImage from './components/HomepageImage';

function App(){
  const sayHello = () => {
    console.log("hello");
  }
  return (
    <div className="App">
      <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">News</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About</a></li>
      </ul>

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
