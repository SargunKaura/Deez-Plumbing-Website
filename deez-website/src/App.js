import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppContext.js';
import Home from './components/Home.js';
import OurMission from './components/OurMission.js';
import BookAppointment from './components/BookAppointment.js';

function App() {
  return (
    <AppProvider>
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/OurMission" element={<OurMission />} />
              <Route path="/BookAppointment" element={<BookAppointment />} />
            </Routes>
        </Router>
    </AppProvider>
  );
}

export default App;
