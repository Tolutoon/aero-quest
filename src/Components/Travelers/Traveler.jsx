import React from 'react';
import Paris from '../../assets/images/pariss.jpg';
import Person1 from '../../assets/images/person1.png';

function Traveler() {
  return (
    <div className='travelers container section'>
      <div className='sectionContainer'>
        <h2>Top travelers of this month!</h2>

        <div className='travelerContain grid'>
          {/* Single Passanger Card */}
          <div className='singleTraveler'>
            <img src={Paris} className='destinationImage' alt=''/>
            <div className='travelerDetails'>
              <div className='travelerPicture'>
                <img src={Person1} className='travelerImage' alt=''/>
              </div>
              <div className='travelerName'>
                <span>Julie</span>
              </div>
            </div>
          </div>
          {/* Single Passanger Card */}
          <div className='singleTraveler'>
            <img src={Paris} className='destinationImage' alt=''/>
            <div className='travelerDetails'>
              <div className='travelerPicture'>
                <img src={Person1} className='travelerImage' alt=''/>
              </div>
              <div className='travelerName'>
                <span>Julie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Traveler