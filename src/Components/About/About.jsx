import React from 'react'
import './About.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const About = () => {
  return (
    <div className="abouts" id="abouts">
      <div className="left-a">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-a">
        <span>Some reasons</span>
        <div><span>Why</span><span> Choose Us</span></div>
      
      <div className="detials-a">
        <div>
          <img src={tick} alt="" />
          <span>OVER 140+ EXPERT COACHES</span>
        </div>
        <div>
          <img src={tick} alt="" />
          <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
        </div>
        <div>
          <img src={tick} alt="" />
          <span>1 FREE PROGRAM FOR NEW MEMBER</span>
        </div>
        <div>
          <img src={tick} alt="" />
          <span>RELITABLE PATNERS</span>
        </div>
      </div>
      <span className='span-r'>OUR PATNERS</span>
      <div className="patners">
        <img src={nike} alt="" />
        <img src={adidas} alt="" />
        <img src={nb} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About