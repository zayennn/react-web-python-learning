import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
      </Routes>
    </Router>
  )
};

export default App;