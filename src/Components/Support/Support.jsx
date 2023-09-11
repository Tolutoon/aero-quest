import React from 'react';
import gridImg from '../../assets/images/gridImg.png';

function Support() {
  return (
    <div className='support container section'>
      <div className='sectionContainer'>
        <div className='titleDiv'>
          <small style={{textTransform: 'uppercase', letterSpacing: '0.8rem', fontSize: 10}}>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plans, see what to expect along 
            the journey!</p>
        </div>

        <div className='infoDiv grid'>
          <div className='textDiv grid'>

            <div className='singleInfo'>
              <span className='number'>01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>Find help with booking and travel plans, see what to expect along
                the journey to your favorite destinations.
              </p>
            </div>

            <div className='singleInfo'>
              <span className='number colorOne'>02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>Find help with booking and travel plans, see what to expect along
                the journey to your favorite destinations.
              </p>
            </div>

            <div className='singleInfo'>
              <span className='number colorTwo'>03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>Find help with booking and travel plans, see what to expect along
                the journey to your favorite destinations.
              </p>
            </div>
          </div>
          <div className='gridImg' >
          <img src={gridImg} alt=''/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Support