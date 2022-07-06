import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='fixed w-full text-black flex justify-between p-4 item-center'>
        <div className='text-2xl font-bold text-center'>
            <img src="" alt="" />
            <h1 className= 'block text-4xl '>
                Right-time
            </h1>
            <h1>
                Entertainment
            </h1>
        </div>
        <nav>
            <ul className='md:flex gap-8 p-6 uppercase bg-white/10 '>
                <li><Link to={"/"}> Homepage</Link></li>
                <li><Link to={"/"}> Musics</Link></li>
                <li><Link to={"/"}> Films</Link></li>
                <li><Link to={"/"}> MusicVideos</Link></li>
                <li><Link to={"/"}>About Us</Link></li>
                <li><Link to={"/"}> Contact us</Link></li>
            </ul>
        </nav>

    </div>
    </>
  )
}

export default Header