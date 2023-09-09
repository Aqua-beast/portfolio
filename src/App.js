import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact element={<Home />} path='/'/>
    <Route path='/about'/>
    <Route path='/resume'/>
    <Route path='/services'/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
