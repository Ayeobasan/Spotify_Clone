import React from 'react';
import { LeftMenu } from '../Components/LeftMenu';
import { RightMenuContainer } from '../Components/RightMenuContainer';

function Podcast() {
    return <div className='App'>
        <LeftMenu/>
        <RightMenuContainer/>
    </div>


}

export { Podcast }