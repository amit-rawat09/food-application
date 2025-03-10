import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

function Cart() {

  const { food_list, cardItem, getTotalCartAmount, removeFromCart,url } = useContext(StoreContext)

  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((items, idx) => {
            if (cardItem[items._id] > 0) {
              return <>
                <div className="cart-items-title cart-items-item " key={idx}>
                  <img src={url+"/images/"+items.image} alt="" />
                  <p>{items.name}</p>
                  <p>Rs. {items.price}</p>
                  <p>{cardItem[items._id]}</p>
                  <p>Rs. {items.price * cardItem[items._id]}</p>
                  <p><IoIosCloseCircle className='cross' onClick={() => removeFromCart(items._id)} /></p>
                </div>
                <hr />
              </>
            }
          })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="">
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs. {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs. {getTotalCartAmount() === 0 ? 0 : 50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs. {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div className="">
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promocode' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart