import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './component/Landing';

import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />

      </Routes>
    </Router>
  );
}

export default App;
