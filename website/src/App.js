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
      </header>

      <div className = "Title-text">
        <h1>Cancer changes a child's life.</h1>
        <h1>So does camp.</h1>
      </div>
     
      <body>
       
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
