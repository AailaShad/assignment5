import React from 'react'
import Navbar from './Navbar'
import { FaHouseFloodWaterCircleArrowRight } from 'react-icons/fa6'
import { WiNightRainWind } from 'react-icons/wi'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-black bg-no-repeat bg-[url(/po.png)]'
    style={{backgroundSize:"35%", 
      backgroundPosition:"left-2px",
      top:20,
      
   
      
    }}
    >
<Navbar/>

<div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
<div className='hidden lg:block'></div>
<div className='text-[60px] sm:text-[95px] font-semibold leading-tight right-96 text-yellow-400 text-center mt-9'>
  <div >
    <p data-aos="zoom-in-up" ><i>I'm</i></p>
    <p data-aos="zoom-in-up"><i>Aaila</i></p>
    <p data-aos="zoom-in-up"><i>Shad</i></p>
  </div>
</div>


</div>

</div>
  )
}

export default Hero