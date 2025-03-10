import React, { useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/asset'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from '../../context/StoreContext';
import { CiLogout } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

function Navbar({ setShowLogin }) {

    const [menu, setmenu] = useState("home")
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext)

    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate('/')
    }

    return (
        <div className='navbar'>
            <Link to='/'>
                    <img src={assets.yum} alt="" className="logo" />
            </Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setmenu("home")} className={menu == "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setmenu("menu")} className={menu == "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setmenu("mobile-app")} className={menu == "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={() => setmenu("contact-us")} className={menu == "contact-us" ? "active" : ""}>contact us</a>
            </ul>
            <div className="navbar-right">
                <FaSearch />
                <div className="navbar-search-icon">
                    <Link to='/cart'>
                        <FaShoppingCart />
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token ?
                    <button onClick={() => setShowLogin(true)}>sign up</button>
                    : <div className="navbar-profile">
                        <img src={assets.avatar} alt="" />
                        <ul className="nav-profile-dropdown">
                            <li onClick={() => navigate("/myorders")}><IoBagOutline className='img' /> <p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><CiLogout className='img' /><p>Logout</p></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar