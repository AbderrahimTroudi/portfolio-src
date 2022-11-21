import React from 'react'
import './portfolio.css'
import IMG1 from '../../assest/javacapt.PNG'
import IMG2 from '../../assest/portfolio1.jpg'
import IMG3 from '../../assest/taxi.jpg'
import IMG4 from '../../assest/portcap.PNG'

const data = [
  {
    id:1,
    image:IMG1,
    title:'Java',
    sousTitre:'',
    github:'https://github.com/AbderrahimTroudi/Gestion-de-restaurant'
  },
  {
    id:4,
    image:IMG4,
    title:'React JS',
    
    github:'https://github.com/AbderrahimTroudi/portfolio-src'
  },
  {
    id:2,
    image:IMG2,
    title:'Power BI Dashboard',
    sousTitre:'Currently working  on ',
    github:'https://github.com'
  },
  {
    id:3,
    image:IMG3,
    title:'Taxi reservation(Mobile application)',
    sousTitre:'Currently working  on ',
    github:'https://github.com'
  }
  
]
const Portfolio = () => {
  return (
    
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container port__container">
{
        data.map(({id,image,title,github,sousTitre}) =>{
          return(<article key={id} className="port__item">
          <div className="port__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <h5>{sousTitre}</h5>
          <div className="port__item-cta">
          <a href={github} target="__blank" className="btn">GitHub</a>
          </div>
        </article>)})
}
      </div>
    </section>
  )
}

export default Portfolio