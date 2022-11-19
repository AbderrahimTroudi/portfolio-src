import React from 'react'
import './nav.css'
import { useState } from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import {MdDesignServices} from 'react-icons/md'
import {AiFillContacts} from 'react-icons/ai'

const Nav = () => { 
  const[activeNav,setActiveNav] = useState('#home')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about"onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillBookmarkStarFill/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdDesignServices/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillContacts/></a>

    </nav>
  )
}

export default Nav