import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">World Famous Hostel</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Music Inventory
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/MInstruments">Instruments</Link></li>
                                <li><Link className="dropdown-item" to="/MTutorials">Music Tutorials</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" to="/MReviews">Reviews</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sports Inventory
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/SInstruments">Equipment</Link></li>
                                <li><Link className="dropdown-item" to="/STutorials">Sport Tutorials</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" to="/SReviews">Reviews</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tech Inventory
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/TInstruments">Equipment</Link></li>
                                <li><Link className="dropdown-item" to="/TTutorials">Tech Tutorials</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" to="/TReviews">Reviews</Link></li>
                            </ul>
                        </li>
                    </ul>
                        <Link class="nav-link active" aria-current="page" to="/ContactUs">Contact Us</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar