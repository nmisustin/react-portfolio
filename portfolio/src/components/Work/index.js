import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image';

function Work(){
    return <div className="text-center text-primary">
        <Carousel>
            <Carousel.Item>
                <Image src="./img/guesstures.jpg" alt="guesstures screenshot" fluid/>
                <Carousel.Caption>
                    <div>
                        <button className="btn btn-secondary text-light">Guesstures</button>
                    </div>
                    <button className=" btn btn-success">This is the guestures application</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="./img/rps-chat-screenshot.jpg" alt="rps chat screenshot" fluid/>
                <Carousel.Caption classname="text-primary">
                <div>
                        <button className="btn btn-secondary text-light">RPS Chat</button>
                    </div>
                    <button className=" btn btn-success">This is the RPS Chat application</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className="row">
            <div className="col-4">
                <Image src='./img/portfolio.jpg' alt='original portfolio screenshot' fluid/>
                <button className='btn btn-secondary text-light'>info</button>
            </div>
            <div className="col-4">
                <Image src='./img/password-generator.jpg' alt='password generator screenshot' fluid/>
                <button className='btn btn-secondary text-light'>info</button>
            </div>
            <div className="col-4">
                <Image src='./img/code-quiz.jpg' alt='original portfolio screenshot' fluid/>
                <button className='btn btn-secondary text-light'>info</button>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <Image src='./img/word-day-scheduler.jpg' alt='original portfolio screenshot' fluid/>
                <button className='btn btn-secondary text-light'>info</button>
            </div>
            <div className="col-4">
                <Image src='./img/weather-dashboard.jpg' alt='password generator screenshot' fluid/>
                <button className='btn btn-secondary text-light'>info</button>
            </div>
            <div className="col-4">
                <Image src='./img/readme-generator.jpg' alt='original portfolio screenshot' fluid/>
                <button className='btn btn-secondary text-light'>info</button>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <Image src='./img/team-profile-generator.jpg' alt='original portfolio screenshot' fluid/>
                <button className='btn btn-secondary text-light'>info</button>
            </div>
            <div className="col-4">
                <Image src='./img/employee-tracker.jpg' alt='password generator screenshot' fluid/>
                <button className='btn btn-secondary text-light'>info</button>
            </div>
            <div className="col-4">
                <Image src='./img/tech-blog.jpg' alt='original portfolio screenshot' fluid/>
                <button className='btn btn-secondary text-light'>info</button>
            </div>
        </div>
    </div>
}
export default Work;