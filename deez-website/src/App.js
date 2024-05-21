import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import OurMission from './components/OurMission.js';
import BookAppointment from './components/BookAppointment.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurMission" element={<OurMission />} />
          <Route path="/BookAppointment" element={<BookAppointment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
