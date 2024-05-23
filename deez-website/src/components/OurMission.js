import './OurMission.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function OurMission() {
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

      <h1>Our Mission</h1>

      <h2>John - Owner & Executive Head of Operations</h2>

      <img src="https://www.w3schools.com/images/picture.jpg" alt="John Doe" width="200" height="200"></img>
      <p>Meet John, a trusted plumber from Richmond. With three years of experience and a friendly demeanor, he's your go-to for 
        all your plumbing services in your area. From fixing leaks to installing new fixtures, unclogging drains, John ensures the
        job is done efficiently and with a smile.
      </p>

      <p>Graduated foundations in 2021 Summer, finished level 2 apprenticeship in 2022 Winter, booked for Level 3 apprenticeship in autumn 2024.
        John specializes in new construction, specifically, mechanical rooms, manages a crew at his own job sites, and finishes tasks in a timely manner.
      </p>

      <a href="https://www.linkedin.com/in/john-doe-1234567890/">John's LinkedIn</a>

      <h2>Nick - Owner</h2>

      <img src="https://www.w3schools.com/images/picture.jpg" alt="Nick Doe" width="200" height="200"></img>
      <p>Introducing Nick, another plumber hailing from Richmond. With three years of experience and a warm personality, he's a trusted choice for
        your plumbing needs. From unclogging drains to renovations, Nick ensures top-quality service. Graduated in 2021 and advancing to level 3 
        apprenticeship in 2024, he specializes in new construction and tenant improvements.
      </p>

      <a href="https://www.linkedin.com/in/john-doe-1234567890/">Nick's LinkedIn</a>
    </div>
  );
}

export default OurMission;
