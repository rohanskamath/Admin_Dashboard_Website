import React from 'react'
import Logo from '../assets/logo.png'
import Logo_side from '../assets/logo2.png'
import Notification from '../assets/notification.png'
import Moon from '../assets/moon_icon.png'
import Hamburger from '../assets/hamburger.png'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top py-2 shadow-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link ms-4" aria-current="page" href="#"><img className="ms-4" src={Hamburger} alt="" /></a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <img className='ms-4 me-3' src={Moon} alt="" style={{ width: "40px", cursor: "pointer" }} />
                    </span>
                    <span className="navbar-text">
                        <img className='ms-4 me-3' src={Notification} alt="" style={{ width: "20px", height: "auto", cursor: "pointer" }} />
                    </span>
                    <span className="navbar-text">
                        <img className='ms-4 me-3' src={Logo_side} alt="" style={{ width: "40px", cursor: "pointer" }} />
                    </span>
                    <span className="navbar-text">
                        <img className='ms-4 me-3' src={Logo} alt="" style={{ width: "40px", cursor: "pointer" }} />
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar