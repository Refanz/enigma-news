import React from 'react';
import Navbar from "./Navbar.jsx";
import HomeContent from "./content/HomeContent.jsx";
import PropTypes from "prop-types";
import NewsContent from "./content/NewsContent.jsx";
import CreateNews from "./content/CreateNews.jsx";
import UpdateNews from "./content/UpdateNews.jsx";

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
                    <NewsContent news={props.news}
                                 onChangeSidebarMenu={props.onChangeSidebarMenu}
                                 onDeleteNews={props.onDeleteNews}
                                 onUpdateNews={props.onUpdateNews}/>}
                {props.menu === "CreateNews" && <CreateNews onAddNews={props.onAddNews}/>}
                {props.menu === "UpdateNews" &&
                    <UpdateNews onUpdateNews={props.onUpdateNews}
                                tempNews={props.tempNews}/>}
            </div>
        </div>
    );
}


export default Content;