import React from 'react';
import '../Styles/Dicover.css'
import { MainDiscoverlist } from './MainDiscoverlist';
function MainDiscover() {
    return <div className='mainDicover'>

        {
            MainDiscoverlist && MainDiscoverlist.map((main, index) => (
                <label key={index}>
                    <input type="checkbox" className='check' />
                    <div className="Flip-card">
                        <div className="front">
                            <img src={main?.image} alt=""></img>
                            <h3>{main?.Artist}</h3>
                            <div className="mall">
                                <b>{main?.status}</b>
                                <p>Click here </p>
                            </div>

                        </div>
                        <div className="back">
                            <h1>{main?.About}  </h1>
                            <p>{main?.story}</p>
                            <span href="" className='click'>{main?.click} </span>
                        </div>
                    </div>
                </label>
            ))
        }

    </div>


}

export { MainDiscover }
