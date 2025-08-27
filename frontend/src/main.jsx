import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Term from '/Pages/Term.jsx';
import About from '/Pages/About.jsx';
import ContactDeveloper from '/Pages/ContactDeveloper.jsx';
import HomePage from '/Pages/HomePage.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<App />} />
        <Route path="/term" element={<Term />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactDeveloper />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
