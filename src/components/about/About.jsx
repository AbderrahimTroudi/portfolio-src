import React from 'react'
import './about.css'
import ME from '../../assest/SecondImg.jpg'
import {SiFuturelearn} from 'react-icons/si'
import {RiTeamFill} from 'react-icons/ri'
import {FiTarget} from 'react-icons/fi'

const About = () => {
  return (
    <section id="about">
        <h5>Get to know</h5>
        <h2>About me </h2>
        <div className='container about__container'>
          <div className='about__me '>
            <div className='about__me-image'> 
              <img src={ME} alt="About picture" />
            </div>
          </div>
          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <SiFuturelearn className="about__icon"/>
                <h5>Motivated and a fast learner</h5>
             
              </article>


              <article className='about__card'>
              <FiTarget className="about__icon"/>

                <h5>Able to make decision in stressful situation</h5>
              
              </article>


              <article className='about__card'>
              <RiTeamFill className="about__icon"/>

                <h5>Collaborative in groups</h5>
             
              </article>
              
            </div>
            <p><span className="firstWord">Hi</span>, I am <span class="MyName">Abderrahim Troudi</span> ,
             I am graduated with a computer science degree from 
              "Faculté des Sciences Economiques et de Gestion de Nabeul-Tunisia" </p>

               <a href="#contact" className='btn btn-primary'>let's Talk</a>
          </div>
        </div>
      


    </section>
  )
}

export default About