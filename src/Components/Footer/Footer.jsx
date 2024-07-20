import React from 'react'
import './Footer.css'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="image-f">
        <div className="social-f">
          <img src={instagram} alt="" />
          <img src={github} alt="" />
          <img src={linkedin} alt="" />
        </div>


        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer