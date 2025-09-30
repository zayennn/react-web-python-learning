import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Landing from './pages/landing/App'
import Pelajaran from './pages/pelajaran/Index'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/pelajaran" element={<Pelajaran/>} />
      </Routes>
    </Router>
  )
};

export default App;