import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const headerSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/troudi-abderrahim-60a001237/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/AbderrahimTroudi" target="_blank"><BsGithub/></a>
      <a href="https://www.facebook.com/profile.php?id=100006147826386" target="_blank"><BsFacebook/></a>

    </div>
    )
}

export default headerSocial