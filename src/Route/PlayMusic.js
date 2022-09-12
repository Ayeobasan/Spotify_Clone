
import React from 'react';
import { LeftMenu } from '../Components/LeftMenu';
import { MusicPlayer } from '../Views/MusicPlayer';
import { RightMenuContainer } from '../Components/RightMenuContainer';

function PlayMusic() {
    return <div className='App'>
        <LeftMenu/>
       <MusicPlayer/>
        <RightMenuContainer/>
    </div>


}

export { PlayMusic }
