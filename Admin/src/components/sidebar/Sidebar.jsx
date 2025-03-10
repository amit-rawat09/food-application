import React from 'react'
import './Sidebar.css'
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { IoIosGift } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                <NavLink to='/add' className="sidebar-option">
                    <IoMdAddCircleOutline className='add-img' />
                    <p>Add Items</p>
                </NavLink>
                <NavLink to='/list' className="sidebar-option">
                    <CiBoxList className='list-img' />
                    <p>List Items</p>
                </NavLink>
                <NavLink to='/orders' className="sidebar-option">
                    <IoIosGift className='order-img' />
                    <p>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar