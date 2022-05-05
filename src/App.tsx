import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Reports from './Pages/Reports';
import Metrics from './Pages/Metrics';
import ResponsiveAppBar from './Components/ResponsiveAppbar';

function App() {
  return (
    <div className="App">
      <Router>
      <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/metrics" element={<Metrics />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
