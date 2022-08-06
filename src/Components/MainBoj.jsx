import React, { useState, useEffect } from 'react';
import { Songs } from './Songs'
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart, } from 'react-icons/fa'
import { MusicPlayer } from './MusicPlayer';
import { Search } from './Search';
import { BurnaData } from '../Albums/BurnaData';
import { BojData } from '../Albums/BojData';


function MainBoj() {
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
            Gbagada Album by B.O.J <span>{`${Songs.length} songs`}</span>
        </h2>
        <div className="songContainer">
            {
                BojData && BojData.map((boj, index) => (
                    <div className="mainSongs" key={index}
                        onClick={() => setMainSong(boj?.song, boj?.imgSrc)}
                    >
                        <div className="num"><p>{`#${index + 1}`}</p> </div>
                        <div className="songName" >
                            <div className="songImg">
                                <img src={boj?.imgSrc} alt="" />
                            </div>

                            <div className="songs">
                                <p>{boj?.artist}
                                    <span>{boj?.songName}</span>
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

                                        {boj?.favourite ?
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

export { MainBoj }
