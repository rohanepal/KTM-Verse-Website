import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import wish from "../images/wish.svg";
import jeans from "../images/jeans.png";
import jeans1 from "../images/jeans1.png";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import prodcompare from "../images/prodcompare.svg";
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../features/products/productSlice';

const ProductCard = (props) => { 
  const { grid, data } = props;
  let location = useLocation();
  const dispatch = useDispatch();
  
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };   

  return (
    <>
      {data?.map((item, index) => {
          return (
            <div
            key={index}
            className={` ${location.pathname === "/product" ? `gr-${grid}` : "col-3"
              } `}
          >
           <Link
          //  to={`${
          //   location.pathname === "/"
          //     ? "/product/:id"
          //     : location.pathname === "/product/:id"
          //     ? "/product/:id"
          //     : ":id"
          // }`}
           className='product-card position-relative'
         >
             <div className='wishlist-icon position-absolute'>
               <button className='border-0 bg-transparent'>
                <img 
                   onClick={() => addToWish(item?._id)}
                   src={wish}
                   alt="wishlist"
                />
               </button>
             </div>
          <div className='product-image'>
            <img 
              className='img-fluid' 
              src={jeans}
              alt='product images' 
            />
            <img 
               className='img-fluid' 
               src={jeans1} 
               alt='product images' 
            />
          </div>
          <div className='product-details'> 
           <h6 className='brand'>{item?.brand} </h6>
           <h5 className='product-title'>{item?.title} </h5>
           <ReactStars
              count={5}
              size={24}
              value={item?.totalrating.toString()}
              edit={false}
              activeColor="#ffd700"
            />
           <p 
             className={`description ${
              grid === 12 ? "d-block" : "d-none"
              }`}
              dangerouslySetInnerHTML={{ __html: item?.description }}
            >
            </p>
           <p className='price'>NRs.{item?.price}</p>
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
          );
        })}
    </>
  );
};

 export default ProductCard