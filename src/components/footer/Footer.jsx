import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {ImLinkedin} from 'react-icons/im'
const Footer = () => {
  return (
    <footer id="footer">
      <ul></ul>
      <a href="#" className="footer__logo">My portfolio</a>
      <ul className="premalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100006147826386" target="__blank"><BsFacebook/></a>
        <a href="https://www.instagram.com/abderrahimtroudi/" target="__blank"><AiFillInstagram/></a>
        <a href="https://www.linkedin.com/in/troudi-abderrahim-60a001237/" target="__blank"><ImLinkedin/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Abderrahim Troudi. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer