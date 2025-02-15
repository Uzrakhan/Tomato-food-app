import React,{ useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import CategoryList from './Components/CategoryList';
import NavBar from './Components/NavBar';
import RestaurantList from './Components/RestaurantList';
import './App.css'


function Layout({children}) {
  const location = useLocation();

  return(
    <div>
      {location.pathname !== '/' && <NavBar />}
      {children}
    </div>
  )
}


function App() {
  
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/restaurants' element={<CategoryList />}/>
          <Route path='/restaurants/:category' element={<RestaurantList />}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;
