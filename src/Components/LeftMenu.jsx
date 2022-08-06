import React from 'react'
import '../Styles/LeftMenu.css'
import { Menu } from './Menu'
import { FaSpotify, FaEllipsisH } from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'
import { MenuList } from './MenuList'
import { MenuPlayLIst } from './MenuPlayLIst'
import { TrackList } from './TrackList'
import { useEffect } from 'react'

function LeftMenu() {
  



    return <div className='leftMenu' >
        <div className="spotify">
            <i><FaSpotify /></i>
            <h2>Spotify</h2>
            <i><FaEllipsisH /></i>
        </div>
        <div className="searchBox">
            <input type="text" placeholder='Search...' />
            <i><BiSearchAlt /></i>
        </div>

        <Menu title={'Menu'} menuObject={MenuList} />
        <MenuPlayLIst />

        <TrackList />
    </div>

}

export { LeftMenu }
