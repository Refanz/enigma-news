import NewsHomePage from "./pages/user/NewsHomePage.jsx";
import LoginPage from "./pages/admin/LoginPage.jsx";
import toast, {Toaster} from "react-hot-toast";
import {Component} from "react";
import DashboardPage from "./pages/admin/DashboardPage.jsx";
import showDeleteConfirm from "./utils/alertUtils.js";

class App extends Component {

    state = {
        news: [],
        page: "dashboard"
    }

    handleChangePage = (page) => {
        this.setState((prevState) => ({
            ...prevState,
            page: page
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
                {this.state.page === "home" && <NewsHomePage onChangePage={this.handleChangePage}/>}
                {this.state.page === "login" && <LoginPage/>}
                {this.state.page === "dashboard" &&
                    <DashboardPage news={this.state.news}
                                   onAddNews={this.handleAddNews}
                                   onDeleteNews={this.handleDeleteNews}
                                   onUpdateNews={this.handleUpdateNews}/>}
                <Toaster/>
            </>
        )
    }
}

export default App
