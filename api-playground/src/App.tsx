import * as React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App():JSX.Element {
  return (
    <div>
    <Navbar/>
    <Sidebar/>
    <Footer/>
    </div>
  );
}

export default App;