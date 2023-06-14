import React, { useState, useEffect } from 'react';
import "./App.scss";
import { Route, Routes } from 'react-router-dom';


import Home from './Pages/Home';
import PreHome from './Pages/PreHome';

function App (){

    return (
      <Routes>
          <Route path="/home" exact={true} element={<Home/>}/>
          <Route path="/" exact={true} element={<PreHome/>}/>
      </Routes>
    );
}

export default App;



