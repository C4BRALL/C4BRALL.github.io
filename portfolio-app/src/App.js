import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import Navbar from './components/Navbar';
import Education from './pages/Education';
import WebTec from './pages/WebTec';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={ <About /> } />
          <Route path="/projects" element={ <Project /> } />
          <Route path="/education" element={ <Education /> } />
          <Route path="/web-tech" element={ <WebTec /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
