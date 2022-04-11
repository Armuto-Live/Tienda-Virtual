import React,{useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import PageHome from "./Components/PageHome";
import Footer from "./Components/Footer";
import PageUser from "./Components/PageUser";
import PageCart from "./Components/PageCart";
import axios from 'axios';

function App() {
  const [data,setData] = useState([]);
  const url = "https://62509eb2977373573f40123b.mockapi.io/api/v1/products";

  async function makeGetRequest() {
    let res = await axios.get(url);
    setData(res.data);}
    
    useEffect(
      ()=>{makeGetRequest();}
    ,[]);

  return (
    <div className="App">
      <div className="App-content" >
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<PageHome data={data} />}  />
            <Route exact path="/home" element={<PageHome data={data} />} />
            <Route exact path="/user" element={<PageUser/>} />
            <Route exact path="/cart" element={<PageCart/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
