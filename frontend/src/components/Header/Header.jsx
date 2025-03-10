import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Craving something delicious? YumExpress brings your favorite meals straight to your doorstep with speed and convenience. Explore a wide range of cuisines from top restaurants, browse detailed menus with mouth-watering images, and place your order in just a few clicks. With real-time order tracking, secure payment options, and exclusive deals, we make food delivery hassle-free and enjoyable. Whether it's a quick bite or a feast for the family, YumExpress ensures fresh and hot meals, delivered fast. Satisfy your cravings today—because great food is just a tap away! </p>
            <button><a href="#explore-menu">View Menu</a></button>
        </div>
    </div>
  )
}

export default Header