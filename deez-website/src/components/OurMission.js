import '../App.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { AppContext } from '../AppContext.js';

function OurMission() {

  const { setcontactUsButtonClicked } = useContext(AppContext);
  return (
    <div className='App'>
      <header className='header'>
        <div className='DPL-header'>
            <Link to='/'>
                <button className='DPL-header-button'>DPL</button>
            </Link>
        </div>
        <div className='buttons-header-DIV'>
            <Link to='/BookAppointment'>
                <button className='header-button'>Book an Appointment</button>
            </Link>
          <Link to='/'>
            <button className='header-button' onClick={() => setTimeout(() => setcontactUsButtonClicked(true), 500)}>Contact Us</button>
          </Link>
          <Link to='/OurMission'>
              <button className='header-button'>Our Mission</button>
          </Link>
      </div>
      </header>

      <section className='mission-page'>
        <h2 className='mission-title'>Meet the Crew</h2>
        <div className='crew-member'>
            <div className='member-image'>
                <img src='/images/johnspicture.jpg' alt='John - Owner & Executive Head of Operations' />
            </div>
            <div className='member-info'>
                <h3 className='name'>John D'souza</h3>
                <p className='role'>Owner & Executive Head of Operations</p>
                <p className='role1'>Meet John, a trusted plumber from Richmond. With three years of experience and a friendly
                   demeanor, he's your go-to for all your plumbing services in your area. From fixing leaks to 
                   installing new fixtures, unclogging drains, John ensures the job is done efficiently and with 
                   a smile.</p>
                <p className='role1'>Graduated foundations in 2021 Summer, finished level 2 apprenticeship in 2022 Winter, booked 
                  for Level 3 apprenticeship in autumn 2024. John specializes in new construction, specifically, 
                  mechanical rooms, manages a crew at his own job sites, and finishes tasks in a timely manner.</p>
                <div className='linkedin'>
                  <a href='john-linkedin-url'>John's LinkedIn</a>
                  <div className='linkedin-icon'>
                      <a href='john-linkedin-url'>
                          <img src='/images/LinkedIn_icon.png' alt='LinkedIn' />
                      </a>
                  </div>
                </div>
            </div>
        </div>

        <div className='crew-member'>
            <div className='member-image'>
                <img src='/images/nickspicture.jpg' alt='Nicholas - Owner' />
            </div>
            <div className='member-info'>
                <h3 className='name'>Nicholas To</h3>
                <p className='role'>Owner</p>
                <p className='role1'>Nick is both a hardworking and honest individual and also the owner of his company 
                  Deez Plumbers. His dedication to his work, whatever it may be, combined with his integrity, 
                  shines through in both his personal and professional life. Additionally, as the manager of 
                  his family-owned restaurant, Nick showcases his immense care for customers, ensuring they 
                  have a positive and enjoyable dining experience. He's driven, having worked part-time jobs 
                  during high school and transitioning to full-time construction work after graduation, 
                  displaying a solid work ethic and adaptability.</p>
                <div className='linkedin'>
                  <a href='https://www.linkedin.com/in/nick-to-24aba125a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>Nick's LinkedIn</a>
                  <div className='linkedin-icon'>
                      <a href='https://www.linkedin.com/in/nick-to-24aba125a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
                          <img src='/images/LinkedIn_icon.png' alt='LinkedIn' />
                      </a>
                  </div>
                </div>
            </div>
        </div>
      </section>

      <footer className='footer'>
        <div className='DPL-footer'>
          <p>Deez Plumbing LTD</p>
        </div>
        <nav>
        <div className='footer-links'>
          <a href='#our-mission'>Our Mission</a>
          <a href='#book-appointment'>Book an Appointment</a>
        </div>
      </nav>
      </footer>
    </div>
  );
}

export default OurMission;
