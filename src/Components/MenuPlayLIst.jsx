import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { BsMusicNoteList, BsTrash } from 'react-icons/bs'
import { PlayList } from '../services/Datas/PlayList'

function MenuPlayLIst() {
    return <div className='playListContainer' >
        <div className="nameContainer">
            <p>PlayList</p>
            <i><FaPlus /></i>
        </div>
        <div className="PlayListScroll" >
            {PlayList && PlayList.map((Play,index) => (
                <div className="PlayList" key={index}>
                    <i>
                        <BsMusicNoteList className='list' />
                    </i>
                    <p>{Play.name}</p>
                    <i>
                        <BsTrash className='trash' />
                    </i>
                </div>
            ))
            }

        </div>
    </div>



}

export { MenuPlayLIst }
