import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from'./components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import {Grid} from '@material-ui/core';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        <Routes> {/* Antigo Switch*/}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
        </Routes>
      </div> 
      <Footer />
    </Router>
  );
}

export default App;
