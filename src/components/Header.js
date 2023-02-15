import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='header-top-strip py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
          <p className='text-white mb-0'>Free Shipping Over Rs.2000</p>
          </div>
          
          <div className='col-6'>
          <p className='text-end text-white mb-0'> 
            Hotline: <a className='text-white' href="tel:+977 9742520951"> +977 9742520951</a></p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header