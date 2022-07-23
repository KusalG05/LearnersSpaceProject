import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import BestReviews from './Components/BestReviews';
import { Footer } from './Components/Footer';
import MReviews from './Components/MusicInventory/Reviews';
import {  MInstruments } from "./Components/MusicInventory/Instruments";
import MTutorials from "./Components/MusicInventory/Tutorials";
import SReviews from './Components/SportsInventory/Reviews';
import {  SInstruments } from "./Components/SportsInventory/Instruments";
import { STutorials }from "./Components/SportsInventory/Tutorials";
import TReviews from './Components/TechInventory/Reviews';
import {  TInstruments } from "./Components/TechInventory/Instruments";
import { TTutorials }from "./Components/TechInventory/Tutorials";
import ContactUs from "./Components/ContactUs";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/MReviews" element={<MReviews/>}>
        </Route>
        <Route exact path="/MInstruments" element={<MInstruments/>}>
        </Route>
        <Route exact path="/MTutorials" element={<MTutorials/>}>
        </Route>
        <Route exact path="/SReviews" element={<SReviews/>}>
        </Route>
        <Route exact path="/STutorials" element={<STutorials/>}>
        </Route>
        <Route exact path="/SInstruments" element={<SInstruments/>}>
        </Route>
        <Route exact path="/TReviews" element={<TReviews/>}>
        </Route>
        <Route exact path="/TInstruments" element={<TInstruments/>}>
        </Route>
        <Route exact path="/TTutorials" element={<TTutorials/>}>
        </Route>
        <Route exact path="/ContactUs" element={<ContactUs/>}>
        </Route>
        <Route path="/" element={<BestReviews />}>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
