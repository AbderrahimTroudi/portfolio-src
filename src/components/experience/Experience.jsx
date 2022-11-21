import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4>HTML&CSS</h4>
             
            </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4>React JS</h4>
             
            </div>
            </article>

            
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4>kotlin</h4>
             
            </div>
            </article>
           

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4>C</h4>
             
            </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4>Java</h4>
             
            </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4>Python</h4>
             
            </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4>Php</h4>
             
            </div>
            </article>
          </div>
        </div>

        <div className="experience__DB">
          <h3>DB administration</h3>
            <div className="experience__content">
              <article className="experience__details">
                <AiFillCheckCircle className="experience__details-icon"/>
                <div><h4>MySQL</h4>
              </div>
              </article>
          
              <article className="experience__details">
                <AiFillCheckCircle className="experience__details-icon"/>
                <div><h4>PL/SQL</h4>
              </div>
              </article>

            </div>
        </div>
        <div className="experience__Framework">
          <h3>Framework</h3>
            <div className="experience__content">
              <article className="experience__details">
                <AiFillCheckCircle className="experience__details-icon"/>
                <div><h4>Laravel</h4> 
              </div>
              </article>
          
              <article className="experience__details">
                <AiFillCheckCircle className="experience__details-icon"/>
                <div><h4>Springboot</h4>
              </div>
              </article>

              <article className="experience__details">
                <AiFillCheckCircle className="experience__details-icon"/>
                <div><h4>Power BI</h4>
              </div>
              </article>
            </div>
        </div>
      </div>
    
    
    </section>
  )
}

export default Experience