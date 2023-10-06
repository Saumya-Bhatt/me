import nodejs from './images/skills/backend/node-js.png';
import express from './images/skills/backend/express.png';
import django from './images/skills/backend/django.png';
import flask from './images/skills/backend/flask.png';
import spring from './images/skills/backend/spring.png';
import ktor from './images/skills/backend/ktor.png';

import react from './images/skills/frontend/react.png';
import html from './images/skills/frontend/html.png';
import css from './images/skills/frontend/css3.png';
import bootstrap from './images/skills/frontend/bootstrap.png';

import mongodb from './images/skills/database/mongodb.png';
import mysql from './images/skills/database/mysql.png';
import elastic from './images/skills/database/elasticsearch.png';
import postgresql from './images/skills/database/postgresql.png';
import redis from './images/skills/database/redis.png';

import postman from './images/skills/tools/postman.png';
import firebase from './images/skills/tools/firebase.png';
import figma from './images/skills/tools/figma.png';
import android from './images/skills/tools/android-studio.png';
import heroku from './images/skills/tools/heroku.png';
import aws from './images/skills/tools/aws.png';
import terraform from './images/skills/tools/terraform.png';
import docker from './images/skills/tools/docker.png';
import githubTool from './images/skills/tools/github.png';

import placements from './images/resources/placements.jpg';
import dsa from './images/resources/dsa.png';
import oop from './images/resources/oop.png';
import ir from './images/resources/IR.jpg';
import history from './images/resources/history.jpg';

import github from './images/icons/Github_white.svg';
import linkedin from './images/icons/LinkedIN_white.svg';
import gmail from './images/icons/Gmail_white.svg';
import behance from './images/icons/Behance_white.svg';
import medium from './images/icons/medium.svg'


