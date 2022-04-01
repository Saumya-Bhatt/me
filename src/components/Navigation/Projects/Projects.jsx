import { data } from './data';
import './projects.css'

import external from '../../../images/icons/external_link.svg';

export default function Projects() {
  return (
    <div className="projects">
      {data.map((item) => {
        return (<div className='project-item'>
          <div className="project-tech">{item.tech}</div>
          <a 
            href={item.link} 
            rel='noreferrer' 
            target='_blank' 
            className="project-name">
              {item.name}
              <img src={external} alt="External Link" className="external-icon" />
            </a>
          <div className="project-description">{item.description}</div>
        </div>)
      })}
    </div>
  )
}
