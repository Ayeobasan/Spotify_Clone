import React from 'react';
import { Burna } from '../Components/Burna';
import { LeftMenu } from '../Components/LeftMenu';

function Burnaboy() {
    return <div className='App'>
        <LeftMenu />
        <div className='mainContainer'>
           <Burna/>
        </div>
    </div>


}

export { Burnaboy }
