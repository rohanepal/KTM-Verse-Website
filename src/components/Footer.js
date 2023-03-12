import React from 'react'
import { Link } from 'react-router-dom'
import {BsInstagram, BsYoutube, BsFacebook} from 'react-icons/bs';
import {FaTiktok} from 'react-icons/fa'
import newsletter from "../images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src={newsletter} alt='newsletter'></img>
                <h2 className='mb-0 text-white'> Sign Up For Newsletter</h2>
              </div>
            </div>

            <div className='col-7'>
               <div className="input-group">
                 <input 
                  type="text" 
                 className="form-control py-1" 
                 placeholder="Enter Your Email Address" 
                 aria-label="Enter Your Email Address" 
                 aria-describedby="basic-addon2"/>
                 <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                 </span>
                </div>
            </div>
          </div>

        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
             <h4 className='text-white mb-4'>Contact Us</h4>
             <div>
              <address className='text-white fs-6'>
                Chhaya Center, Shop No: 219 <br />
                Amrit Marg, Thamel, <br />
                Kathmandu, Nepal
              </address>
              <a href='tel:+977 9742520951' className='mt-3 d-block mb-1 text-white'>
                +977 9742520951
              </a>
              <a href='mailto:ktmverse360@gmail.com' className='mt-2 d-block mb-0 text-white'>
                ktmverse360@gmail.com
              </a>
              <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                <a className='text-white' href=''> 
                  <BsInstagram className='fs-4' />
                </a>
                <a className='text-white' href=''>
                  <BsFacebook className='fs-4' />
                </a>
                <a className='text-white' href=''>
                 <FaTiktok className='fs-4' />
                </a>
                <a className='text-white' href=''>
                 <BsYoutube className='fs-4' />
                 
                </a>
              </div>
             </div>
            </div>
            
            <div className='col-3'>
             <h4 className='text-white mb-4'>Information</h4>
             <div className='footer-link d-flex flex-column'>
              <Link to="/privacy-policy" className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link to="/refund-policy"className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link to="/shipping-policy"className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link to="/term-conditions"className='text-white py-2 mb-1'>Terms & Condition</Link>
             </div>
            </div>
             
            <div className='col-3'>
             <h4 className='text-white mb-4'>Account</h4>
             <div className='footer-link d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>About Us</Link>
              <Link className='text-white py-2 mb-1'>Faq</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
              <Link className='text-white py-2 mb-1'>Size Chart</Link>
             </div>
            </div>
            
            <div className='col-2'>
             <h4 className='text-white mb-4'>Quick Links</h4>
             <div className='footer-link d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Jeans</Link>
              <Link className='text-white py-2 mb-1'>Sneakers</Link>
              <Link className='text-white py-2 mb-1'>Jewellery</Link>
              <Link className='text-white py-2 mb-1'>Bags</Link>
             </div>
            </div>
             
          </div>
        </div>
         
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()}; Powered by KTM-Verse
              </p>
            </div>
          </div>
        </div>
      </footer>
     
    </>
  )
}

export default Footer