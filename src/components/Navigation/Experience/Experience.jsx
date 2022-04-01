import { data } from "./data";
import './experience.css'

import external from '../../../images/icons/external_link.svg';

export default function Experience() {
  return (
    <div className="experience">
      {data.map((item) => {
        return (<div className='experience-item'>
          <div className="experience-meta">
            <div>{item.title}</div>
            <div>{item.duration}</div>
          </div>
          <a 
            rel='noreferrer'
            href={item.link}
            target='_blank'
            className="experience-title">
              {item.company}
              <img src={external} alt="External Link" className="external-icon" />
          </a>
          <div className="experience-description">{item.description}</div>
        </div>)
      })}
    </div>
  )
}
