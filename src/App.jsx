import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Societies from './pages/Societies/Societies';
import Councils from './pages/Councils/Councils';
import SocietyDetail from './pages/Societies/SocietyDetail';
import CouncilDetail from './pages/Councils/CouncilDetail';
import Achievements from './pages/Achievements/Achievements';
import Gallery from './pages/Gallery/Gallery';
import PastEvents from './pages/PastEvents/PastEvents';
import UpcommingEvents from './pages/UpcommingEvents/UpcommingEvents';
import Journey from './components/Essentials/Journey';
import Notifications from './components/Essentials/Journey';
import Newsletter from './components/Essentials/Newsletter';
import Team from './components/Essentials/Team';


import Contact from './components/Essentials/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/societies" element={<Societies />} />
        <Route path="/societies/:societyId" element={<SocietyDetail />} />
        <Route path="/societies/:societyId/past-events" element={<PastEvents />} />
        <Route path="/societies/:societyId/upcoming-events" element={<UpcommingEvents />} />
        <Route path="/societies/:societyId/achievements" element={<Achievements />} />
        <Route path="/societies/:societyId/gallery" element={<Gallery />} />
        <Route path="/councils" element={<Councils />} />
        <Route path="/councils/:councilId" element={<CouncilDetail />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/upcoming-events" element={<UpcommingEvents />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/newsletters" element={<Newsletter />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App