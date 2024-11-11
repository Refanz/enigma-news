import React, {Component} from 'react';
import PropTypes from "prop-types";

class NewsItem extends Component {
    render() {
        return (
            <div className={`card card-compact bg-base-100 md:w-96 w-full ${this.props.style}`}>
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"/>
                </figure>
                <div className="card-body">
                    <div className="flex justify-start">
                        <p>Author</p>
                        <p>Senin, 11 November 2024</p>
                    </div>
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <span className="text-red-600 font-bold">Sport</span>
                </div>
            </div>
        );
    }
}

export default NewsItem;

NewsItem.propTypes = {
    style: PropTypes.string
}