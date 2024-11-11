import {Component} from 'react';
import PropTypes from 'prop-types';
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline/index.js";

class Header extends Component {
    render() {
        return (
            <div className="flex h-20 px-5 justify-between w-full items-center bg-white">
                <label className="input input-bordered bg-gray-200 flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search"/>
                    <MagnifyingGlassIcon className="size-5"/>
                </label>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                    </div>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    onToggle: PropTypes.func
};

export default Header;
