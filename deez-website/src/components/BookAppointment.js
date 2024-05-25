import '../App.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function BookAppointment() {
  return (
    <div className="App">

    <header className="header">

    <div class = "DPL-header">
      <Link to="/">
        <button class = "DPL-header-button">DPL</button>
      </Link>
    </div>

    <div class = "Buttons-header">
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

      <h1>Book an Appointment</h1>

      <p>Fill out the form below to book an appointment with Deez Plumbing LTD. (might be an embeded google form) </p>
  
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSccRrGin1zW39DCzn-aZ239D8fbHqTuR69ZClj5x7ZiRhqkGA/viewform?embedded=true" width="640" height="2000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  );
}

export default BookAppointment;
