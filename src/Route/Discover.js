import React from 'react';

import { MainDiscover } from '../Views/MainDiscover';
import { LeftMenu } from '../Components/LeftMenu';
import { RightMenuContainer } from '../Components/RightMenuContainer';

function Discover() {
    return <div className='App'>
        <LeftMenu/>
        <MainDiscover />
        
        <RightMenuContainer/>
    </div>


}

export { Discover }
