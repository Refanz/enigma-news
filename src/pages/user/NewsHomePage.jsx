import {Component} from 'react';
import Navbar from "./components/news-homepage/navbar/Navbar.jsx";
import Hero from "./components/news-homepage/hero/Hero.jsx";
import TopNews from "./components/news-homepage/news/TopNews.jsx";
import LatestNewsSection from "./components/news-homepage/news/LatestNewsSection.jsx";
import MustReadSection from "./components/news-homepage/news/MustReadSection.jsx";
import TrendingSection from "./components/news-homepage/news/TrendingSection.jsx";
import Footer from "./components/news-homepage/footer/Footer.jsx";
import PropTypes from "prop-types";

class NewsHomePage extends Component {
    render() {
        return (
            <div className="flex flex-col items-center justify-center w-full gap-10 p-2">
                <Navbar onChangePage={this.props.onChangePage}/>
                <Hero/>
                <TopNews news={this.props.news} onChangePage={this.handleChangePage}/>
                <LatestNewsSection news={this.props.news} onChangePage={this.props.onChangePage}/>
                <MustReadSection news={this.props.news} onChangePage={this.handleChangePage}/>
                <TrendingSection news={this.props.news} onChangePage={this.handleChangePage}/>
                <Footer/>
            </div>
        );
    }
}

export default NewsHomePage;

NewsHomePage.propTypes = {
    news: PropTypes.array,
    onChangePage: PropTypes.func
}

