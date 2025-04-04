import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import { MdOutlineTableBar } from "react-icons/md";
import { FaRegRectangleList } from "react-icons/fa6"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
        <FaRegRectangleList className='reserve-table'/>
          <p>List items</p>
        </NavLink>
          <NavLink to='/orders' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
        <NavLink to='/reserve-table' className="sidebar-option">
          <MdOutlineTableBar className='reserve-table'/>
          <p>Booked Table</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar