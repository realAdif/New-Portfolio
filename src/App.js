import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Pages/Navbar';
import Homepage from './Pages/Homepage';
import Skills from './Pages/Skills';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'
        element={<Homepage/>}
        />
        <Route path='/projects'
        element={<Skills/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
