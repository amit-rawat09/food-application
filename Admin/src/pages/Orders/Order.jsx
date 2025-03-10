import React from 'react'
import './Order.css'
import { useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify";
import { useEffect } from 'react';
import { assets } from '../../assets/assets.js'

function Order({ url }) {
  const [order, setorder] = useState([])

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list")
    if (response.data.success) {
      setorder(response.data.data)
      console.log(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", { orderId, status: event.target.value })
    if (response.data.success) {
      await fetchAllOrders()
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])
  return (
    <div>
      <div className="order add">
        <h3>Order Page</h3>
        <div className="order-list">
          {
            order.map((order, idx) => {
              return (
                <div key={idx} className="order-item">
                  <img src={assets.parcel} alt="" />
                  <div className="">
                    <p className="order-item-food">
                      {order.items.map((item, idx) => {
                        if (idx === order.items.length - 1) {
                          return item.name + " x " + item.quantity
                        }
                        else {
                          return item.name + " x " + item.quantity + ", "
                        }
                      })}
                    </p>
                    <p className="order-item-name">
                      {order.address.firstName + " " + order.address.lastName}
                    </p>
                    <div className="order-item-address">
                      <p>{order.address.street + ","}</p>
                      <p>{order.address.city + "," + order.address.state + "," + order.address.country + "," + order.address.zipcode}</p>
                    </div>
                    <p className="order-item-phone">
                      {
                        order.address.phone
                      }
                    </p>
                  </div>
                  <p>Item : {order.items.length}</p>
                  <p>${order.amount}</p>
                  <select name="" id="" onChange={(e) => statusHandler(e, order._id)} value={order.status}>
                    <option value="Food Processing">Food Processing</option>
                    <option value="Out For delevry">Out For delivery</option>
                    <option value="Deleveried">Delivered</option>
                  </select>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Order