import React from 'react';
import PropTypes from "prop-types";

TopNews.propTypes = {
    news: PropTypes.array
}

function TopNews(props) {
    const {title, summary, author, imageUrl, publishedDate, category} = props.news.at(0);

    return (
        <div className="card lg:card-side bg-base-100 w-full max-w-screen-xl hover:bg-gray-50 cursor-pointer">
            <figure className="text-start">
                <img
                    className="rounded-xl w-96"
                    src={imageUrl}
                    alt=""/>
            </figure>
            <div className="card-body lg:w-1/2 w-full">
                <div className="flex gap-2">
                    <span>{author}</span>
                    <span>{publishedDate}</span>
                </div>
                <h2 className="card-title text-3xl">{title}</h2>
                <p>{summary}</p>
                <span className="text-red-600 font-bold">{category}</span>
            </div>
        </div>
    );
}

export default TopNews;