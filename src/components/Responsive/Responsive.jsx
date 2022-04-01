import React from 'react'

import Projects from '../Navigation/Projects/Projects'
import Experience from '../Navigation/Experience/Experience'
import Skills from '../Navigation/Skills/Skills'
import Resources from '../Navigation/Resources/Resources'

import './responsive.css'

export default function Responsive() {
  return (
    <div className="responsive">
        <div className="res-container">
            <div className="res-heading">01 - Projects</div>
            <Projects />
        </div>
        <div className="res-container">
            <div className="res-heading">02 - Experience</div>
            <Experience />
        </div>
        <div className="res-container">
            <div className="res-heading">03 - Skills</div>
            <Skills />
        </div>
        <div className="res-container">
            <div className="res-heading">04 - Resources</div>
            <Resources />
        </div>
    </div>
  )
}
