import React, { useState, useRef, useEffect } from 'react';
import '../Styles/Home.css'
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




function HomePlayer({ song, imgSrc }) {


    const [isLove, setLove] = useState(false)
    const [isPlaying, setPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [prevValue, setPrevValue] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);

        setDuration(seconds);
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    const ChangePausePlay = () => {
        const prevValue = isPlaying;
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
        setPlaying(!prevValue)
    };

    const CalculateTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        // if it is < 10 show 09,08... else show 11,12,13
        const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;

        const seconds = Math.floor(sec % 60);
        const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;


        return `${returnMin}:${returnSec}`;

    };

    const whilePlaying =() =>{
        progressBar.current.value = audioPlayer.current.currentTime
        changeCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying)
    };
    const changeProgress = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changeCurrentTime()
    };
    const changeCurrentTime = () =>{
        progressBar.current.style.setProperty(
            '--player-width',
            `${(progressBar.current.value / duration) * 100}%`
        );
        setCurrentTime(progressBar.current.value)
    }

    const ChangeLove = () => {
        setLove(!isLove)
    };




    return <div className="homePlayer">
        <div className="homeImg">
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
                        <i>
                            <BsDownload />
                        </i>

                    </div>
                </div>
                <div className="middle">
                    <div className="backward">
                        <i>
                            <FaStepBackward />
                        </i>
                        <i>
                            <FaBackward />
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
                            <FaForward />
                        </i>
                        <i>
                            <FaStepForward />
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

export { HomePlayer};
