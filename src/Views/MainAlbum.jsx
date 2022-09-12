import React from 'react';
import '../Styles/Album.css'
import { Songs } from '../services/Datas/Songs'
import { FaBimobject, FaRegClock, FaStream, } from 'react-icons/fa'
import { MainAlbumlist } from '../services/Datas/MainAlbumlist';



function MainAlbum() {
    return <div className='mainAlbum'>
        <div className="lastPlay">
            <h2>
                Top <span>{`${Songs.length} Nigeria Album`}</span>
            </h2>
        </div>
        <div className="allSong">
        {
            MainAlbumlist && MainAlbumlist.map((song, index) => (
                <div className="mainSongs" key={song?.id}
                >
                    <div className="num"><p>{`#${index + 1}`}</p> </div>
                    <div className="songName" >
                        <div className="songImg">
                            <img src={song?.imgSrc} alt="" />
                        </div>

                        <div className="songs">
                            <p>{song.songName}
                                <span>{song?.artist}</span>
                            </p>
                            <div className="hit">
                                <p className="heads">
                                    <i><FaStream /></i>
                                    {song.stream}
                                </p>
                                <p className="time">
                                    <i><FaRegClock /></i>
                                    03.04
                                </p>
                                <div className="hearts"
                                >

                                    {song?.favourite ?
                                        (
                                            <i>
                                                <FaBimobject />
                                            </i>
                                        ) : (

                                            <i>
                                                <FaBimobject />
                                            </i>
                                        )
                                    }

                                </div>
                            </div>
                          

                        </div>

                    </div>
                </div>
                
            ))
        }
        </div>
        


    </div>


}

export { MainAlbum }
