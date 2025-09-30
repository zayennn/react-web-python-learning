import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Landing from './pages/landing/App'
import Pelajaran from './pages/pelajaran/Index'

// import utils
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/pelajaran" element={<Pelajaran/>} />
      </Routes>
    </Router>
  )
};

export default App;