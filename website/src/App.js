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
import clouds from './components/clouds.png';

function App() {

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href=".navbar-brand">western for OOCH</a>
    
  <header id = "nav"> 
    <ul>
      <li>Fundraising</li>
      <li>Impact</li>
      <li>Events</li>
      <li>Join</li>
    </ul>
  </header>
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
            <div class="donateBtn">
            <button><a href= "https://ca.gofundme.com/f/camp-ooch-season-of-giving">Donate</a></button>
            </div>
             <img src = {HomepageImage} alt = "logo" id = "outerbar"/>
 <img src = {HomepageImage} alt = "logo" id = "innerbar"/>
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
              <img src={clouds} id = "clouds" />
            </div>
          </div>
          <img src = {forest} id = "forest"/>
          <div class="row">
            <div class="col-md-11">
            </div>
          </div>
          <img src = {footer} id = "footer"/>
        </div>

      </body>
    </div>
  );
}
export default App;
