import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>To shape you</span>
      </div>
      <div className="programs-catageries">
        {programsData.map((programs)=>(
          <div className="catageries">
            {programs.image}
            <span>{programs.heading}</span>
            <span>{programs.details}</span>
            <div className="join-now"><span>Join now</span> <img src={rightArrow}alt="" /></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs

