import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbarmenu from './components/Navigation';
import ProfileRoute from './rountes/MyProfileRoute';
import Missions from './components/Missions';
import Rockets from './components/Rockets';

const App = () => (
  <>
    <Navbarmenu />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<ProfileRoute />} />
    </Routes>

  </>
);

export default App;
