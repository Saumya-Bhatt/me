import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Skills from '../Navigation/Skills/Skills';
import Resources from '../Navigation/Resources/Resources';
import Projects from '../Navigation/Projects/Projects';
import Experience from '../Navigation/Experience/Experience';
import Footer from '../Footer/Footer';
import Responsive from '../Responsive/Responsive';

import './header.css';

export default function Header() {


    const [nav, setNav] = useState('');
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const setNavigation = (item) => (e) => {
        e.preventDefault();
        setNav(item)
    }

  return (
    <div className='main-div'>
        <div className="main-div-left">
            <div className="main-heading">Saumya Bhatt</div>
            <p className="main-subheading">Fullstack Web Developer</p>
            <div className="main-subtext">
            Love to build robust web applications and have a keen eye for design and UI/UX. Being a film enthusiast, often write reviews on my blog site <a 
                rel='noreferrer' 
                target='_blank' 
                href="http://mbts.studio" 
                className="main-mbts">Movies By The Sea.</a> 
            </div>
            {isMobile ? (<Responsive />) : (
                <div className="main-navigation">
                    <div 
                    onClick={setNavigation('projects')}
                    className={nav === 'projects' ? 'active main-nav-link' : "main-nav-link"}>01 - Projects
                    </div>
                    <div 
                    onClick={setNavigation('experience')}
                    className={nav === 'experience' ? 'active main-nav-link' : "main-nav-link"}>02 - Experience
                    </div>
                    <div 
                    onClick={setNavigation('skills')}
                    className={nav === 'skills' ? 'active main-nav-link' : "main-nav-link"}>03 - Skills
                    </div>
                    <div 
                    onClick={setNavigation('resources')}
                    className={nav === 'resources' ? 'active main-nav-link' : "main-nav-link"}>04 - Resources
                    </div>
                </div>
            )}
        <Footer />
        </div>
        <div className="main-div-right">
            {(nav === 'projects') ? (<Projects />) : (
                (nav === 'experience') ? (<Experience />) : (
                    (nav === 'skills') ? (<Skills />) : (
                        (nav === 'resources') ? (<Resources />) : (<></>)
                    )
                )
            )}
        </div>
    </div>
  )
}
