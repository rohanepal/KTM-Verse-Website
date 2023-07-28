import React, { useEffect, useState} from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import cart01 from "../images/cart01.svg";
import menu from "../images/menu.svg";
import { useDispatch, useSelector } from 'react-redux';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { getAProduct } from "../features/products/productSlice";
import { getUserCart } from "../features/user/userSlice";


const Header = () => {
  const dispatch = useDispatch();
  
  const authState = useSelector(state => state?.auth)                        // for login
  const cartState = useSelector(state => state?.auth.cartProducts)         // for cart total
  const productState = useSelector(state => state?.product?.product)           // for search
  const [productOpt,setProductOpt]=useState([])
  const [paginate, setPaginate] = useState(true);
  const navigate = useNavigate()

  const [total,setTotalAmount]=useState(null)
  const getTokenFromLocalStorage = localStorage.getItem("customer")
? JSON.parse(localStorage.getItem("customer"))
: null;

const config2 = {
headers: {
  Authorization: `Bearer ${
    getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
  }`,
  Accept: "application/json",
},
};
useEffect(() => {
   dispatch(getUserCart(config2))
},[])
  
  useEffect(() => {                    // for cart total
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + (Number(cartState[index].quantity) * Number(cartState[index].price))
    }
    setTotalAmount(sum)
 },[cartState])

 useEffect(() => {                      // for search
  let data = []
  for (let index = 0; index < productState?.length; index++) {
    const element = productState[index];
    data.push({id:index,prod:element?._id,name:element?.title})
  } 
  setProductOpt(data)
 },[productState])


 
  return (
     <>
    <header className='header-top-strip py-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
          <p className='text-white mb-0'>Free Shipping Over Rs.2000</p>
          </div>
          
          <div className='col-6'>
          <p className='text-end text-white mb-0'> 
            Telephone: <a className='text-white' href="tel:+977 9742520951"> +977 9742520951</a></p>
          </div>
        </div>
      </div>
    </header>

    <header className='header-upper py-3'>
      <div className='container-xxl'>
        <div className='row align-items-centre'>
          <div className='col-2'>
            <h2>
              <Link to={'/'} className='text-white '> KTM-Verse</Link>
            </h2>
          </div>
          <div className='col-5'>
          <div className="input-group">
          <Typeahead
              id="pagination-example"
              onPaginate={() => console.log('Results paginated')}
              onChange={(selected) => {
                  navigate(`/product/${selected[0]?.prod}`)
                  dispatch(getAProduct(selected[0]?.prod))
              }}
              options={productOpt}
              paginate={paginate}
              labelKey={"name"}
              minLength={2}
              placeholder="Search for Products here..."
            />
           <span className="input-group-text p-3" id="basic-addon2">
            <BsSearch className='fs-6' />
           </span>
         </div>
          </div>
          <div className='col-5'>
           <div className='header-upper-links d-flex align-items-center justify-content-between'>
            <div>
              <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white'>
              <img src={compare} alt='compare'></img>
              <p className='mb-0 justify-content-between align-items-center'>
                Compare <br /> Products
              </p>
              </Link>
            </div>
            <div>
            <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
              <img src={wishlist} alt='wishlist'></img>
              <p className='mb-0 justify-content-between align-items-center'>
                Favourite <br /> Wishlist
              </p>
              </Link>
            </div>
            <div>
            <Link 
               to={authState?.user===null ? "/login":"/my-orders"} 
               className='d-flex align-items-center gap-10 text-white'>
              <img src={user} alt='user'></img>
                {
                  authState?.user===null ? <p className='mb-0 justify-content-between align-items-center'>
                  Login <br /> Account
                </p> :<p className='mb-0 justify-content-between align-items-center'>
                Welcome <br />{authState?.user?.firstname}
              </p>
                }
              </Link>
            </div>
            <div>
            <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
              <img src={cart01} alt='cart'></img>
               <div className='d-flex flex-column gap-10'>
                <span className='badge bg-white text-dark'>{cartState?.length ? cartState?.length : 0}</span>
                <p className='mb-0'> NRs. {cartState?.total ? cartState.total : 0}</p>
               </div>
              </Link>
            </div>
           </div>
          </div>
        </div>
      </div>
    </header>

    <header className='header-bottom py-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'></div>
           <div className='menu-bottom d-flex align-items-center gap-30'>
            <div>
            <div className='dropdown'>
              <button 
                className='btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center'
                type="button" 
                id="dropdownMenuButton1" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                 <img src={menu} alt='menu'></img>
                 <span className='me-5 d-inline-block'>
                   Shop Categories
                </span>
              </button>
              <ul className='dropdown-menu' aria-labelledby="dropdownMenuButton1">
                <li>
                  <Link className='dropdown-item text-white' to="">
                  Action
                  </Link>
               </li>
                <li>
                  <Link className='dropdown-item text-white' to="">
                  Another action
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item text-white' to="">
                  Something else here
                  </Link>
                </li>
              </ul>
            </div>
            </div>
            <div className='menu-links'>
              <div className='d-flex align-items-centre gap-30'>
                <NavLink to="/">Home</NavLink>
                <NavLink to='/product'>Our Store</NavLink>
                <NavLink to='/Contact'>Contact</NavLink>
              </div>

            </div>
           </div>
        </div>
      </div>
    </header>

 
  </>
  )
}

export default Header
