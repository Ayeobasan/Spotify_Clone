import React, { useState, useEffect } from 'react';
import '../Styles/LeftMenu.css'
import '../Styles/Home.css'
import '../Styles/MainContainer.css'
import { NavLink } from 'react-router-dom';
import {  BiHeadphone,  BiSearchAlt } from 'react-icons/bi';
import { Hotlist  } from '../services/Datas/Hotlist';
import { AiFillSignal } from "react-icons/ai";
import { BsBellFill, BsPersonFill, BsSoundwave } from "react-icons/bs";
import { HiOutlineWifi } from "react-icons/hi";


// import {BrowserRouter} from 'react-router-dom'

function MainHome() {

    return <>
        <div className='homeContainer'>
            <div className="homeHeader">
                <div className="displayHeader">
                    <NavLink to='/Home'>
                        <p className='homeMusic active'>Music</p>
                    </NavLink>
                    <NavLink to='/Trending'>
                        <p className='Trending active'>Trending</p>
                    </NavLink>
                </div>

            </div>

            <div className="homeBottom">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <i><BiSearchAlt /></i>
                </div>
                <div className="homeMiddle">
                    <div className="displayHomeMiddle">
                        <div className="homeIcon">
                            <NavLink to="/Album"><i><AiFillSignal /></i></NavLink>
                            <NavLink to="/Album"><p>Chart</p></NavLink>
                        </div>
                        <div className="homeIcon">
                            <NavLink to="/Discover"><i><BsPersonFill /></i></NavLink>
                            <NavLink to="/Discover"><p>Artist</p></NavLink>
                        </div>
                        <div className="homeIcon">
                            <NavLink to="/SongMusic"><i><BsSoundwave /></i></NavLink>
                            <NavLink to="/SongMusic"><p>PlayList</p></NavLink>
                        </div>
                        <div className="homeIcon" id='note'>
                            <NavLink to="/Home"><i><BsBellFill /></i></NavLink>
                            <NavLink to="/Home"><p>
                                Notification

                            </p></NavLink>
                        </div>
                        <div className="homeIcon">
                            <NavLink to="/Album"><i><BiHeadphone /></i></NavLink>
                            <NavLink to="/Album"><p>Listen</p></NavLink>
                        </div>
                        <div className="homeIcon">
                            <NavLink to="/SongMusic"><i><HiOutlineWifi /></i></NavLink>
                            <NavLink to="/SongMusic"><p>Offline</p></NavLink>
                        </div>
                    </div>
                </div>
                <h2>
                    HotList
                </h2>
                <div className="allBottomHome">
                    {
                        Hotlist.map((hot, index) => (
                            <div className="disPlayHotlist" key={index}>
                                <div className="hotList">
                                    <img src={hot.img} alt="" />
                                    {/* <i>{hot.icon}<span> {hot.Number}</span></i> */}
                                </div>
                                <div className="daily">
                                    <p>{hot.Trend}</p>
                                    <span>{hot.spot}</span>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <h2>
                    Half Year Recap 2022
                </h2>
                <div className="allBottomHome">
                    {
                        Hotlist.map((hot, index) => (
                            <div className="disPlayHotlist" key={index}>
                                <div className="hotList">
                                    <img src={hot.img1} alt="" />
                                    {/* <i>{hot.icon}<span> {hot.Number}</span></i> */}
                                </div>
                                <div className="daily">
                                    <p>{hot.Half}</p>
                                    <span>{hot.spot}</span>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <h2>
                    Weekly Chart
                </h2>
                <div className="allBottomHome">
                    {
                        Hotlist.map((hot, index) => (
                            <div className="disPlayHotlist" key={index}>
                                <div className="hotList">
                                    <img src={hot.img2} alt="" />
                                    {/* <i>{hot.icon}<span> {hot.Number}</span></i> */}
                                </div>
                                <div className="daily">
                                    <p>{hot.Week}</p>
                                    <span>{hot.spot}</span>
                                </div>

                            </div>
                        ))
                    }
                </div>



            </div>
        </div>

    </>


}

export { MainHome }

