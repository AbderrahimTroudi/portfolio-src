import React from 'react'
import './portfolio.css'
import IMG1 from '../../assest/portfolio1.jpg'
import IMG2 from '../../assest/portfolio2.jpg'
import IMG3 from '../../assest/portfolio3.jpg'
import IMG4 from '../../assest/portfolio4.jpg'
import IMG5 from '../../assest/portfolio5.png'
import IMG6 from '../../assest/portfolio6.jpg'
const data = [
  {
    id:1,
    image:IMG1,
    title:'Java',
    github:'https://github.com',
    demo:'https://github.com'
  },
  
  {
    id:3,
    image:IMG3,
    title:'Spring boot',
    github:'https://github.com',
    demo:'https://github.com'
  },
  {
    id:4,
    image:IMG4,
    title:'React JS',
    github:'https://github.com',
    demo:'https://github.com'
  }
]
const Portfolio = () => {
  return (
    
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container port__container">
{
        data.map(({id,image,title,github,demo}) =>{
          return(<article key={id} className="port__item">
          <div className="port__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="port__item-cta">
          <a href={github} target="__blank" className="btn">GitHub</a>
          <a href={demo} target="__blank" className="btn btn-primary">live Demo</a>
          </div>
        </article>)})
}
      </div>
    </section>
  )
}

export default Portfolio