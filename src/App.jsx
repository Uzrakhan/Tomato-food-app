import React,{ useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CategoryList from './Components/CategoryList';
import NavBar from './Components/NavBar';
import RestaurantList from './Components/RestaurantList';
import Footer from './Components/Footer';
import Overview from './Components/Overview';
import Order from './Components/Order';
import './App.css'
import RestaurantDetails from './pages/RestaurantDetails';
import RestaurantDetailsOverview from './pages/RestDetailsOverview';
import RestaurantDetailsOrderOnline from './pages/RestDetailsOrderOnline';
import RestaurantDetailsLayout from './pages/RestDetailsLayout';


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
          <Route path='/restaurants/:category' element={<RestaurantList />}/>
          <Route path="/restaurant/:id" element={<RestaurantDetailsOverview />}>
            <Route index element={<Overview />} /> {/* Default tab */}
            <Route path="overview" element={<Overview />} />
            <Route path="orderonline" element={<Order />}/>
          </Route>
          <Route path='/restaurants' element={<CategoryList />}/>
        </Routes>
      </Layout>
      <Footer />
    </Router>
  )
}

export default App;
