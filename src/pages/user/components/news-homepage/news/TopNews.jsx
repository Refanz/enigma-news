import React, {Component} from 'react';

class TopNews extends Component {
    render() {
        return (
            <div className="card lg:card-side bg-base-100 w-full max-w-screen-xl">
                <figure className="text-start">
                    <img
                        className="rounded-xl w-96"
                        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                        alt="Album"/>
                </figure>
                <div className="card-body lg:w-1/2 w-full">
                    <div className="flex gap-2">
                        <span>Author</span>
                        <span>Senin, 11 November 2024</span>
                    </div>
                    <h2 className="card-title text-3xl">New album is released!</h2>
                    <p>Direktur Utama (Dirut) Garuda Indonesia Irfan Setiaputra memastikan perusahaan akan melakukan
                        pergantian jajaran direksi-komisaris pada Jumat (15/11) mendatang. Pergantian pimpinan ini
                        rencananya dilakukan melalui Rapat Umum Pemegang Saham Luar Biasa (RUPSLB).</p>
                    <span className="text-red-600 font-bold">Hiburan</span>
                </div>
            </div>
        );
    }
}

export default TopNews;