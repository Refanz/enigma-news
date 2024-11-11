import React, {Component} from 'react';
import Navbar from "./components/news-homepage/navbar/Navbar.jsx";
import Divider from "../../shared/components/Divider.jsx";
import NewsItem from "./components/news-homepage/news/NewsItem.jsx";
import getNewsByCategory from "../../utils/filterUtils.js";
import PropTypes from "prop-types";

class NewsList extends Component {
    render() {

        const {onChangePage, onChangeCategory, category, news} = this.props;

        return (
            <div className="flex flex-col items-center justify-center w-full gap-10 p-2">
                <Navbar onChangePage={onChangePage} onChangeCategory={onChangeCategory}/>
                <div className="flex flex-col w-full gap-10 p-4 max-w-screen-xl mx-auto">
                    <h1 className="text-2xl font-bold border-b-2">{category}</h1>
                    {
                        getNewsByCategory(news, category).map((item) => {
                            return (
                                <NewsItem news={item} key={item.id}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default NewsList;

NewsList.propTypes = {
    onChangePage: PropTypes.func,
    onChangeCategory: PropTypes.func,
    category: PropTypes.string,
    news: PropTypes.array
}