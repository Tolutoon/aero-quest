import React, {useEffect} from 'react';
import {SlCalender} from 'react-icons/sl';
import {LuShieldCheck} from 'react-icons/lu';
import {BsBookmarkCheck} from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Info() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className='info section'>
      <div className='infoContainer container'>
        <div className='titleDiv flex'>
          <h2 data-aos='fade-right' data-aos-duration='2500'>Travel to make memories all around the world</h2>
          <button data-aos='fade-left' data-aos-duration='2500' className='btn'>View All</button>
        </div>

        <div className='cardDiv grid'>

          <div data-aos='fade-up' data-aos-duration='2500' className='singleCard grid'>
            <div className='iconDiv flex'>
              <LuShieldCheck className='icon'/>
            </div>
            <span className='cardTitle'>Smart Checklist</span>
            <p>You can also call the airlines from your phone and
              book a flight ticket!
            </p>
          </div>
          

          <div data-aos='fade-up' data-aos-duration='3500' className='singleCard grid'>
            <div className='iconDiv flex colorOne'>
              <SlCalender className='icon'/>
            </div>
            <span className='cardTitle'>Book & Relax</span>
            <p>You can also call the airlines from your phone and
              book a flight ticket!
            </p>
          </div>

          <div data-aos='fade-up' data-aos-duration='4500' className='singleCard grid'>
            <div className='iconDiv flex colorTwo'>
              <BsBookmarkCheck className='icon'/>
            </div>
            <span className='cardTitle'>Save more</span>
            <p>You can also call the airlines from your phone and
              book a flight ticket!
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Info