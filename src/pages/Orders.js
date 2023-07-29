import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../features/user/userSlice';
import { Link } from 'react-router-dom';
import LogoutIcon from '../images/cart01.svg';

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state?.auth?.getorderedProduct?.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-between align-items-center">
        <div className="col-6">
          <h1></h1>
        </div>
        <div className="col-6 text-end">
          <button onClick={handleLogout} className="btn btn-danger">
            Logout 
          </button>
          <Link to="/update-account">
            <button className="btn btn-primary mx-2">
              Update Account
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-4">
        <h2>Order History</h2>
        {orderState && orderState.length > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {orderState.map((order) =>
                order.orderItems.map((item, itemIndex) => (
                  <tr key={item?._id}>
                    {itemIndex === 0 && (
                      <td rowSpan={order.orderItems.length}>{order?._id}</td>
                    )}
                    <td>{item?.product?.title}</td>
                    <td>NRs. {item?.price}</td>
                    <td>
                      <div className="color-indicator" style={{ backgroundColor: item?.color?.title }}></div>
                    </td>
                    <td>{item?.quantity}</td>
                    {itemIndex === 0 && (
                      <td rowSpan={order.orderItems.length}>{order?.orderStatus}</td>
                    )}
                    {itemIndex === 0 && (
                      <td rowSpan={order.orderItems.length}>NRs. {order?.totalPriceAfterDiscount}</td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
