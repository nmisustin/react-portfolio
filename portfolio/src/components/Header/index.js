import React from 'react';

function Header(){
    return <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
            <button className="navbar-brand btn btn-primary text-light">Portfolio</button>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button className="btn btn-primary text-light">About Me</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-primary text-light">My Work</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-primary text-light">Contact Me</button>
                    </li>
                </ul>
            </div>
    </nav>
}
export default Header