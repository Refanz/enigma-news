import NewsHomePage from "./pages/user/NewsHomePage.jsx";
import LoginPage from "./pages/admin/LoginPage.jsx";
import toast, {Toaster} from "react-hot-toast";
import {Component} from "react";
import DashboardPage from "./pages/admin/DashboardPage.jsx";
import showDeleteConfirm from "./utils/alertUtils.js";
import {saveNews} from "./data/data.js";
import {getNews} from "./data/news.js";
import NewsDetail from "./pages/user/NewsDetail.jsx";

class App extends Component {

    state = {
        news: [
            ...getNews()
        ],
        tempNews: null,
        page: "home"
    }

    handleChangePage = (page, news) => {
        this.setState((prevState) => ({
            ...prevState,
            page: page,
            tempNews: news
        }));
    }

    handleAddNews = (news) => {
        this.setState((prevState) => ({
            news: [
                ...prevState.news,
                news
            ]
        }), () => {
            toast.success("Success add news");
            saveNews(this.state.news);
        })
    }

    handleUpdateNews = (updatedNews) => {
        const newNews = this.state.news.map((news) => {
            if (news.id === updatedNews.id) {
                news.title = updatedNews.title;
                news.summary = updatedNews.summary;
                news.publishedDate = updatedNews.publishedDate;
                news.imageUrl = updatedNews.imageUrl;
                news.author = updatedNews.author
                news.category = updatedNews.category
            }

            return news;
        });

        this.setState(() => ({
            news: [
                ...newNews
            ]
        }), () => {
            toast.success("Success update news")
        });
    }

    handleDeleteNews = (id) => {
        const currentNews = this.state.news.filter((news) => {
            if (news.id !== id) return news;
        });

        showDeleteConfirm(() => {
            this.setState(() => ({
                news: [
                    ...currentNews
                ]
            }));
        })
    }

    render() {
        return (
            <>
                {this.state.page === "home" &&
                    <NewsHomePage news={this.state.news} onChangePage={this.handleChangePage}/>}
                {this.state.page === "login" && <LoginPage onChangePage={this.handleChangePage}/>}
                {this.state.page === "dashboard" &&
                    <DashboardPage news={this.state.news}
                                   onAddNews={this.handleAddNews}
                                   onDeleteNews={this.handleDeleteNews}
                                   onUpdateNews={this.handleUpdateNews}/>}
                {this.state.page === "detail" && <NewsDetail news={this.state.tempNews}/>}
                <Toaster/>
            </>
        )
    }
}

export default App
