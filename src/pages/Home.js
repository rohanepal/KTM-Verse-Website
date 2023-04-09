import React from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from "../components/ProductCard"
import { SpecialProduct } from '../components/SpecialProduct'
import Container from "../components/Container";
import { services } from "../utils/Data";

const Home = () => {
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

    <Container class1="home-wrapper-2 py-5">
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
    </Container>

    <Container class1="featured-wrapper py-5 home-wrapper-2">
    <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            
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
     
     <Container class1="special-wrapper py-5 home-wrapper-2">
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
     </Container>

     <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
           
          </div>
     </Container>
     
     
    
    
    </>

  )
}

export default Home