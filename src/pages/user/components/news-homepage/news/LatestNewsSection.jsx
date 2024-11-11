import React from 'react';
import {ArrowRightIcon} from "@heroicons/react/24/outline/index.js";
import NewsItem from "./NewsItem.jsx";
import PropTypes from "prop-types";

LatestNewsSection.propTypes = {
    news: PropTypes.array
}

function LatestNewsSection(props) {
    return (
        <div className="w-full flex flex-col max-w-screen-xl gap-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Latest News</h1>
                <div className="flex gap-2 text-sm text-red-600 font-semibold">
                    <p>See all</p>
                    <ArrowRightIcon className="w-3"/>
                </div>
            </div>
            <div className="flex md:flex-row flex-col w-full gap-4">
                {
                    props.news.map((news) => {
                        return (
                            <NewsItem news={news} key={news.id} onChangePage={props.onChangePage}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default LatestNewsSection;
