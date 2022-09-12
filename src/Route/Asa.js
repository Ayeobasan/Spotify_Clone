import React from 'react';
import { LeftMenu } from '../Components/LeftMenu';
import { MainAsa } from '../Views/MainAsa';

function Asa() {
    return <div className='App'>
        <LeftMenu/>
        <div className='mainContainer'>
            <MainAsa/>
        </div>
    </div>


}

export { Asa }

