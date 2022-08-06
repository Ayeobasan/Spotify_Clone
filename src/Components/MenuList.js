import { BsFillHouseFill, BsJournalAlbum } from 'react-icons/bs'
import { FaBroadcastTower, FaMicrophoneAlt, FaMusic, FaPodcast } from 'react-icons/fa'
import { BiPulse } from 'react-icons/bi'
import { NavLink } from 'react-router-dom';
import { Home } from '../Route/Home';

const MenuList = [
    {
        id: 1,
        icon: <NavLink to='/Home'>
            <BsFillHouseFill />
        </NavLink>,
        name: <NavLink to='/Home' >
            Home
        </NavLink>
    },
    {
        id: 2,
        icon: <NavLink to='/Discover'>
            <BiPulse />
        </NavLink>,
        name: <NavLink to='/Discover' >
            Discover
        </NavLink>
    },

    {

        id: 3,
        icon: <NavLink to='/Album'>
            <BsJournalAlbum />
        </NavLink>,
        name: <NavLink to='/Album'>
            Album
        </NavLink>
    },
    {
        id: 4,
        icon: <NavLink to='/SongMusic'>
            <FaMusic />
        </NavLink>,
        name: <NavLink to='/SongMusic'>
            Library
        </NavLink>
    },

];
export { MenuList }
