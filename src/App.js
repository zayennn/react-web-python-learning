import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Landing from './pages/landing/App'
import Pelajaran from './pages/pelajaran/pages/pelajaran/Materi'

// import utils
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/pelajaran" element={<Pelajaran/>} />
        <Route path="/pelajaran/materi/:id" element={<Pelajaran/>} />
      </Routes>
    </Router>
  )
};

export default App;