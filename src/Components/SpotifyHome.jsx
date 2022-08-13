import React from 'react';
import '../Styles/Spotify.css'
import spotify from '../img/spotify.png';
import { FaMusic, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function SpotifyHome() {
    return (
        <div className='SpotifyContainer'>
            <div>
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
                </div>
                <Link to='/Home'>
                    <button><FaPlay /></button>
                </Link>
            </div>
        </div>
    )
}

export { SpotifyHome }