export const resumeData = {
    "experience": [
        {
            company: 'Porter Logistics',
            link: 'https://porter.in/',
            location: 'Bengaluru, Karnataka',
            duration: 'July 2022 - Present',
            title: 'Software Engineer 1',
            summary: 'Working with the payments and locations platforms team',
            description: [
                "Built various usecases in the payments microservice, which currently processes 1 Lakh transactions in a month.",
                "Worked on improving location recency of driver app, to bring it's p99 from 40 to ~15 minutes.",
                "Managed to bring the uptime of the microservice I worked on from ~80% to 99%."
            ]
        },
        {
            company: 'Nucleus Software',
            link: 'https://www.nucleussoftware.com/',
            location: 'Noida, UP',
            duration: 'June 2021 - December 2021',
            title: 'Software Engineering Intern',
            summary: 'Currently worked with the B2B facing team called Finaxia for classifying their customer base',
            description: [
                'Built end to end application to classify customers and display it onto a dashboard.',
                "Dashboard had functionality to get updated in near-real time."
            ]
        },
        {
            company: 'National Institute of Oceanography',
            link: 'https://www.nio.org/',
            location: 'Panjim, Goa',
            duration: 'August 2020 - October 2020',
            title: 'Summer Intern',
            summary: 'Worked with the Marine Scoping team to built a communication channel with their bot',
            description: [
                'Created web-based dashboard to manage and control 25 marine robots in real-time.',
                "Server was able to successfully fetch near-real time updates from the bot including their location and other parameters."
            ]
        }
    ],
    "projects": [
        {
            name: 'Movies-By-the-Sea',
            tech: 'Flask, React',
            description: 'Created backend, frontend and public REST API with custom authentication',
            link: 'https://github.com/Movies-By-the-Sea'
        },
        {
            name: 'Twitter-Clone',
            tech: 'Flask, MySQL',
            description: 'Working Twitter clone with user, session and cookie management system',
            link: 'https://github.com/Saumya-Bhatt/Twitter-Clone'
        },
        {
            name: 'Chat-Room',
            tech: 'Ajax, MySQL',
            description: 'Realtime updating and locally hosted chat room built in Javascript',
            link: 'https://github.com/Saumya-Bhatt/Chat-Room'
        }
    ],
    "skills": [
        {
            field: 'Backend Stack',
            tech: [
                {
                    name: "Ktor",
                    img: ktor,
                    link: "https://ktor.io/docs/welcome.html"
                },
                {
                    name: 'Spring Boot',
                    img: spring,
                    link: 'https://spring.io/projects/spring-boot'
                },
                {
                    name: 'Node JS',
                    img: nodejs,
                    link: 'https://nodejs.org/en/'
                },
                {
                    name: 'Express JS',
                    img: express,
                    link: 'https://expressjs.com/'
                },
                {
                    name: 'Flask',
                    img: flask,
                    link: 'https://flask.palletsprojects.com/en/2.1.x/'
                },
                {
                    name: 'Django',
                    img: django,
                    link: 'https://www.djangoproject.com/'
                }
            ]
        },
        {
            field: 'Frontend Stack',
            tech: [
                {
                    name: 'React',
                    img: react,
                    link: 'https://reactjs.org/'
                },
                {
                    name: 'HTML 5',
                    img: html,
                    link: 'https://dev.w3.org/html5/html-author/'
                },
                {
                    name: 'CSS 3',
                    img: css,
                    link: 'https://css3.com/'
                },
                {
                    name: 'Bootstrap',
                    img: bootstrap,
                    link: 'https://getbootstrap.com/'
                }
            ]
        },
        {
            field: 'Databases',
            tech: [
                {
                    name: 'PostgreSQL',
                    img: postgresql,
                    link: "https://www.postgresql.org/"
                },
                {
                    name: 'MongoDB',
                    img: mongodb,
                    link: 'https://www.mongodb.com/'
                },
                {
                    name: 'MySQL',
                    img: mysql,
                    link: 'https://www.mysql.com/'
                },
                {
                    name: "Redis",
                    img: redis,
                    link: "https://redis.io/"
                },
                {
                    name: 'Elastic Search',
                    img: elastic,
                    link: 'https://www.elastic.co/elasticsearch/'
                }
            ]
        },
        {
            field: 'Tools and Services',
            tech: [
                {
                    name: "AWS",
                    img: aws,
                    link: "https://aws.amazon.com/"
                },
                {
                    name: "Terraform",
                    img: terraform,
                    link: "https://www.terraform.io/"
                },
                {
                    name: "Docker",
                    img: docker,
                    link: "https://www.docker.com/"
                },
                {
                    name: 'Firebase',
                    img: firebase,
                    link: 'https://firebase.google.com/'
                },
                {
                    name: 'Heroku',
                    img: heroku,
                    link: 'https://www.heroku.com/'
                },
                {
                    name: "Github",
                    img: githubTool,
                    link: "https://github.com/"
                }
            ]
        }
    ],
    "resources": [
        {
            name: 'DSA Question Bank',
            link: 'https://saumya-bhatt.notion.site/91fd63c86ffc405f9dd16256e6cc3d56?v=9753b961f83c4ef1bb3a88fe1f36d4d1',
            description: '100 DSA questions of all topics important for placements with solutions',
            img: placements
        },
        {
            name: 'Data Structures and Algorithms',
            link: 'https://saumya-bhatt.notion.site/62ea2570009044338ee7e88f7db66d1f?v=f8d1e79aeaeb4acfaf8455fb6c9e5364',
            description: 'Covering all important DSA topics required for IT placements',
            img: dsa
        },
        {
            name: 'Object Oriented Programming',
            link: 'https://saumya-bhatt.notion.site/e106f332689b44818c7bbdb60905bc6a?v=d24fe34e5b5443d0ade29056c73780e3',
            description: 'Class notes for OOP done in Java covering all important topics',
            img: oop
        },
        {
            name: 'International Relations',
            link: 'https://saumya-bhatt.notion.site/adff0edb2bb444bb8eb99327e7036529?v=001cb6c93e394f8fbc72be7c0f91204a',
            description: 'Class notes on various IR topics and interesting case studies',
            img: ir
        },
        {
            name: 'Main Trends in Indian History',
            link: 'https://saumya-bhatt.notion.site/Main-Trends-in-Indian-History-0aaf5872ce4643ae829ead12bd6fd3fa',
            description: 'Class notes on Indian History covering important topics and discussions',
            img: history
        }
    ],
    "socials": [
        {
            name: 'Github',
            link: "https://github.com/Saumya-Bhatt",
            icon: github
        },
        {
            name: 'LinkedIn',
            link: "https://www.linkedin.com/in/saumya-bhatt-2000/",
            icon: linkedin
        },
        {
            name: 'Medium',
            link: 'https://medium.com/@SaumyaBhatt106',
            icon: medium
        },
        {
            name: 'Gmail',
            link: "mailto:saumya.bhatt106@gmail.com",
            icon: gmail
        }
    ]
}