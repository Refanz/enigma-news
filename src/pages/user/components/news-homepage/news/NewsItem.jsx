import React from 'react';
import PropTypes from "prop-types";


NewsItem.propTypes = {
    news: PropTypes.object
}

function NewsItem(props) {

    const {title, summary, author, publishedDate, category, imageUrl} = props.news;

    return (
        <div className="card card-compact bg-base-100 md:w-96 w-full hover:bg-gray-50 cursor-pointer"
             onClick={() => props.onChangePage("detail", props.news)}>
            <figure>
                <img
                    className="w-full h-48 object-cover"
                    src={imageUrl}
                    alt="Shoes"/>
            </figure>
            <div className="card-body">
                <div className="flex justify-start">
                    <p>{author}</p>
                    <p>{publishedDate}</p>
                </div>
                <h2 className="card-title">{title}</h2>
                <p>{summary}</p>
                <span className="text-red-600 font-bold">{category}</span>
            </div>
        </div>
    );
}

export default NewsItem;
