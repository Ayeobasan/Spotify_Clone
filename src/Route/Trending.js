import React from 'react';
import { LeftMenu } from '../Components/LeftMenu';
import { MainAlbum } from '../Components/MainAlbum';
import { MainTrending } from '../Components/MainTrending';
import { RightMenuContainer } from '../Components/RightMenuContainer';

function Trending() {
    return <div className='App'>
        <LeftMenu />
        <div className='mainContainer'>
             <MainTrending/>
        </div>
       
        <RightMenuContainer />
    </div>



}

export { Trending }
