import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-sm">
                <a className="navbar-brand" href="/">
                    <h3> Social Media </h3>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbar-list-4">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hamza Mughal
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/">Dashboard</a>
                                <a className="dropdown-item" href="/">Edit Profile</a>
                                <a className="dropdown-item" href="/">Log Out</a>
                            </div>
                        </li>
                        <li>
                            <a className='nav-link' href='/'>
                                <button>Login</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header