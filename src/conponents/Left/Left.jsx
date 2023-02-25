import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import lop1 from ".././img/lop1.jpg"
import '../Left/Left.css'
function Left() {
  return (
    <div className='Left'>
        <ul className="Left_list">
            <li className='Left-item'>
                <Link to='/'>
                    <i class="fa-brands fa-twitter Left-item__logo"></i>
                 </Link>
            </li>
            <li className='Left-item'>

                <NavLink to='/Center' className='Left-item-link'>
                <i class="fa fa-house Left-item_Home"></i>    Home
                 </NavLink>
            </li>
            <li className='Left-item'>
                <NavLink to='/Explore' className='Left-item-link'>
                <i class="fa fa-hashtag Left_item-Explore"></i>  Explore
                 </NavLink>
            </li>
            <li className='Left-item'>
                <NavLink to='/Notifications' className='Left-item-link'>
                <i class="fa fa-bell Left_item_Notifications"></i>Notifications
                 </NavLink>
            </li>
            <li className='Left-item'>
                <NavLink to='/Messages' className='Left-item-link'>
                <i class="fa-solid fa-message Left_item_Messages"></i>Messages
                 </NavLink>
            </li>
            <li className='Left-item'>
                <NavLink to='/Bookmarks' className='Left-item-link'>
                <i class="fa fa-bookmark Left_item_Bookmarks"></i>  Bookmarks
                 </NavLink>
            </li>
            <li className='Left-item'>
                <NavLink to='/Lists' className='Left-item-link'>
                <i class="fa fa fa-list Left_item_Lists"></i> Lists
                 </NavLink>
            </li>
            <li className='Left-item'>
                <NavLink to='Profil' className='Left-item-link'>
                <i class="fa fa-user Left_item_Profile"></i> Profile
                 </NavLink>
            </li>
            <li className='Left-item'>
                <NavLink to='/More' className='Left-item-link'>
                <i class="fa-solid fa-ellipsis Left_item_More" ></i> More
                 </NavLink>
            </li>
        </ul>
        <button className='Left-item_btn'>Tweet</button>
        <div className="cardf">
            <div className="cardf_box">
                <img src={lop1} alt=""  className="cardf_box_img"/>
                <div className="cardf_box_dic">
                <h2 className='cardf_box_title'>Toxir Usmonov</h2>
                <p className='cardf_box_text'>usmonov_0_4</p>
                </div>
                <i class="fa fa-ellipsis"></i>
            </div>
        </div>
    </div>
  )
}

export default Left