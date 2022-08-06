import React, { useState, useEffect } from 'react';
import '../Styles/MainContainer.css'
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart, } from 'react-icons/fa'
import { Search } from './Search';


// import {BrowserRouter} from 'react-router-dom'

function MainContainer() {
  
    return <div className='mainContainer'>
        <Search/>

        
    </div>


}

export { MainContainer }
