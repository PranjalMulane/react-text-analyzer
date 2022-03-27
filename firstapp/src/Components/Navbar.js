import React from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
function Navbar(props) {
    return (
        <>
            {/* Navbar */}
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <Link className="navbar-brand" to="/">{props.titleText}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mode">{props.aboutText}</Link>
                        </li>
                    </ul>

                    <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
                    </div>


                    {/* . */}
                </div>

            </nav>

            <h1>{props.heading}</h1>
        </>
    );
}
//Props types
Navbar.propTypes = {
    titleText: PropTypes.string.isRequired,
    heading: PropTypes.string

}
// default props : 
Navbar.defaultProps = {
    titleText: "Enter text here"
}

export default Navbar;