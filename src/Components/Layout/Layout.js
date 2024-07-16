import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from '../Home/Home';
import Programs from '../Programs/Programs';
import About from '../About/About';
import Plans from '../Plans/Plans';
import Testimanls from '../Testimanls/Testimanls';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Layout = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/abouts' element={<About />} />
          <Route path='/plans' element={<Plans />} />
          <Route path='/testimanls' element={<Testimanls />} />
        </Routes>
        <Footer />
      </Router>


    </>
  )
}

export default Layout