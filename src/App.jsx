import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AuthentificationSuccess from './components/AuthentificationSuccess'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/authentificationSuccess" element={<AuthentificationSuccess />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
