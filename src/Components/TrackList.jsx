import React from 'react'
import Track from '../img/track.png'
import {FaDesktop} from 'react-icons/fa'
import {BsFillVolumeUpFill, BsMusicNoteList} from 'react-icons/bs'

function TrackList() {
    return <div className='trackList'>
        <div className="top">
            <img src={Track} alt="" />
            <p>Sample name <span>Artist</span></p>
        </div>
        <div className="bottom">
            <i><BsFillVolumeUpFill/></i>
            <input type="range" />
            <i><BsMusicNoteList/></i>
            <i><FaDesktop/></i>
        </div>
    </div>


}

export { TrackList }
