import React, {Component} from 'react';

import newsCategory from "../../../../data/newsCategory.js";
import News from "../../../../data/news.js";
import getCurrentDate from "../../../../utils/dateUtil.js";
import PropTypes from "prop-types";

class UpdateNews extends Component {

    constructor(props) {
        super(props);

        const {title, summary, imageUrl, category} = this.props.tempNews;

        this.state = {
            title: (title) ? title : "",
            summary: (summary) ? summary : "",
            imageUrl: (imageUrl) ? imageUrl : "",
            category: (category) ? category : ""
        }
    }

    handleChangeInput = (event) => {
        const {name, value} = event.target;

        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    handleUpdateNews = (event) => {
        event.preventDefault();

        const {title, summary, imageUrl, category} = this.state

        this.props.onUpdateNews(new News(this.props.tempNews.id, title, summary, getCurrentDate(), imageUrl, "Admin", category));

        this.resetForm();
    }

    resetForm() {
        this.setState(() => ({
            title: "",
            summary: "",
            imageUrl: "",
            category: ""
        }))
    }

    render() {
        const {title, summary, imageUrl, category} = this.state;

        return (
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">Update News</h1>
                <form className="flex flex-col gap-4" onSubmit={this.handleUpdateNews}>
                    <label className="form-control">
                        <div className="label">
                            <span className="text-lg font-bold">Title</span>
                        </div>
                        <input type="text" placeholder="Title" name="title" className="input input-bordered w-1/3"
                               onChange={this.handleChangeInput} value={title} required={true}/>
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="text-lg font-bold">Summary</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-48 w-1/3" name="summary"
                                  placeholder="Summary" onChange={this.handleChangeInput} value={summary}
                                  required={true}></textarea>
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="text-lg font-bold">Image</span>
                        </div>
                        <input type="text" placeholder="Image Url" name="imageUrl"
                               className="input input-bordered w-1/3"
                               onChange={this.handleChangeInput} value={imageUrl} required={true}/>
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="text-lg font-bold">Category</span>
                        </div>
                        <select className="select select-bordered w-1/3" name="category"
                                onChange={this.handleChangeInput} value={category} required={true}>
                            <option disabled selected value="">Pick one</option>
                            <option value={newsCategory.POLITIK}>{newsCategory.POLITIK}</option>
                            <option value={newsCategory.BENCANA_ALAM}>{newsCategory.BENCANA_ALAM}</option>
                            <option value={newsCategory.OLAHRAGA}>{newsCategory.OLAHRAGA}</option>
                            <option value={newsCategory.TEKNOLOGI}>{newsCategory.TEKNOLOGI}</option>
                            <option value={newsCategory.PENDIDIKAN}>{newsCategory.PENDIDIKAN}</option>
                            <option value={newsCategory.HIBURAN}>{newsCategory.HIBURAN}</option>
                        </select>
                    </label>
                    <div>
                        <button
                            className="bg-orange-600 p-3 text-white rounded-xl font-semibold hover:bg-orange-500">Update
                            News
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UpdateNews;

UpdateNews.propTypes = {
    onAddNews: PropTypes.func,
    onUpdateNews: PropTypes.func,
    tempNews: PropTypes.object
}