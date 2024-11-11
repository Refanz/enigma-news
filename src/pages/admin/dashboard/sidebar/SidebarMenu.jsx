import React from 'react';
import PropTypes from "prop-types";

SidebarMenu.propTypes = {
    isActive: PropTypes.bool,
    children: PropTypes.element,
    name: PropTypes.string,
    onChangeSidebarMenu: PropTypes.func
}

function SidebarMenu(props) {

    const {name, isActive, onChangeSidebarMenu, children} = props;

    return (
        <div className={`${isActive && "border-s-4 border-s-[#F65A11]"}`}
             onClick={() => onChangeSidebarMenu(name)}>
            <div className="flex gap-4 p-2 mx-2 hover:bg-white/5 font-semibold rounded-xl cursor-pointer">
                {children}
                {name}
            </div>
        </div>
    );
}

export default SidebarMenu;