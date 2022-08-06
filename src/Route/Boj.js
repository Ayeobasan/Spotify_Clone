import React from 'react';
import { LeftMenu } from '../Components/LeftMenu';
import { MainBoj } from '../Components/MainBoj';

function Boj() {
    return <div className='App'>
        <LeftMenu/>
        <div className='mainContainer'>
        <MainBoj/>

    </div>
    </div>


}

export { Boj }

