import React from 'react';
import { LeftMenu } from '../Components/LeftMenu';
import { MainOmahLay } from '../Components/MainOmahLay';

function OmahLay() {
    return <div className='App'>
        <LeftMenu/>
        <div className='mainContainer'>
            <MainOmahLay/>
        </div>
    </div>


}

export { OmahLay }

