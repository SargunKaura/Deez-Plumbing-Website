import '../App.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function BookAppointment() {
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
            <button className="header-button"> Contact Us</button>
            </Link>


            <Link to="/OurMission">
                <button className="header-button">Our Mission</button>
            </Link>

        </div>

        </header>

      <h1>Book an Appointment</h1>

      <p>Fill out the form below to book an appointment with Deez Plumbing LTD. (might be an embeded google form) </p>
  
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSccRrGin1zW39DCzn-aZ239D8fbHqTuR69ZClj5x7ZiRhqkGA/viewform?embedded=true" width="640" height="2000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    
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

export default BookAppointment;
