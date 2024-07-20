import { React, useState } from 'react'
import './Testimanls.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import Join from '../Join/Join'
const Testimanls = () => {
  const [select, setSelect] = useState(0);
  const tLenth = testimonialsData.length;
  return (
    <div className="test">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className='stroke-text'>WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <span>
          {testimonialsData[select].review}
        </span>
        <span>
          <span>
            {testimonialsData[select].name}
          </span>
          -{testimonialsData[select].status}
        </span>
        <Join />
      </div>

      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[select].image} alt="" />
        <div className="arroes">
          <img onClick={() => (
            select === 0 ? setSelect(tLenth - 1) :
              setSelect((prev) => prev - 1)
          )} src={leftArrow} alt="" />
          <img onClick={() => (
            select === tLenth - 1 ? setSelect(0) :
              setSelect((prev) => prev + 1)
          )}
            src={rightArrow} alt="" />
        </div>
      </div>

    </div>

  )
}

export default Testimanls