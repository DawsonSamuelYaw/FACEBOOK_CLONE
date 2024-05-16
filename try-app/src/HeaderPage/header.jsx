import React from 'react';
import { BiSolidVideos } from "react-icons/bi";
import { CiSearch, CiShop } from "react-icons/ci";
import { FaFacebookMessenger, FaUserFriends } from "react-icons/fa";
import { IoHome, IoNotificationsSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import Sidebar from '../components/sidebar';
import face from './face.png';

export default function header() {
  return (
    <div>
 <div className='main-container'>
        <div className="search">
            <img src={face} alt="" className='face-icon' />
            <input type="text" name="" className='search-input' placeholder='Search Facebook' />
            <CiSearch className='search-btn'/>

        </div>
        <div className="header-comp">
          <div className="home-icon">
          <a href="" className='active'><IoHome fontSize={"2.3rem"} className='home-btns' /></a>
          </div>
          <div className="home-icon">
          <a href="">
          <FaUserFriends  className='home-btn'/>
          </a>
          </div>
          <div className="home-icon">
            <a href="">
          <CiShop className='home-btn'/>
            </a>
          </div>
          <div className="home-icon">
            <a href="">
            <BiSolidVideos className='home-btn'/>
            </a>
          </div>
          <div className="home-icon">
            <a href="">
          <MdGroups className='home-btn'/>
            </a>


          </div>
        </div>
        <div className="notifications">
       {/*  <IconButton>
        <CgMenuGridR className='home-btn'/>
        </IconButton> */}
        {/* <AppsIcon/> */}
          <FaFacebookMessenger className='home-btn'/>
          <IoNotificationsSharp className='home-btn'/>
          <p className='p-tag'>20+</p>
          <VscAccount className='home-btn'/>

        </div>

    </div>

        <Sidebar/>

    </div>
   
  )
}
