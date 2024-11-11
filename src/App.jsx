import NewsHomePage from "./pages/user/NewsHomePage.jsx";
import LoginPage from "./pages/admin/LoginPage.jsx";
import toast, {Toaster} from "react-hot-toast";
import {Component} from "react";
import DashboardPage from "./pages/admin/DashboardPage.jsx";
import {saveNews} from "./data/data.js";
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
                    <DashboardPage news={this.state.news} onAddNews={this.handleAddNews}
                                   onDeleteNews={this.handleDeleteNews}/>}
                <Toaster/>
            </>
        )
    }
}

export default App
