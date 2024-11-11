import React from 'react';
import {ListBulletIcon} from "@heroicons/react/24/outline/index.js";
import PropTypes from "prop-types";
import {categories} from "../../../../../data/newsCategory.js";

NavHeader.propTypes = {
    onChangePage: PropTypes.func,
    onChangeCategory: PropTypes.func
}

function NavHeader(props) {
    return (
        <div className="navbar bg-base-100 max-w-screen-xl">
            <div className="navbar-start w-full gap-2">
                <div className="border-r-2 border-r-black px-2">
                    <a className="text-xl font-bold text-red-600">EnigmaNews</a>
                </div>
                <div className="flex w-full items-center gap-2 md:visible invisible">
                    {
                        categories.map((category, index) => {
                            return (
                                <a className="text-xs font-bold hover:bg-gray-50 p-2 rounded-full cursor-pointer"
                                   key={index}
                                   onClick={() => props.onChangeCategory(category)}>{category}</a>
                            )
                        })
                    }
                </div>

                <div className="dropdown invisible">
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
            <div className="navbar-end">
                <button className="btn btn-error text-white" onClick={() => props.onChangePage("login")}>Login</button>
            </div>
        </div>
    );
}

export default NavHeader;