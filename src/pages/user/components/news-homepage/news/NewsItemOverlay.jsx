import React from 'react';
import PropTypes from "prop-types";

NewsItemOverlay.propTypes = {
    news: PropTypes.object
}

function NewsItemOverlay(props) {
    const {title, summary, author, imageUrl, publishedDate, category} = props.news;

    return (
        <div className="card bg-base-100 image-full cursor-pointer">
            <figure className="h-96">
                <img
                    className="w-full"
                    src={imageUrl}
                    alt="Shoes"/>
            </figure>
            <div className="card-body w-full justify-end">
                <div className="flex flex-col md:gap-3 gap-1 text-sm">
                    <div className="flex gap-2">
                        <span>{author}</span>
                        <span>{publishedDate}</span>
                    </div>
                    <h1 className="text-lg font-bold">{title}</h1>
                    <p>{summary}</p>
                    <span>{category}</span>
                </div>
            </div>
        </div>
    );

}

export default NewsItemOverlay;