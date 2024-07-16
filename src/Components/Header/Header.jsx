import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'


const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="header">
      <img src={logo} alt="" className='logo' />

      {(menuOpen === false && mobile === true ? (
        <div><img src={bars} alt="" /></div>
      ) : (
        <ul className='header-nav'>

          <li><Link to='/' className='link-li'>Home</Link></li>
          <li><Link to='/programs' className='link-li'>Programs</Link></li>
          <li><Link to='/abouts' className='link-li'>Abouts</Link></li>
          <li><Link to='/plans' className='link-li'>Plans</Link></li>
          <li><Link to='/testimanls' className='link-li'>Testimanls</Link></li>

        </ul>

      ))}



      <button className='button'>
        Logout
      </button>


    </div>

  )
}

export default Header