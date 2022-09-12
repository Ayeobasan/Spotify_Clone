import React from 'react';
import { AudioList } from '../Components/AudioList';
import { LeftMenu } from '../Components/LeftMenu';
import { RightMenuContainer } from '../Components/RightMenuContainer';

function SongMusic() {
    return <div className='App'>
        <LeftMenu/>
        < div className='mainContainer'>
           <AudioList/>
            
        </div>
        <RightMenuContainer/>
    </div>


}

export { SongMusic }