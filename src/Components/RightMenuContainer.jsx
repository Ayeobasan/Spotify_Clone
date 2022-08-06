import React from 'react'
import '../Styles/RightMenuContainer.css'
import { FaBell, FaCogs, FaCrown, FaRegHeart, FaSun } from 'react-icons/fa'
import Profile  from '../img/profile.jpg'
function RightMenuContainer() {
    return <div className="rightMenu">
       <div className="top">
           <i><FaCrown/></i>
           <p>Go <span>Pro</span></p>
           <i className='bell'><FaBell/></i>
           <i><FaRegHeart/></i>
       </div>
           

       <div className="bottom">
           <i><FaSun/></i>
           <i><FaCogs/></i>
           <div className="profile">
               <img src={Profile} alt="" />
           </div>
       </div>
    </div>

}

export { RightMenuContainer }
