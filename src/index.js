import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import About from './Components/About';
import Rooms from './Components/Rooms';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header/>
    <Banner/>
    <About/>
    <Rooms/>
  </>
);
