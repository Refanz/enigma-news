import {Component} from 'react';
import Navbar from "./components/news-homepage/navbar/Navbar.jsx";
import Hero from "./components/news-homepage/hero/Hero.jsx";
import TopNews from "./components/news-homepage/news/TopNews.jsx";
import LatestNewsSection from "./components/news-homepage/news/LatestNewsSection.jsx";
import MustReadSection from "./components/news-homepage/news/MustReadSection.jsx";
import TrendingSection from "./components/news-homepage/news/TrendingSection.jsx";
import Footer from "./components/news-homepage/footer/Footer.jsx";

class NewsHomepage extends Component {
    render() {
        return (
            <div className="flex flex-col items-center justify-center w-full gap-10 p-2">
                <Navbar/>
                <Hero/>
                <TopNews/>
                <LatestNewsSection/>
                <MustReadSection/>
                <TrendingSection/>
                <Footer/>
            </div>
        );
    }
}

export default NewsHomepage;