import React from 'react';
import Navbar from "./Navbar.jsx";
import HomeContent from "./content/HomeContent.jsx";
import PropTypes from "prop-types";
import NewsContent from "./content/NewsContent.jsx";
import CreateNews from "./content/CreateNews.jsx";

Content.propTypes = {
    menu: PropTypes.string
}

function Content(props) {
    return (
        <div className="flex flex-col bg-[#EFEDE7] w-full">
            <Navbar/>
            <div className="p-5">
                {(props.menu === "Home" || props.menu === "") && <HomeContent/>}
                {props.menu === "News" &&
                    <NewsContent news={props.news} onChangeSidebarMenu={props.onChangeSidebarMenu}
                                 onDeleteNews={props.onDeleteNews}/>}
                {props.menu === "CreateNews" && <CreateNews onAddNews={props.onAddNews}/>}
            </div>
        </div>
    );
}


export default Content;