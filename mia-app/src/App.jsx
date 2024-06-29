import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/component/components/About';
import Works from './components/component/components/Works';
import NotFound from './components/404';
import Landing from './components/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ActiveProvider } from './components/ActiveContext';

function App() {
  return (
    <Router>
      <ActiveProvider>
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/works' element={<Works />} />
          <Route exact path='/' element={<Landing />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      </ActiveProvider>
    </Router>
  );
}

export default App;
