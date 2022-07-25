import { Close } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';


const Menuitems = ({showMenu, active}) => {
  return (
    
        <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/2 uppercase bg-black/40 backdrop-blur-lg gap-8  justify-center p-8 md:hidden': 'hidden'}>
          <Close onClick={showMenu} className="cursor-pointer"/>
                <li><Link to={"/"}> Homepage</Link></li>
                <li><Link to={"/"}> Musics</Link></li>
                <li><Link to={"/"}> Films</Link></li>
                <li><Link to={"/"}> MusicVideos</Link></li>
                <li><Link to={"/"}>About Us</Link></li>
                <li><Link to={"/"}> Contact us</Link></li>
            </ul>

  )
}

export default Menuitems