import React, { useState, useEffect } from 'react';
import { Songs } from './Songs'
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart, } from 'react-icons/fa'
import { MusicPlayer } from './MusicPlayer';
import { Link, NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { Search } from './Search';
import { TrackList } from './TrackList';
import '../Styles/LeftMenu.css'

// import {BrowserRouter} from 'react-router-dom'

function AudioList() {
    const [song, setSong] = useState(Songs[0].song);
    const [img, setImage] = useState(Songs[0].imgSrc);
    const [songs, setSongs] = useState(Songs);

    useEffect(() => {
        const mainSongs = document.querySelectorAll('.mainSongs');

        function ChangeMenuActive() {
            mainSongs.forEach((n) => n.classList.remove('active'));
            this.classList.add('active');
        }
        mainSongs.forEach((n) => n.addEventListener('click', ChangeMenuActive))
    }, []);

    const changeFavourite = (id) => {
        songs.forEach((song) => {
            if (song.id === id) {
                song.favourite = !song.favourite
            }
        });
        setSongs([...Songs])

    };

    const setMainSong = (songSrc, imgSrc) => {
        setSong(songSrc);
        setImage(imgSrc);
    }

    return <div className='audioList'>
        <Search/>

        <h2 className="title">
            Offline Songs <span>{ `${Songs.length} songs`}</span>
        </h2>
        <div className="songContainer">
            {
                Songs && Songs.map((song, index) => (
                    <div className="mainSongs" key={song?.id}
                        onClick={() => setMainSong(song?.song, song?.imgSrc)}
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
                                        <i><FaHeadphones /></i>
                                        95,490,102
                                    </p>
                                    <p className="time">
                                        <i><FaRegClock /></i>
                                        03.04
                                    </p>
                                    <div className="hearts"
                                        onClick={() => changeFavourite(song.id)}>

                                        {song?.favourite ?
                                            (
                                                <i>
                                                    <FaHeart />
                                                </i>
                                            ) : (

                                                <i>
                                                    <FaRegHeart />
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
        <MusicPlayer song={song} imgSrc={img} />


    </div>


}

export { AudioList }
