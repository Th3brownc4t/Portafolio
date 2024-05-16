import React from 'react';
import './App.css';
import Home from './Componentes/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portafolio from './Componentes/Portafolio';
import Sobremi from './Componentes/Sobremi';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Portafolio' element={<Portafolio></Portafolio>}></Route>
          <Route path='/Sobremi' element={<Sobremi></Sobremi>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
