import React from 'react';
import { LeftMenu } from '../Components/LeftMenu';
import { MainNaira } from '../Components/MainNaira';

function Naira() {
    return <div className='App'>
        <LeftMenu/>
        <div className='mainContainer'>
            <MainNaira/>
        </div>
    </div>


}

export { Naira }

