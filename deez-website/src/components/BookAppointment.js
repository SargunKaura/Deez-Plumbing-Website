import '../App.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { AppContext } from '../AppContext.js';

function BookAppointment() {

    const { setcontactUsButtonClicked } = useContext(AppContext);
    return (
        <div className="App">

            <header className="header">
                <div className="DPL-header">

                    <Link to="/">
                            <button  className="DPL-header-button"><img src="/dpl-logo.png" alt="DPL" /></button>
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

            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSccRrGin1zW39DCzn-aZ239D8fbHqTuR69ZClj5x7ZiRhqkGA/viewform?embedded=true" width="640" height="1800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            
            <footer className="footer">
                    <div className="DPL-footer">
                        <p>Deez Plumbing LTD</p>
                    </div>

                    <nav>
                        <div className="footer-links">
                        <Link to="/OurMission">Our Mission</Link>
                        <Link to="/BookAppointment">Book an Appointment</Link>
                        </div>
                    </nav>
            </footer>
        </div>
    );
}

export default BookAppointment;
