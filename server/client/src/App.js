import './App.css';
import React from 'react';//components

import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import AllUsers from './components/AllUsers';
import Home from './components/Home';
import EditUser from './components/EditUser';

//router
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/all" element={<AllUsers />} />
        <Route exact path="/add" element={<AddUser />} />
        <Route exact path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
