import React from 'react';
import { LeftMenu } from '../Components/LeftMenu';
import { MainAlbum } from '../Views//MainAlbum';
import { RightMenuContainer } from '../Components/RightMenuContainer';

function Album() {
    return <div className='App'>
        <LeftMenu />
        <MainAlbum/>
        <RightMenuContainer />
    </div>



}

export { Album }
