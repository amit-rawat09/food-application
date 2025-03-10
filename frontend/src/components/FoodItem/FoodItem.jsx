import React, { useContext, useState } from 'react'
import './FoodItem.css'

import { assets } from '../../assets/asset';
import { FaPlus } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { StoreContext } from '../../context/StoreContext';

function FoodItem({ id, name, price, description, image }) {

    const { cardItem, addToCart, removeFromCart, url } = useContext(StoreContext)

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={url + "/images/" + image} alt="no" />
                {
                    !cardItem[id]
                        ? <FaPlus className='add' onClick={() => addToCart(id)} /> :
                        <div className="food-item-counter">
                            <CiCircleMinus className='food-item-counter-img' onClick={() => removeFromCart(id)} />
                            <p>{cardItem[id]}</p>
                            <CiCirclePlus className='food-item-counter-img' onClick={() => addToCart(id)} />
                        </div> 
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img className='food-item-rating' src={assets.rating} alt="" />
                </div>
                <p className="food-item-desc">
                    {description}
                </p>
                <p className='food-item-price'>
                    ${price}
                </p>
            </div>
        </div>
    )
}

export default FoodItem