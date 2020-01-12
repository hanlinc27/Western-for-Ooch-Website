import React from 'react';
import './App.css';
import HomepageImage from './components/WesternOochLogo.png';
import background from './components/background.png';
import fifty from './components/1.png';
import onefifty from './components/3.png';
import sixhundred from './components/5.png';
import wave from './components/wave.png';
import footer from './components/footer.png';
import forest from './components/forest.png';

function App() {

  return (
    <div className="App">

      {/* <img src = {background} id = "backg"/> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#">
          Western for OOCH
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                About <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#fundraisingSection">Fundraising</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#calendarSection">Events</a>
            </li>
            <li class="nav-item">
              <button>
                <a class="nav-link" href="#">Get Involved</a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <body>
        {/* <img src = {background} id = "background"/>  */}
        <div class="grid">
          <div class="row">
          <img src = {HomepageImage} alt = "logo" id = "clubLogo"/>
              
            <div class="col-7">
              <h1>
                <i>Cancer changes a child's life.
                <br />
                So does camp. </i>
              </h1>
              <p id = 'intro_para'>
                Western for Ooch is a student-run club at Western University
                dedicated to raising funds and awareness of Camp Oochigeas, a
                camp for children with cancer. Camp Oochigeas is a privately
                funded, volunteer-based organization that provides kids with
                cancer and kids affected by childhood cancer with a unique
                opportunity for growth through challenging, fun, enriching and
                magical experiences. Every child deserves to experience the
                wonder of camp. After all, enjoying the outdoors and having fun
                are two integral parts of being a child.
              </p>
            </div>
          </div>
          <div class="row" id = "fundraisingSection">
            <img src = {wave} id = "wave"/>
            <h1 id= "fundGoalTitle">Our Fundraising Goal</h1>
            <a href= "https://ca.gofundme.com/f/camp-ooch-season-of-giving" id="donateBtn">Donate</a>
          </div>
          <div class="row" id= "impactSection">
            <h1>Our Impact</h1>
            <img src = {fifty} id = "one"/>
            <img src = {onefifty} id = "three"/>
            <img src = {sixhundred} id = "five"/>
          </div>
          <iframe
                src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FToronto&amp;src=N2dzcGY5NjlyZGU5ZHZzMG5icGZkbmU5aDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D6AE00"
                id = "calendar"></iframe>
          <div class="row" id = "calendarSection">
            <div class="col-md-12">
              <h1>Our Upcoming Events</h1>
            </div>
          </div>
          <img src = {forest} id = "forest"/>
          <div class="row">
            <div class="col-md-11">
            </div>
          </div>
        </div>

      </body>
    </div>
  );
}
export default App;
