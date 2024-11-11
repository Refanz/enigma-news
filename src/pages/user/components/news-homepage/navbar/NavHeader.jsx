import React from 'react';
import {ListBulletIcon} from "@heroicons/react/24/outline/index.js";
import PropTypes from "prop-types";

NavHeader.propTypes = {
    onChangePage: PropTypes.func
}

function NavHeader(props) {
    return (
        <div className="navbar bg-base-100 max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <ListBulletIcon className="w-6"/>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl text-red-600">EnigmaNews</a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-error text-white" onClick={() => props.onChangePage("login")}>Login</button>
            </div>
        </div>
    );
}

export default NavHeader;