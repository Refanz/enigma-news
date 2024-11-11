import React, {Component} from 'react';
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline/index.js";

class NewsSearch extends Component {
    render() {
        return (
            <label className="input input-bordered bg-white w-fit flex items-center gap-2 rounded-xl">
                <input type="text" className="grow" placeholder="Search news.."/>
                <MagnifyingGlassIcon className="size-5"/>
            </label>
        );
    }
}

export default NewsSearch;