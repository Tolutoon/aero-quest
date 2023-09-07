import React from 'react';
import Hero from '../../assets/images/imag12.jpg'

function Home() {
  return (
    <div className='home flex column container'>
        <div className='mainText'>
            <h1>Create Ever-lasting Memories With Us</h1>
        </div>

        <div className='heroImg'>
            <img src={Hero} className='plane'/>
        </div>
    </div>
  )
}

export default Home