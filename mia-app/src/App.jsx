import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ActiveContext, { ActiveProvider } from './components/ActiveContext';
import React, { useContext } from 'react';
import { Register } from './private/register';
import { Profile } from './components/Settings/profile';
import Developers from './components/developres/developers';
import NotFound from './components/404';
import Landing from './components/LandingPage';
import Home from './components/Home';
import About from './components/component/pages/About';
import Works from './components/component/pages/Works';
import Maket from './components/component/maket';
import './App.scss';

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
          <Route exact path='/developers' element={<ProtectedRoute element={Developers} />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/profile' element={<ProtectedRoute element={Profile} />} />
          <Route exact path='/about' element={<ProtectedRoute element={About} />} />
          <Route exact path='/works' element={<ProtectedRoute element={Works} />} />
          <Route exact path='/maket' element={<ProtectedRoute element={Maket} />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </ActiveProvider>
    </Router>
  );
}

export default App;
