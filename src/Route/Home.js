import React from 'react';
import { LeftMenu } from '../Components/LeftMenu';
import { MainHome } from '../Components/MainHome';
import { RightMenuContainer } from '../Components/RightMenuContainer';

function Home() {
    return <div className='App'>
        <LeftMenu/>
        <MainHome/>
        <RightMenuContainer/>
    </div>


}

export { Home }
