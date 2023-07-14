import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './components/HomePage';
import ServiceDetails from './components/ServiceDetails';
import './App.css'

function App() {

  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id/details" element={<ServiceDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
