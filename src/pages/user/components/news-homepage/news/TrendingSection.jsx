import React, {Component} from 'react';
import {ArrowRightIcon} from "@heroicons/react/24/outline/index.js";
import NewsItem from "./NewsItem.jsx";
import NewsItemOverlay from "./NewsItemOverlay.jsx";

class TrendingSection extends Component {
    render() {
        return (
            <div className="w-full flex flex-col max-w-screen-xl gap-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">Trending</h1>
                    <div className="flex gap-2 text-sm text-red-600 font-semibold">
                        <p>See all</p>
                        <ArrowRightIcon className="w-3"/>
                    </div>
                </div>
                <NewsItemOverlay/>
                <div className="flex gap-4 md:flex-row flex-col">
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                </div>
            </div>
        );
    }
}

export default TrendingSection;