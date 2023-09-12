import React from 'react';
import {SlCalender} from 'react-icons/sl';
import {LuShieldCheck} from 'react-icons/lu';
import {BsBookmarkCheck} from 'react-icons/bs';

function Info() {
  return (
    <div className='info section'>
      <div className='infoContainer container'>
        <div className='titleDiv flex'>
          <h2>Travel to make memories all around the world</h2>
          <button className='btn'>View All</button>
        </div>

        <div className='cardDiv grid'>

          <div className='singleCard grid'>
            <div className='iconDiv flex'>
              <LuShieldCheck className='icon'/>
            </div>
            <span className='cardTitle'>Smart Checklist</span>
            <p>You can also call the airlines from your phone and
              book a flight ticket!
            </p>
          </div>
          

          <div className='singleCard grid'>
            <div className='iconDiv flex colorOne'>
              <SlCalender className='icon'/>
            </div>
            <span className='cardTitle'>Book & Relax</span>
            <p>You can also call the airlines from your phone and
              book a flight ticket!
            </p>
          </div>

          <div className='singleCard grid'>
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