import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import { LeftMenu } from './Components/LeftMenu'
import { Home } from './Route/Home'
import { Discover } from './Route/Discover'
import {  SongMusic } from './Route/SongMusic'
import { Artist } from './Route/Artist'
import { Album } from './Route/Album'
import { Podcast } from './Route/Podcast'
import {BsFillHouseFill, BsJournalAlbum} from 'react-icons/bs'
import { FaMicrophoneAlt, FaMusic, FaPodcast} from 'react-icons/fa'
import {BiPulse} from 'react-icons/bi'
import { Burnaboy } from './Route/Burnaboy';
import { Rema } from './Route/Rema';
import { Adekunle } from './Route/Adekunle';
import { Falz } from './Route/Falz';
import { Naira } from './Route/Naira';
import { Simi } from './Route/Simi';
import { Boj } from './Route/Boj';
import { Asa } from './Route/Asa';
import { Ruger } from './Route/Ruger';
import { OmahLay } from './Route/OmahLay';
import { SpotifyHome } from './Components/SpotifyHome';
import { Trending } from '../src/Route/Trending'


function App() {
    return (
        <>
        
            <BrowserRouter>
                <Routes>
                <Route  path='/' element={<SpotifyHome/> } />
                    <Route  path='/Home' element={<Home />} />
                    <Route  path='/Home' element={<BsFillHouseFill />} />
                    <Route path='/Discover' element={<Discover />} />
                    <Route  path='/Discover' element={<BiPulse />} />
                    <Route path='/SongMusic' element={<SongMusic />} />
                    <Route  path='/SongMusic' element={<FaMusic />} />
                    <Route  path='/Trending' element={<Trending/>} />
                    <Route path='/Artist' element={<Artist />} />
                    <Route path='/Artist' element={<FaMicrophoneAlt />} />
                    <Route path='/Album' element={<Album />} />
                    <Route path='/Album' element={<BsJournalAlbum />} />
                    <Route path='/Podcast' element={<Podcast />} />
                    <Route path='/Podcast' element={<FaPodcast />} />
                    <Route path='/Burnaboy_Album/' element={<Burnaboy/>} />
                    <Route path='/Rema_Album/' element={<Rema/>} />
                    <Route path='/AG_Album/' element={<Adekunle/>} />
                    <Route path='omah_Lay_Album' element={<OmahLay/>} />
                    <Route path='/Falz_Album/' element={<Falz/>} />
                    <Route path='/Fireboy_Album/' element={<Naira/>} />
                    <Route path='/simi_Album/' element={<Simi/>} />
                    <Route path='/Boj_Ablum/' element={<Boj/>} />
                    <Route path='/Asa_Album/' element={<Asa/>} />
                    <Route path='/Ruger_Album/' element={<Ruger/>} />
                </Routes>
            </BrowserRouter>


            <div className="background"></div>
            
        </>


    );
}

export default App;

