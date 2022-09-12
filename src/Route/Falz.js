import React from 'react';
import { LeftMenu } from '../Components/LeftMenu';
import { MainFalz } from '../Views/MainFalz';

function Falz() {
    return <div className='App'>
        <LeftMenu/>
        <div className='mainContainer'>
            <MainFalz/>
        </div>
    </div>


}

export { Falz }

