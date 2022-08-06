import React, { useState, useEffect } from 'react';
import { Songs } from './Songs'
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart, } from 'react-icons/fa'
import { MusicPlayer } from './MusicPlayer';
import { Link, NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { Search } from './Search';
import { AdekunleData } from '../Albums/AdekunleData';

// import {BrowserRouter} from 'react-router-dom'

function MainAdekunle() {
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
        <Search />

        <h2 className="title">
            Catch Me If You Can Album by Adekunle Gold <span>{`${Songs.length} songs`}</span>
        </h2>
        <div className="songContainer">
            {
                AdekunleData && AdekunleData.map((ade, index) => (
                    <div className="mainSongs" key={index}
                        onClick={() => setMainSong(ade?.song, ade?.imgSrc)}
                    >
                        <div className="num"><p>{`#${index + 1}`}</p> </div>
                        <div className="songName" >
                            <div className="songImg">
                                <img src={ade?.imgSrc} alt="" />
                            </div>

                            <div className="songs">
                                <p>{ade?.artist}
                                    <span>{ade?.songName}</span>
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

                                        {ade?.favourite ?
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

export { MainAdekunle }
