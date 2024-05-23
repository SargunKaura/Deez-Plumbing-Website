import './Home.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import React from 'react';

function Home() {
  return (
    <div className="App">

      <header>
        <Link to="/">
          <h1>DPL</h1>
        </Link>
        <Link to="/">
          <button>Contact Us</button>
        </Link>
        <Link to="/OurMission">
          <button>Our Mission</button>
        </Link>
        <Link to="/BookAppointment">
          <button>Book Appointment</button>
        </Link>
      </header>

      <h2>Deez Plumbing LTD</h2>

      <h4>Local Plumbers for Local People.</h4>

      <p>
        Hours of operation<br />
        Weekdays: 4:00 PM - 11:00 PM<br />
        Weekends: 5:30 AM - 11:00 PM<br />
        Holidays: CLOSED
      </p>

      <Link to="/BookAppointment">
        <button>Book Appointment</button>
      </Link>

      <h3>Reviews and Testimonials</h3>

      <a href="https://www.google.com/search?q=Deez+Plumbing+LTD+reviews" target="_blank" rel="noopener noreferrer">
        <button>Read More</button>
      </a>

      <h3>Our Mission</h3>
      <p>Two apprentice plumbers pursuing their dreams, founding their own company with a vision for excellence in plumbing services and customer satisfaction.</p>

      <Link to="/OurMission">
        <button>Meet the Crew</button>
      </Link>

      <h3>Contact Us</h3>

      <p>
        Email: Deezplumbers@gmail.com<br></br>
        Phone: TBD
      </p>
      
    </div>
  );
}

export default Home;
