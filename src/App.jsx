import React,{ useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import CategoryList from './Components/CategoryList';
import RestaurantList from './Components/RestaurantList';
import './App.css'

function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/' element={<CategoryList />}/>
          <Route path='/restaurants/:category' element={<RestaurantList />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
