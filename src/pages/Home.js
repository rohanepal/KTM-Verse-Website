import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative py-3'>
              <img 
                src='images/dress-1.jpg' 
                className='img-fluid rounded-3' 
                alt='main banner' 
              />
              <div className='main-banner-content position-absolute'>
                <h5>ALWAYS READY</h5>
                <h4>10% OFF</h4>
                <p>Women's jackets <br />
                 and dresses by <br />
                  Nike, Bershka, <br />
                   Zara, Shein and more</p>
                <Link>SHOP WOMEN </Link>
              </div>
              
            </div>
          </div>
          <div className='col-6'></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home