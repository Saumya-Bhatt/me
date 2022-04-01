import {data} from './data';
import { useMediaQuery } from 'react-responsive';


import './skills.css';

export default function Skills() {

  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className="skills">
      {data.map((item) => {
        return (
          <div className="skill-category">
            <div className="skill-name">{item.field}</div>
            <div className="skill-category-container">
              {item.tech.map((t) => {
                return (
                  <a 
                    target='_blank'
                    rel='noreferrer'
                    href={t.link} 
                    className="skill-link">
                    <div className="skill-category-item">
                      <img src={t.img} alt={t.name} className="skill-category-img" />
                      {isMobile ? (<></>) : (
                        <div className="skill-category-name">{t.name}</div>
                      )}
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
