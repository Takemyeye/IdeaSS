import React from 'react';
import './App.css';
import Home from './components/Home';
import NotFound from './components/404';
import Landing from './components/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/' element={<Landing />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
