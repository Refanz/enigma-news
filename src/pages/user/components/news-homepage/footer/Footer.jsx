import React from 'react';
import "boxicons";

function Footer(props) {
    return (
        <div className="w-full max-w-screen-xl flex justify-between gap-4 flex-wrap md:flex-nowrap">
            <div className="flex flex-col gap-2">
                <h1 className="text-xl text-red-600 font-bold">EnigmaNews</h1>
                <p>Craft narratives that ignite inspirition, knowledge, and entertainment</p>
                <div className="flex gap-4">
                    <box-icon type='logo' name='facebook' color="red"></box-icon>
                    <box-icon name='linkedin' type='logo' color="red"></box-icon>
                    <box-icon name='twitter' type='logo' color="red"></box-icon>
                    <box-icon name='instagram' type='logo' color="red"></box-icon>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">Business</h1>
                <p>Startup</p>
                <p>Employee</p>
                <p>Success</p>
                <p>Videos</p>
                <p>Markets</p>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">Technology</h1>
                <p>Startup</p>
                <p>Employee</p>
                <p>Success</p>
                <p>Videos</p>
                <p>Markets</p>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">Travel</h1>
                <p>Startup</p>
                <p>Employee</p>
                <p>Success</p>
                <p>Videos</p>
                <p>Markets</p>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">Sports</h1>
                <p>Startup</p>
                <p>Employee</p>
                <p>Success</p>
                <p>Videos</p>
                <p>Markets</p>
            </div>
        </div>
    );
}

export default Footer;