import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SpecialProduct from '../components/SpecialProduct'
import Container from "../components/Container";
import { services } from "../utils/Data";
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../features/products/productSlice';

import ReactStars from "react-rating-stars-component";
import wish from "../images/wish.svg";
import jeans from "../images/jeans.png";
import jeans1 from "../images/jeans1.png";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import prodcompare from "../images/prodcompare.svg";
import { addToWishlist } from '../features/products/productSlice';

const Home = () => {

  const productState = useSelector((state) => state.product.product);
  const navigate = useNavigate()

  const dispatch = useDispatch();
  useEffect(() => {
    getallProducts();
  }, []);
  const getallProducts = () => {
    dispatch(getAllProducts());
  };

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };  



  return (
    <>

      <Container class1="home-wrapper-1 py-5">
        <div className='row'>
          <div className='col-6'>

            <div className='main-banner position-relative'>
              <img
                src='images/mainbanner02.png'
                className='img-fluid rounded-3'
                alt='main banner'
              />
              <div className='main-banner-content position-absolute'>
                {/* <h5>ALWAYS READY</h5>
                <h4>10% OFF</h4>
                <p>Women's jackets <br />
                  and dresses by <br />
                  Nike, Bershka, <br />
                  Zara, Shein <br />
                  and more</p>
                <Link className='button'>SHOP WOMEN </Link> */}
              </div>
            </div>

          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>


              <div className='small-banner position-relative'>
                <img
                  src='images/catbanner14.png'
                  className='img-fluid rounded-3'
                  alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  {/* <h5>Discount</h5>
                <h4>15% OFF</h4>
                <p>The second item <br />
                 when you buy <br />
                  two or more items of <br />
                  men's shoes <br />
                   </p> */}

                </div>
              </div>

              <div className='small-banner position-relative'>
                <img
                  src='images/catbanner11.png'
                  className='img-fluid rounded-3'
                  alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  {/* <h5>Discount</h5> 
                <h4>15% OFF</h4>
                <p>The second item <br />
                 when you buy <br />
                  two or more items of <br />
                  men's shoes <br />
                   </p> */}

                </div>
              </div>

              <div className='small-banner position-relative'>
                <img
                  src='images/catbanner13.png'
                  className='img-fluid rounded-3'
                  alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  {/*  <h5>Discount</h5> 
                <h4>15% OFF</h4>
                <p>The second item <br />
                 when you buy <br />
                  two or more items of <br />
                  men's shoes <br />
                   </p> */}

                </div>
              </div>

              <div className='small-banner position-relative'>
                <img
                  src='images/catbanner17.png'
                  className='img-fluid rounded-3'
                  alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  {/* <h5>Discount</h5> 
                <h4>15% OFF</h4>
                <p>The second item <br />
                 when you buy <br />
                  two or more items of <br />
                  men's shoes <br />
                   </p> */}

                </div>
              </div>



            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {
                services?.map((i, j) => {
                  return (
                    <div className="d-flex align-items-center gap-15" key={j}>
                      <img src={i.images} alt="services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Container>

      {/* <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>T-shirt</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/cat-Tshirt.png" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>T-shirt</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/cat-Tshirt.png" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>T-shirt</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/cat-Tshirt.png" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>T-shirt</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/cat-Tshirt.png" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>T-shirt</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/cat-Tshirt.png" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>T-shirt</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/cat-Tshirt.png" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>T-shirt</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/cat-Tshirt.png" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>T-shirt</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/cat-Tshirt.png" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container> */}

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
          </div>
          <div className='row'>
          {productState && productState?.map((item, index) => {
            if (item.tags === "featured") {
              return (
                <div
                  key={index}
                  className={"col-3"}
                >
                  <div
                  
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
                        src={item?.images[0].url}
                        alt='product images'
                      />
                      <img
                        className='img-fluid'
                        src={item?.images[0].url}
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
                      <p className='price'>NRs.{item?.price}</p>
                    </div>
                    <div className='action-bar position-absolute'>
                      <div className='d-flex flex-column gap-15'>
                        <button className='border-0 bg-transparent'>
                          <img src={prodcompare} alt="compare" />
                        </button>
                        <button className='border-0 bg-transparent'>
                          <img onClick={()=>navigate("/product/"+item?._id)} src={view} alt="view" />
                        </button>
                       {/*  <button className='border-0 bg-transparent'>
                          <img src={addcart} alt="addcart" />
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-1.png"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                {/* <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p> */}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-2.png"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                {/*  <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p> */}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-7.png"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                {/* <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-4.png"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                {/* <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">
                  From $699 or $116.58/mo. for 12 mo.*
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
{/* 
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Special Products</h3>
          </div>
        </div>
        <div className='row'>
          {productState && productState?.map((item, index) => {
            if (item.tags === "special") {
              return (
                <SpecialProduct
                  key={index}
                  id={item?._id}
                  brand={item?.brand}
                  title={item?.title}
                  totalrating={item?.totalrating.toString()}
                  price={item?.price}
                  sold={item?.sold}
                  quantity={item?.quantity}
                />
              );
            }
          })}
        </div>
      </Container> */}

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
        </div>
        <div className='row'>
          {productState && productState?.map((item, index) => {
            if (item.tags === "popular") {
              return (
                <div
                  key={index}
                  className={"col-3"}
                >
                  <div
                    
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
                        src={item?.images[0].url}
                        alt='product images'
                      />
                      <img
                        className='img-fluid'
                        src={item?.images[0].url}
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
                      <p className='price'>NRs.{item?.price}</p>
                    </div>
                    <div className='action-bar position-absolute'>
                      <div className='d-flex flex-column gap-15'>
                        <button className='border-0 bg-transparent'>
                          <img src={prodcompare} alt="compare" />
                        </button>
                        <button className='border-0 bg-transparent'>
                          <img onClick={()=>navigate("/product/"+item?._id)} src={view} alt="view" />
                        </button>
                        {/*<button className='border-0 bg-transparent'>
                          <img src={addcart} alt="addcart" />
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </Container>


    </>

  )
}

export default Home