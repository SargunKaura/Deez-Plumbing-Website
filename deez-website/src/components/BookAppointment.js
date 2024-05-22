import './BookAppointment.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function BookAppointment() {
  return (
    <div className="App">

      <header>
        <Link to="/">
          <button>Home Page</button>
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

      <h1>Book an Appointment</h1>

      <p>Fill out the form below to book an appointment with Deez Plumbing LTD. (might be an embeded google form) </p>
    </div>
  );
}

export default BookAppointment;
