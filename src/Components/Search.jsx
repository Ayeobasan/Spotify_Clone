import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';

function Search() {
    return <div className="search">
        <div className='see'>
            <input type="text" placeholder='Search...' />
        </div>
        <div className='ic'>
            <button><i><BiSearchAlt/></i></button>
        </div>

    </div>


}

export { Search }
