import React from "react";
import NavHeader from "./NavHeader.jsx";
import PropTypes from "prop-types";

function Navbar(props) {
    return (
        <nav className="w-full flex flex-col gap-2 items-center">
            <NavHeader onChangePage={props.onChangePage} onChangeCategory={props.onChangeCategory}/>
        </nav>
    );
}

export default Navbar;

Navbar.propTypes = {
    onChangePage: PropTypes.func
}