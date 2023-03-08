import React from 'react'
import { Link } from 'react-router-dom'
import { BlogCard } from '../components/BlogCard'
import { ProductCard } from '../components/ProductCard'
import { SpecialProduct } from '../components/SpecialProduct'

const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>

            <div className='main-banner position-relative'>
              <img 
                src='images/mainbanner02.png' 
                className='img-fluid rounded-3' 
                alt='main banner' 
              />
              <div className='main-banner-content position-absolute'>
                <h5>ALWAYS READY</h5>
                <h4>10% OFF</h4>
                <p>Women's jackets <br />
                 and dresses by <br />
                  Nike, Bershka, <br />
                   Zara, Shein <br />
                   and more</p>
                <Link className='button'>SHOP WOMEN </Link>
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
      </div>
    </section>


    <section className='home-wrapper-2 py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-centre justify-content-between'>
             
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service.png' alt='services' />
                <div>
                 <h6>Free Shipping</h6>
                 <p className='mb-0'>From all orders over NRs.2000</p>
                </div> 
              </div>

              <div className='d-flex align-items-center gap-15'>
              <img src='images/service-02.png' alt='services' />
                <div>
                 <h6>Daily Suprise Offers</h6>
                 <p className='mb-0'>Save upto 25% off</p>
                </div>
              </div>

              <div className='d-flex align-items-center gap-15'>
              <img src='images/service-03.png' alt='services' />
                <div>
                 <h6>Support 24/7</h6>
                 <p className='mb-0'>Shop with an expert</p>
                </div>
              </div>
              
              <div className='d-flex align-items-center gap-15'>
              <img src='images/service-04.png' alt='services' />
                <div>
                 <h6>Affordable Prices</h6>
                 <p className='mb-0'>Ger Factory Default Price</p>
                </div>
              </div>

              <div className='d-flex align-items-center gap-15'>
              <img src='images/service-05.png' alt='services' />
                <div>
                 <h6>Secure Payments</h6>
                 <p className='mb-0'>100% Protected Payment</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>

    <section className='home-wrapper-2 py-5'>
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
    </section>

    <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
     </section>

     <section className='famous-wrapper py-5 home-wrapper-2'>
     <div className='container-xxl'>
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
                src="images/famous-3.png"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.png"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.png"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">
                  From $699 or $116.58/mo. for 12 mo.*
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
     </section>

     <section className='special-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
          </div>
        </div>
        <div className='row'>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>

      </div>
     </section>

     <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
     </section>
     
     <section className='blog-wrapper py-5 home-wrapper-2'>
     <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
     </section>
    
    
    </>

  )
}

export default Home