import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assest/me1.png'
import HeaderSocial from './headerSocial'
const Header = () => {
  return (
<header id="home">

    <div className="container header__container">
<h5>Hello I'm</h5>
<h1>Abderrahim Troudi</h1>
<h5 className='text-light'>Full stack developper / Data analyst</h5>
   <CTA/>
   <HeaderSocial/>

   <div className="me">
    <img src={me} alt='me'></img>
   </div>
   <a href='#footer' className="scroll__down">Scroll Down</a>
    </div>
</header>  )
}

export default Header