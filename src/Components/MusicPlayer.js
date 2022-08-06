import React, { useState, useRef, useEffect } from 'react';
import '../Styles/MusicPlayer.css'
import {
    FaBackward,
    FaForward,
    FaHeart,
    FaPause,
    FaPlay,
    FaRegHeart,
    FaShareAlt,
    FaStepBackward,
    FaStepForward
} from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'




function MusicPlayer({ song, imgSrc }) {


    const [isLove, setLove] = useState(false)
    const [isPlaying, setPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [audio, setAudio] = useState(new Audio(song))
    const [currentTime, setCurrentTime] = useState(0)

    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);

        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    useEffect(() => {
        if (currentTime === duration && isPlaying) {
            //if the song is finished the Play  should Turn to pause
            ChangePausePlay();
            //if the song is finished the progress bar should go back to Zero(0)
            progressBraTravelBack(0);
        }
    }, [currentTime]);


    const ChangePausePlay = () => {
        const prevValue = isPlaying;
        setPlaying(!prevValue);

        if (!prevValue) {
            audioPlayer.current.play();

            // ? requestAnimationFrame is a function that allows us to run a function
            // ? every frame of the animation

            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
            // audioPlayer.current.load();
        }
    };
    const progressBraTravelBack = (newTime) => {
        progressBar.current.value = newTime;
        changeProgress();
    };
    const CalculateTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        // if it is < 10 show 09,08... else show 11,12,13
        const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;

        const seconds = Math.floor(sec % 60);
        const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;


        return `${returnMin}:${returnSec}`;

    };

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime
        changeCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying)
    };
    const changeProgress = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changeCurrentTime()
    };
    const changeCurrentTime = () => {
        // To Updating the progress bar in CSS
        // progressBar.current.what you styled in your css => takes two arguments
        // first is the property name
        // second is the value of the property

        progressBar.current.style.setProperty(
            '--played-player',
            `${(progressBar.current.value / duration) * 100}%`
        );
        setCurrentTime(progressBar.current.value)
    }

    const ChangeLove = () => {
        setLove(!isLove)
    };
    const back = () => {
        progressBar.current.value = Number(progressBar.current.value) - 10;
        changeProgress();
    }
    const forward = () => {
        progressBar.current.value = Number(progressBar.current.value) + 10;
        changeProgress();
    }
    // const changeSong = () => {
    //     setAudio(new Audio(song));
    //     setPlaying(true);
    //     progressBraTravelBack(0);

    // };
    const changeSongto = () => {
      

    };
    const changeSongback = () => {
        const index = song.findIndex(x=>x.songName == setAudio.songName)
     if (index === 0)
     {
        setAudio(song [song.length -1])
     }
     else
     {
        setAudio(song [index-1])
     }

    };



    

    return <div className="MusicPlayer">
        <div className="songImg">
            <img src={imgSrc} alt="" />
        </div>
        <div className="cover">
            <audio src={song} preload='metadata' ref={audioPlayer} />
            <div className="top">
                <div className="left">
                    <div className="loved" onClick={ChangeLove}>
                        {isLove ?
                            (
                                <i>
                                    <i><FaHeart /></i>
                                </i>
                            ) :
                            (
                                <i>
                                    <FaRegHeart />
                                </i>

                            )
                        }
                    </div>
                    <div className="download">

                        <a download>
                            <i>
                                <BsDownload />
                            </i>
                        </a>


                    </div>
                </div>
                <div className="middle">
                    <div className="backward">
                        <i>
                            <FaStepBackward id="nextBtn" onClick={changeSongback}
                            />
                        </i>
                        <i>
                            <FaBackward onClick={back} />
                        </i>


                    </div>
                    <div className="pauseplay"
                        onClick={ChangePausePlay}
                    >
                        {
                            isPlaying ? (
                                <i>
                                    <FaPause />
                                </i>
                            ) : (
                                <i>
                                    <FaPlay />
                                </i>
                            )
                        }




                    </div>
                    <div className="forward">
                        <i>
                            <FaForward onClick={forward} />
                        </i>
                        <i>
                            <FaStepForward id="prevBtn" onClick={changeSongto}
                            />
                        </i>
                    </div>

                </div>
                <div className="right">
                    <i>
                        <FaShareAlt />
                    </i>
                </div>
            </div>
            <div className="bottom">
                <div className="currentTime">{CalculateTime(currentTime)}</div>
                <input type="range" defaultValue={0} className='progressBar' ref={progressBar} onChange={changeProgress} />
                <div className="duration">
                    {(duration && !isNaN(duration) && CalculateTime(duration)) ?
                        CalculateTime(duration) : '00:00'
                    }
                </div>
            </div>
        </div>



    </div>



}

export { MusicPlayer };
