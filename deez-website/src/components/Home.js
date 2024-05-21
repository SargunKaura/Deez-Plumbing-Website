import './Home.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Home() {
  return (
    <div className="App">
      <h1>Home Page</h1>
      <Link to="/OurMission">
        <button>Our Mission</button>
      </Link>
      <Link to="/BookAppointment">
        <button>Book Appointment</button>
      </Link>
    </div>
  );
}

export default Home;
