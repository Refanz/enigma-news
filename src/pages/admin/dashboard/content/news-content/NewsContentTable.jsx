import React, {Component} from 'react';
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline/index.js";
import PropTypes from "prop-types";

class NewsContentTable extends Component {
    render() {
        return (
            <>
                <table className="table">
                    <thead className="bg-gray-100 text-black uppercase text-sm">
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox"/>
                            </label>
                        </th>
                        <th>Title</th>
                        <th>Summary</th>
                        <th>Published Date</th>
                        <th>Image</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.news.map((news) => {
                            return (
                                <tr key={news.id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox"/>
                                        </label>
                                    </th>
                                    <td>
                                        {news.title}
                                    </td>
                                    <td>
                                        <p className="text-ellipsis">{news.summary}</p>
                                    </td>
                                    <td>
                                        {news.publishedDate}
                                    </td>
                                    <td>
                                        <img alt="" src={news.imageUrl} className="w-64"/>
                                    </td>
                                    <td>
                                        {news.author}
                                    </td>
                                    <td>
                                        {news.category}
                                    </td>
                                    <td>
                                        <div className="flex gap-1">
                                            <TrashIcon className="size-6 text-orange-500 cursor-pointer"
                                                       onClick={() => this.props.onDeleteNews(news.id)}/>
                                            <PencilSquareIcon className="size-6 text-blue-500 cursor-pointer"/>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <div className="flex justify-between mt-5">
                    <div className="flex gap-2 items-center">
                        <span className="text-sm">Items per page</span>
                        <select className="select select-bordered w-fit">
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                        </select>
                    </div>

                    <div className="join">
                        <button className="join-item btn">1</button>
                        <button className="join-item btn btn-active">2</button>
                        <button className="join-item btn">3</button>
                        <button className="join-item btn">4</button>
                    </div>
                </div>
            </>
        );
    }
}

export default NewsContentTable;

NewsContentTable.propTypes = {
    news: PropTypes.array
}