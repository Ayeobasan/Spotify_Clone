import React from 'react';
import { LeftMenu } from '../Components/LeftMenu';
import { MainAdekunle } from '../Views/MainAdekunle';

function Adekunle() {
    return <div className='App'>
        <LeftMenu />
        <div className='mainContainer'>
            <MainAdekunle/>
        </div>


    </div>


}

export { Adekunle }

