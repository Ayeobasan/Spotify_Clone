import React, { useState, useEffect } from 'react';
import { Songs } from '../services/Datas/Songs'
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart, } from 'react-icons/fa'
import { MusicPlayer } from '../services/Datas/MusicPlayer';
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import '../Styles/LeftMenu.css'
import { Trendinglist } from '../services/Datas/Trendinglist';


function MainTrending() {
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
        <div className="homeHeader" >
            <div className="displayHeader">
                <NavLink to='/Home'>
                    <p className='homeMusic active'>Music</p>
                </NavLink>
                <NavLink to='/Trending'>
                    <p className='Trending active'>Trending</p>
                </NavLink>
            </div>
        </div>
        <div className="search">
            <input type="text" placeholder='Search...' />
            <i><BiSearchAlt /></i>
        </div>

        <h2 className="titl">
            Top Trending <span>{`${Songs.length} songs`}</span>
        </h2>
        <div className="songContainer">
            {
                Trendinglist && Trendinglist.map((trend, index) => (
                    <div className="mainSongs" key={trend?.id}
                        onClick={() => setMainSong(trend?.song, trend?.imgSrc)}
                    >
                        <div className="num"><p>{`#${index + 1}`}</p> </div>
                        <div className="songName" >
                            <div className="songImg">
                                <img src={trend?.imgSrc} alt="" />
                            </div>

                            <div className="songs">
                                <p>{trend.songName}
                                    <span>{trend?.artist}</span>
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

export { MainTrending }
