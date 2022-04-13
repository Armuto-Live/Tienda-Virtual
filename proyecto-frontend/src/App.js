import React,{useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PortadaView from './views/PortadaView';

function App() {
  return (
    <div className="App">
      <div className="App-content" >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<PortadaView/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
