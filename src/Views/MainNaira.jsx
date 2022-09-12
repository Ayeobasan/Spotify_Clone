import React, { useState, useEffect } from 'react';
import { Songs } from '../services/Datas/Songs'
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart, } from 'react-icons/fa'
import { MusicPlayer } from '../services/Datas/MusicPlayer';
import { Search } from '../Components/Search';
import { NairaData } from '../asset/Albums/NairaData';

// import {BrowserRouter} from 'react-router-dom'

function MainNaira() {
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
            Fireboy DML Album <span>{`${Songs.length} songs`}</span>
        </h2>
        <div className="songContainer">
            {
                NairaData && NairaData.map((naira, index) => (
                    <div className="mainSongs" key={index}
                        onClick={() => setMainSong(naira?.song, naira?.imgSrc)}
                    >
                        <div className="num"><p>{`#${index + 1}`}</p> </div>
                        <div className="songName" >
                            <div className="songImg">
                                <img src={naira?.imgSrc} alt="" />
                            </div>

                            <div className="songs">
                                <p>{naira?.artist}
                                    <span>{naira?.songName}</span>
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

                                        {naira?.favourite ?
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

export { MainNaira }
