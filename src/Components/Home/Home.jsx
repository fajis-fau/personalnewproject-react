import React from 'react'
import './Home.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import Programs from '../../Components/Programs/Programs'
import About from '../../Components/About/About'
import Plans from '../../Components/Plans/Plans'
import Testimanls from '../Testimanls/Testimanls'



const Home = () => {
  const transition = { type: 'spring', duration: 3 }
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <>

    <div className="home">
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <div className="the-best-add">
          <motion.div
            initial={{ left: mobile ? '165px' : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}

          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your </span>
          </div>
          <div>
            <span className='stroke-text'>Ideal body</span>
          </div>
          <div className="span">
            IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE YOUR LIFE TO FULLEST
          </div>
        </div>
        <div className="figures">
          <div>
            <span className='span-p'>+140</span>
            <span>expert coches</span>

          </div>
          <div>
            <span className='span-p'>+978</span>
            <span>members joined</span>

          </div>
          <div>
            <span className='span-p'>+50</span>
            <span>fitness programs</span>

          </div>
        </div>
        <div className="hero-button">
          <button className="btn">Get Start</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>


        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}
          className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart rate</span>
          <span>100 bpm</span>
        </motion.div>
        <img src={hero_image} alt="" className='hero-image' />
        <motion.img
          initial={{ right: '111rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          src={hero_image_back} alt="" className='hero-back-image' />
        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}
          className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>228 kcal</span>
          </div>

        </motion.div>
       
      </div>
     
    </div>
     <Programs />
     <About />
     <Plans/>
     <Testimanls/>


</>


  )
}

export default Home