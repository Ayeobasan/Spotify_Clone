import React from 'react';
import { AudioList } from '../Components/AudioList';
import { LeftMenu } from '../Components/LeftMenu';
import { RightMenuContainer } from '../Components/RightMenuContainer';

function Artist() {
    return <div className='App '>
        
        <LeftMenu/>
      
        <RightMenuContainer/>
    </div>


}

export { Artist }