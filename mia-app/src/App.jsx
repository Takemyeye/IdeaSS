import React, { useContext } from 'react';
import './App.scss';
import NotFound from './components/404';
import Landing from './components/LandingPage';
import Home from './components/Home';
import About from './components/component/pages/About';
import Works from './components/component/pages/Works';
import { Profile } from './components/Settings/profile';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ActiveProvider } from './components/ActiveContext';
import ActiveContext from './components/ActiveContext';
import { Register } from './private/register';

const ProtectedRoute = ({ element: Element }) => {
  const { user } = useContext(ActiveContext);
  return user ? <Element /> : <Navigate to="/register" />;
};

function App() {
  return (
    <Router>
      <ActiveProvider>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='*' element={<NotFound />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<ProtectedRoute element={About} />} />
          <Route exact path='/works' element={<ProtectedRoute element={Works} />} />
          <Route exact path='/profile' element={<ProtectedRoute element={Profile} />} />
        </Routes>
      </ActiveProvider>
    </Router>
  );
}

export default App;
