import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomepageImage from "./components/HomepageImage";
import Navbar from "react-bootstrap/Navbar";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

function App() {
  let styles = {
    border: "solid 1px #777",
    width: "800px",
    height: "400px",
    frameborder: "0",
    scrolling: "no"
  };

  return (
    <div className="App">
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
              <a class="nav-link" href="#">
                Fundraising
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Events
              </a>
            </li>
            <li class="nav-item">
              <button>
                <a class="nav-link" href="#">
                  Get Involved
                </a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <body>
        <div class="grid">
          <div class="row">
            <div class="col-7">
              <h1>
                Cancer changes a child's life.
                <br />
                So does camp.
              </h1>
              <p>
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
            <div class="col-4">
              <img src="WesternOochLogo.png"></img>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h1>Our Current Fundraising Goal</h1>
              <p>Help us raise money to:</p>
              <button>Donate</button>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h1>Our Impact</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="card">
                <p class="card-text">$600 provides a weekend of joy</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <p class="card-text"> $50 provides games</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <p class="card-text">$160 provides hospital care</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h1>Our Upcoming Events</h1>
              <iframe
                src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FToronto&amp;src=N2dzcGY5NjlyZGU5ZHZzMG5icGZkbmU5aDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D6AE00"
                style={styles}
              ></iframe>
            </div>
          </div>
          <div class="row">
            <div class="col-md-11">
              <img src="ProudSupporterLogo.png"></img>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
