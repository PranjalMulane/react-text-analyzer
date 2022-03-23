import React from 'react'
import PropTypes from 'prop-types';

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">{props.titleText}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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