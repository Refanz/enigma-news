import React, {Component} from 'react';

class NewsItemOverlay extends Component {
    render() {
        return (
            <div className="card bg-base-100 image-full">
                <figure className="h-96">
                    <img
                        className="w-full"
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"/>
                </figure>
                <div className="card-body w-full justify-end">
                    <div className="flex flex-col md:gap-3 gap-1 text-sm">
                        <div className="flex gap-2">
                            <span>Author</span>
                            <span>Senin, 11 November 2024</span>
                        </div>
                        <h1 className="text-lg font-bold">Shoes</h1>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <span>Technology</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItemOverlay;