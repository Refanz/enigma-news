import {Component} from "react";
import Navbar from "./components/news-homepage/navbar/Navbar.jsx";
import Footer from "./components/news-homepage/footer/Footer.jsx";

function NewsDetail(props) {
    const {title, summary, author, imageUrl, publishedDate, category} = props.news;

    return (
        <div className="flex flex-col items-center justify-center w-full gap-10 p-2 max-w-screen-xl mx-auto">
            <Navbar onChangePage={props.onChangePage}/>
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-3xl font-bold">{title}</h1>
                <div className="flex gap-2">
                    <span>{author}</span>
                    <span>{publishedDate}</span>
                    <span className="text-red-600">{category}</span>
                </div>
                <img src={imageUrl} className="w-full md:w-[1080px] md:h-[720px]"/>
                <p>
                    {summary}
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default NewsDetail;