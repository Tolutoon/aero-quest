import React, {useEffect} from 'react';
import Hero from '../../assets/images/imag12.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Home() {
  //useeffect to set the animation

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className='home flex column container'>
        <div className='mainText'>
            <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting Memories With Us</h1>
        </div>

        <div className='heroImg'>
            <img src={Hero} className='plane'/>
        </div>
    </div>
  )
}

export default Home