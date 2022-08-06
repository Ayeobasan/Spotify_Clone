import React from 'react';
import { LeftMenu } from '../Components/LeftMenu';
import { MainSimi } from '../Components/MainSimi';

function Simi() {
    return <div className='App'>
        <LeftMenu/>
        <div className='mainContainer'>
            <MainSimi/>
        </div>
    </div>


}

export { Simi }

