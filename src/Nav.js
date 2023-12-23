// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt , FaFile, FaInfo, FaFolder, FaBars} from 'react-icons/fa';

const Nav = () => {
  return (
    <div>

     <input type="checkbox" id="check" />
     <FaBars style={{color:"white" , fontSize:"30px",position:"fixed",top:"25px",left:"10px"}}/>
    <div className="sidebar">
      
     
      <ul id='list'>
        <img style={{position:"relative" , left:"40px" , listStyle:"none",textDecoration:"none"}} src="https://img.icons8.com/dotty/80/FFFFFF/message-bot.png" alt="" />
       <Link to="/About" style={{textDecoration: 'none ',color:"white",fontWeight:"bold"}} ><li >About<FaInfo style={{paddingLeft:'10px'}}/></li></Link> 
       <Link to="/Contact" style={{textDecoration: 'none ',color:"white",fontWeight:"bold"}} ><li>Contact  <FaPhoneAlt style={{paddingLeft:'10px'}}/></li></Link> 
       <Link to="/Resource" style={{textDecoration: 'none ',color:"white",fontWeight:"bold"}} ><li>Resources<FaFile style={{paddingLeft:'10px'}}/></li></Link> 
      </ul>
    </div>
    </div>
  );
};

export default Nav;
