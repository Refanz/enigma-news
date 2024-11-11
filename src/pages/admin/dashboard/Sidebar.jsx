import React from 'react';
import {HomeIcon, NewspaperIcon} from "@heroicons/react/24/outline/index.js";
import SidebarMenu from "./sidebar/SidebarMenu.jsx";
import PropTypes from "prop-types";

Sidebar.propTypes = {
    menu: PropTypes.string,
    onChangeSidebarMenu: PropTypes.func
}

function Sidebar(props) {

    const {menu, onChangeSidebarMenu} = props;

    return (
        <div className="w-80 h-screen text-white overflow-hidden bg-[#22331D]">
            <div className="flex flex-col gap-7 py-8">
                <div className="font-bold text-xl px-4">
                    EnigmaNews
                </div>
                <div className="flex flex-col gap-4">
                    <SidebarMenu isActive={(menu === "Home" || menu === "")} onChangeSidebarMenu={onChangeSidebarMenu} name="Home">
                        <HomeIcon className="size-5"/>
                    </SidebarMenu>
                    <SidebarMenu isActive={(menu === "News")} onChangeSidebarMenu={onChangeSidebarMenu} name="News">
                        <NewspaperIcon className="size-5"/>
                    </SidebarMenu>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;