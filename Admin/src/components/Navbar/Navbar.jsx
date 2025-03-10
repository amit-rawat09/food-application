import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

function Navbar() {
    return (
        <div className='navbar'>
            <div className="logo-b">
            <img className='logo' src={assets.logo} />
            </div>
            <img className='profile' src={assets.admin} alt=""/>
        </div>
    )
}

export default Navbar