
import './App.css';
import TopBar from './top';
import Home from './home';
import BottomDiv from './bottomDiv';
import Signup from './signup';
import React from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Products from './products';



function App() {



  return (
    <div className="App">
    <TopBar />
 
  <Routes>
    <Route index element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/products" element = {<Products />} />
    
  </Routes>

    <BottomDiv />
     
    </div>
  );
}

export default App;
