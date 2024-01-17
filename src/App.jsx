import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoginPage, HomePage, ResultsPage, VideoPage, MapPage, ProfilePage } from './Pages';
import { Modal } from './Components';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </Router>
  );
}
