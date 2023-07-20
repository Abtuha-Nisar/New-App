import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Accountant from './components/Accountant';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Accountantfess from './components/Accountantfess';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Accountant" element={<Accountant />} />
        <Route path="/AccountantFess" element={<Accountantfess />} />
      </Routes>
    </Router>
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);
