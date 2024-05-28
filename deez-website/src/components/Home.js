import '../App.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import React from 'react';

function Home() {
  return (
    <div className="App">

    <header className="header">

      <div class = "DPL-header">
        <Link to="/">
          <button class = "DPL-header-button">DPL</button>
        </Link>
      </div>
      
      <div class = "buttons-header-DIV">
        <Link to="/">
          <button class = "header-button">Contact Us</button>
        </Link>
        <Link to="/OurMission">
          <button class = "header-button">Our Mission</button>
        </Link>
        <Link to="/BookAppointment">
          <button class = "header-button">Book an Appointment</button>
        </Link>
      </div>
      </header>

      <main>
        <section className="title">
          <h2>Deez Plumbing LTD</h2>
          <p>Local Plumbers for Local People.</p>
          <Link to="/BookAppointment">
          <button className="appointment-button">Book an Appointment</button>
          </Link>
          
        </section>

        <section className="hours-operation">
          <div className="hours-content">
            <h3>Hours of Operation</h3>
            <p>Weekdays: 4:00 PM - 11:00 PM</p>
            <p>Weekends: 5:30 AM - 11:00 PM</p>
            <p>Holidays: CLOSED</p>
          </div>
          <div className="hours-image">

            <img src="plumber.jpg" alt="Plumber" />
          </div>
        </section>

        <section className="mission">

          <div className = "mission-text">
          <h3>Our Mission</h3>
          <p>Two apprentice plumbers pursuing their dreams, founding their own company with a vision for excellence in plumbing services and customer satisfaction.</p>
          </div>
          <div className = "mission-elements">
          <Link to="/OurMission">
          <button className="mission-button">Meet the Crew</button>
          </Link>
          </div>
        </section>

        <section className="reviews">

          <div className="reviews-text">
          <h3>Reviews and Testimonials</h3>
          <p>Our work and reviews.</p>
          </div>

          <div className="review-images">
            <img src="before.jpg" alt="Before" />
            <img src="after.jpg" alt="After" />
          </div>

          <div className="testimonials">

            <div className="testimonial">
              <p>"A heroic piece of praise!"</p>
              <p>- Name</p>
            </div>

            <div className="testimonial">
              <p>"A fantastic bit of feedback!"</p>
              <p>- Name</p>
            </div>

            <div className="testimonial">
              <p>"A genuinely glowing review!"</p>
              <p>- Name</p>
            </div>
          </div>

          <div className = "review-button-Div">
          <button className="review-button">Read more Reviews</button>
          </div>

        </section>

        <section className="contact">
          <h3>Contact Us</h3>
          <p>Email: Deezplumbers@gmail.com</p>
          <p>Business phone: TBD</p>
        </section>
      </main>

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

export default Home;
