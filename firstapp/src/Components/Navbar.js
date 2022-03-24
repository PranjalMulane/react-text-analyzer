import React from 'react'
import PropTypes from 'prop-types';

function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <a className="navbar-brand" href="#">{props.titleText}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                
                <input type="checkbox" checked data-toggle="toggle" data-size="xs"/>


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