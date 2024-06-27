import '../App.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { AppContext } from '../AppContext.js';

function OurMission() {

  const { setcontactUsButtonClicked } = useContext(AppContext);

  return (
    <div className="App">
      <header className="header">

        <div className="DPL-header">
            <Link to="/">
                <button className="DPL-header-button">DPL</button>
            </Link>
        </div>
        <div className="buttons-header-DIV">
            <Link to="/BookAppointment">
                <button className="header-button">Book an Appointment</button>
            </Link>

          <Link to="/">
            <button className="header-button" onClick={() => setTimeout(() => setcontactUsButtonClicked(true), 500)}>Contact Us</button>
          </Link>

          <Link to="/OurMission">
              <button className="header-button">Our Mission</button>
          </Link>

      </div>

      </header>

      <h1>Our Mission</h1>

<section className="mission">
    <h2 className="mission-title">Meet the Crew</h2>
    <div className="crew-member">
        <div className="member-image">
            <img src="https://www.w3schools.com/images/picture.jpg" alt="John - Owner & Executive Head of Operations" />
        </div>
        <div className="member-info">
            <h3>John D'souza</h3>
            <p className="role">Owner & Executive Head of Operations</p>
            <p>Meet John, a trusted plumber from Richmond. With three years of experience and a friendly demeanor, he's your go-to for all your plumbing services in your area. From fixing leaks to installing new fixtures, unclogging drains, John ensures the job is done efficiently and with a smile.</p>
            <p>Graduated foundations in 2021 Summer, finished level 2 apprenticeship in 2022 Winter, booked for Level 3 apprenticeship in autumn 2024. John specializes in new construction, specifically, mechanical rooms, manages a crew at his own job sites, and finishes tasks in a timely manner.</p>
            <a href="john-linkedin-url">John's LinkedIn</a>
            <div className="linkedin-icon">
                <a href="john-linkedin-url">
                    <img src="/images/LinkedIn_icon.png" alt="LinkedIn" />
                </a>
            </div>
        </div>
    </div>

    <div className="crew-member">
        <div className="member-image">
            <img src="https://www.w3schools.com/images/picture.jpg" alt="Nicholas - Owner" />
        </div>
        <div className="member-info">
            <h3>Nicholas To</h3>
            <p className="role">Owner</p>
            <p>Introducing Nick, another plumber hailing from Richmond. With three years of experience and a warm personality, he's a trusted choice for your plumbing needs. From unclogging drains to renovations, Nick ensures top-quality service. Graduated in 2021 and advancing to level 3 apprenticeship in 2024, he specializes in new construction and tenant improvements.</p>
            <a href="nick-linkedin-url">Nick's LinkedIn</a>
            <div className="linkedin-icon">
                <a href="nick-linkedin-url">
                    <img src="/images/LinkedIn_icon.png" alt="LinkedIn" />
                </a>
            </div>
        </div>
    </div>
</section>

      <footer className="footer">
        <div className="DPL-footer">
          <p>Deez Plumbing LTD</p>
        </div>
        <nav>
        <div className="footer-links">
          <a href="#our-mission">Our Mission</a>
          <a href="#book-appointment">Book an Appointment</a>
        </div>
      </nav>
      </footer>
    </div>
  );
}

export default OurMission;
