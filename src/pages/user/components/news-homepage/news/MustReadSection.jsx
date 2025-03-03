import React from 'react';
import {ArrowRightIcon} from "@heroicons/react/24/outline/index.js";
import NewsItem from "./NewsItem.jsx";

function MustReadSection(props) {
    return (
        <div className="w-full flex flex-col max-w-screen-xl gap-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Must Read</h1>
                <div className="flex gap-2 text-sm text-red-600 font-semibold">
                    <p>See all</p>
                    <ArrowRightIcon className="w-3"/>
                </div>
            </div>
            <div className="flex gap-4 md:flex-row flex-col">
                {
                    props.news.map((news) => {
                        return(
                            <NewsItem key={news.id} news={news}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default MustReadSection;