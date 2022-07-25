import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../public/images/logo.jpg"
import Menuitems from './Menuitems'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function Header() {

    const [active, setActive] = useState(false)

    const showMenu = () =>{
        setActive(!active)
    }
  return (
    <>
    <div className='fixed w-full text-black flex justify-between p-4 item-center'>
        <div className='text-2xl font-bold text-center flex flex-row'>
            <img
            className='rounded-full w-12 h-12'
             src={logo}/>
             <div>
            <h1 className= 'block text-4xl  '>
                Right-time
            </h1>
            <h1>
                Entertainment
            </h1> 
             </div>

        </div>
        <nav>
            <div className='absolute right-6 md:hidden top-6 scale-150'>
                <MenuOutlinedIcon onClick={showMenu} className="scale-150 cursor-pointer">
                    MENU
                </MenuOutlinedIcon>
            </div>
            <ul className='hidden md:flex gap-8 p-6 uppercase bg-white/10 '>
                <li><Link to={"/"}> Homepage</Link></li>
                <li><Link to={"/"}> Musics</Link></li>
                <li><Link to={"/"}> Films</Link></li>
                <li><Link to={"/"}> MusicVideos</Link></li>
                <li><Link to={"/"}>About Us</Link></li>
                <li><Link to={"/"}> Contact us</Link></li>
            </ul>

            <Menuitems showMenu={showMenu} active={active}/>
        </nav>

    </div>
    </>
  )
}

export default Header