import { data } from "./data";

import './resources.css';

export default function Resources() {
  return (
    <div className="resources">
      {data.map((item) => {
        return (
          <a href={item.link} rel='noreferrer' target='_blank' className="resources-link">
            <div className="resources-container">
              <div className="resources-text">
                <div className="resources-name">{item.name}</div>
                <div className="resources-desc">{item.description}</div>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}
