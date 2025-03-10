import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/asset'

function ExploreMesnu({ category, setCategory }) {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>Craving something delicious? YumExpress brings your favorite meals straight to your doorstep with speed and convenience. Explore a wide range of cuisines from top restaurants, browse detailed menus with mouth-watering images, and place your order in just a few clicks. With real-time order tracking, secure payment options, and exclusive deals, we make food delivery hassle-free and enjoyable.  </p>
            <div className="explore-menu-list">
                {
                    menu_list.map((item, idx) => {
                        return (
                            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={idx} className="explore-menu-list-item">
                                <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr />
        </div>
    )
}

export default ExploreMesnu