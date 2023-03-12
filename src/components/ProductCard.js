import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import wish from "../images/wish.svg";
import jeans from "../images/jeans.png";
import jeans1 from "../images/jeans1.png";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import prodcompare from "../images/prodcompare.svg";



export const ProductCard = (props) => {
  const { grid } = props;
  console.log(grid);
 let  location = useLocation();
       
  return (
    <>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
           to={`${
            location.pathname === "/"
              ? "/product/:id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
           className='product-card position-relative'
         >
             <div className='wishlist-icon position-absolute'>
               <button className='border-0 bg-transparent'>
               <img src={wish} alt='wishlist' />
               </button>
             </div>
          <div className='product-image'>
            <img className='img-fluid' src={jeans} alt='product images' />
            <img className='img-fluid' src={jeans1} alt='product images' />
          </div>
          <div className='product-details'> 
           <h6 className='product-details'>Zara </h6>
           <h5 className='product-title'>
           Love Your Curves
           </h5>
           <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
           <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Zara's jeans are an iconic brand of denim with over 150 years of history.
             Known for their durability, comfort, and timeless style, 
             they remain a popular choice for men and women. 
             With a variety of styles and fits available, 
             there's a pair of Levi's jeans for everyone.
            </p>
           <p className='price'>NRs.5000.00</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
            <button className='border-0 bg-transparent'>
                 <img src={prodcompare} alt="compare" />
             </button>
             <button className='border-0 bg-transparent'>
                 <img src={view} alt="view" />
              </button>
              <button className='border-0 bg-transparent'>
                 <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
    </div>

    <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link 
          to={`${
            location.pathname === "/"
              ? "/product/:id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
           className='product-card position-relative'
           >
             <div className='wishlist-icon position-absolute'>
             <button className='border-0 bg-transparent'>
                  <img src={wish} alt='wishlist' />
                </button>
             </div>
          <div className='product-image'>
            <img className='img-fluid' src={jeans} alt='product images' />
            <img className='img-fluid' src={jeans1} alt='product images' />
          </div>
          <div className='product-details'> 
           <h6 className='product-details'>Zara </h6>
           <h5 className='product-title'>
           Love Your Curves
           </h5>
           <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Zara's jeans are an iconic brand of denim with over 150 years of history.
             Known for their durability, comfort, and timeless style, 
             they remain a popular choice for men and women. 
             With a variety of styles and fits available, 
             there's a pair of Levi's jeans for everyone.
            </p>
           <p className='price'>NRs.5000.00</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
            <button className='border-0 bg-transparent'>
                 <img src={prodcompare} alt="compare" />
             </button>
             <button className='border-0 bg-transparent'>
                 <img src={view} alt="view" />
              </button>
              <button className='border-0 bg-transparent'>
                 <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
    </div>

    </>
   
  )
}
export default ProductCard;