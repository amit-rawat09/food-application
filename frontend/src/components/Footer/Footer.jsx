import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { assets } from '../../assets/asset'

function Footer() {
    return (
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.yum} alt="" />
                    <p>Craving something delicious? YumExpress brings your favorite meals straight to your doorstep with speed and convenience. </p>
                    <div className="footer-social-icons">
                        <FaFacebook className='imgs' />
                        <FaLinkedin className='imgs' />
                        <FaSquareXTwitter className='imgs' />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-9988533982</li>
                        <li>9780amit@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 &copy; Food.com - All Right Reservied</p>
        </div>
    )
}

export default Footer