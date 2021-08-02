import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image';
import MyModal from '../Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Work(){
    const projects = [
        {
            name: 'Portfolio',
            description: 'This is a portfolio made with HTML and CSS',
            github: 'https://github.com/nmisustin/nmisustin.github.io',
            website: 'https://nmisustin.github.io/',
            image:process.env.PUBLIC_URL+'/img/portfolio.jpg'
        },
        {
            name:'Password Generator',
            description:'This is a web application that uses javascript to generate a random password based on parameters that the user sets.',
            github:'https://github.com/nmisustin/password-generator',
            website:'https://nmisustin.github.io/password-generator/',
            image:process.env.PUBLIC_URL+'/img/password-generator.jpg'
        },
        {
            name:'Code Quiz',
            description:'This is a basic timed coding quiz that keeps score and displays the high scores of previous games.',
            github:'https://github.com/nmisustin/code-quiz',
            website:'https://nmisustin.github.io/code-quiz/',
            image:process.env.PUBLIC_URL+'/img/code-quiz.jpg'
        },
        {
            name:'Work Day Scheduler',
            description:'This is an application that keeps track of time and allows the user to write in tasks for different hours of the day.',
            github:'https://github.com/nmisustin/work-day-scheduler',
            website:'https://nmisustin.github.io/work-day-scheduler/',
            image:process.env.PUBLIC_URL+'/img/word-day-scheduler.jpg'
        },
        {
            name:'Weather Dashboard',
            description:'This is an application that utilizes a weather api to give the user the current weather in a location that they can search. The application also shows a five day forecast.',
            github:'https://github.com/nmisustin/weather-dashboard',
            website:'https://nmisustin.github.io/weather-dashboard/',
            image:process.env.PUBLIC_URL+ '/img/weather-dashboard.jpg'
        },
        {
            name:'README Generator',
            description:'This is an application that allows the user to enter information about a project they are working on. The application will then generate a README.md with the information that it is given.',
            github:'https://github.com/nmisustin/readme-generator',
            image:process.env.PUBLIC_URL+ '/img/readme-generator.JPG'
        },
        {
            name:'Team Profile Generator',
            description:'This is an application that allows the user to enter information about a team of people. Once the information is filled out the application will generate html to create a simple website with the team information.',
            github:'https://github.com/nmisustin/team-profile-generator',
            image:process.env.PUBLIC_URL+ '/img/team-profile-generator.JPG'
        },
        {
            name:'Employee Tracker',
            description:'This application allows the user to enter information about employees and track what their job and salaries are.',
            github:'https://github.com/nmisustin/employee-tracker',
            image:process.env.PUBLIC_URL+'/img/employee-tracker.JPG'
        },
        {
            name:'Tech Blog',
            description:'This is a basic social media website that uses MySQL to store data.',
            github:'https://github.com/nmisustin/tech-blog',
            website:'https://glacial-hollows-12407.herokuapp.com/',
            image:process.env.PUBLIC_URL+'/img/tech-blog.JPG'
        }
    ]
    const featureProjects = [
        {
            name: 'Guesstures',
            description: 'This is an application that uses microsoft facial recognition technology to look at the expressions on faces in images and create a quiz to help those who might have difficulty recognizing emotions.',
            github:'https://github.com/nmisustin/guesstures',
            website:'https://nmisustin.github.io/guesstures/',
            image:process.env.PUBLIC_URL+ '/img/guesstures.jpg'
        },
        {
            name: 'RPS Chat',
            description: ' This is a chat app inspired by a classic childhood game.',
            github:'https://github.com/nmisustin/rps-chat',
            website:'https://fast-woodland-75585.herokuapp.com/',
            image:process.env.PUBLIC_URL+'/img/rps-chat-screenshot.jpg'
        },
        {
            name : 'Picd-up',
            description: 'This is a photo sharing app that is designed to allow photographers to display their work.',
            github: 'https://github.com/Ronan-Codes/Project-3',
            website: 'https://evening-refuge-82542.herokuapp.com/',
            image: process.env.PUBLIC_URL+'/img/Picd-Up-Screenshot.JPG'
        }
    ]
    return <div className="text-center text-primary">
        <Carousel>
            {featureProjects.map((project,i)=>(
                <Carousel.Item key={project.name}>
                    <Image src={project.image} alt="rps chat screenshot" fluid />
                    <Carousel.Caption className="text-primary">
                        <div>
                        <MyModal project={project}></MyModal>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
        <Row >
            {projects.map((project, i) => (
                <Col xs={6} md={4} key={project.name} className="mt-3 text-center">
                    <Image src= {project.image} alt='screenshot' fluid/>
                    <MyModal project={project}></MyModal>
                </Col>
            ))}
        </Row>
    </div>
}
export default Work;