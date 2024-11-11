import React, {Component} from 'react';
import NewsContentTable from "./news-content/NewsContentTable.jsx";
import NewsSearch from "./news-content/NewsSearch.jsx";

class NewsContent extends Component {
    render() {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold">News</h1>
                    <button
                        className="bg-orange-600 py-3 px-4 text-white rounded-xl font-semibold hover:bg-orange-600/80"
                        onClick={() => this.props.onChangeSidebarMenu("CreateNews")}
                    >Create
                        News
                    </button>
                </div>
                <div>
                    <NewsSearch/>
                </div>
                <div className="overflow-x-auto bg-white rounded-3xl p-4">
                    <NewsContentTable news={this.props.news}
                                      onDeleteNews={this.props.onDeleteNews}
                                      onUpdateNews={this.props.onUpdateNews}
                                      onChangeSidebarMenu={this.props.onChangeSidebarMenu}/>
                </div>
            </div>
        );
    }
}

export default NewsContent;