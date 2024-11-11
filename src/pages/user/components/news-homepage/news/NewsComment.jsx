import React, {Component} from 'react';

class NewsComment extends Component {

    state = {
        comment: "",
        comments: []
    }

    handleChangeComment = (event) => {
        this.setState((prevState) => ({
            ...prevState,
            comment: event.target.value
        }));
    }

    handleSubmitComment = (event) => {
        event.preventDefault();

        this.setState((prevState) => ({
            comments: [
                ...prevState.comments,
                this.state.comment
            ]
        }));
    }

    render() {
        return (
            <div className="flex flex-col gap-4">
                <h1 className="text-xl font-bold">Komentar</h1>

                <form className="flex flex-col gap-4" onSubmit={this.handleSubmitComment}>
                    <input type="text" placeholder="Type comment..." value={this.state.comment}
                           onChange={this.handleChangeComment}
                           className="input input-bordered w-full max-w-screen-xl"/>
                    <button className="btn w-fit
                     btn-error text-white">Submit
                    </button>
                </form>

                <div className="flex flex-col gap-4 bg-gray-50 p-4 rounded-xl">
                    {
                        this.state.comments.map((comment, index) => {
                            return (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                                        </div>
                                    </div>
                                    <span>{comment}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default NewsComment;