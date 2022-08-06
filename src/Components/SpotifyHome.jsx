import React from 'react';
import '../Styles/Spotify.css'
import spotify from '../img/spotify.png';
import { FaMusic, FaPlay, FaSpotify } from 'react-icons/fa';
import Spotify from '../img/spotify.png'
import {NavLink} from 'react-router-dom'

function SpotifyHome() {
    return <div className='SpotifyContainer'>
        <div className="music">
            <img src={spotify} alt="" />
            <div className="spotText">
                <p>Listen to
                    <sup>
                        <FaMusic />
                        <FaMusic />
                    </sup>
                </p>
                <h1>Spotify</h1>
            </div>
            <a href='/Home'> 
                <button><FaPlay /></button>
            </a>
        </div>

    </div>


}

export { SpotifyHome }
