import React from 'react'
import './Hero.css'
import hero from './hero-integra.jpg'

function Hero() {
  return (
    <div className='hero'>
      <img src={hero} className='hero_Image' alt='#' />
			<div className="hero_Text">Revvy</div>
    </div>
  )
}

export default Hero
