import me from '../../images/me.png';
import {social} from './data';

import './footer.css';

export default function Footer() {

  return (
    <div className="main-footer-links">
    <img src={me} alt="Saumya Bhatt" className='main-footer-img' />

    {social.map((item) => {
      return (
        <div className="main-footer-item">
          <img src={item.icon} alt={item.name} className="social-img" />
          <a 
            href={item.link}
            rel='noreferrer'
            target='_blank'>
            {item.name}
          </a>
        </div>
      )
    })}

</div>
  )
}
