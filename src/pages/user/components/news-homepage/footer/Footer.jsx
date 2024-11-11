import React from 'react';

function Footer() {
    return (
        <div className="w-full max-w-screen-xl flex justify-between gap-4 flex-wrap md:flex-nowrap">
            <div className="flex flex-col gap-2">
                <h1 className="text-xl text-red-600 font-bold">EnigmaNews</h1>
                <p>Craft narratives that ignite inspirition, knowledge, and entertainment</p>
            </div>
            <div className="flex flex-col text-sm gap-2">
                <h1 className="text-xl font-bold">Business</h1>
                <p>Startup</p>
                <p>Employee</p>
                <p>Success</p>
                <p>Videos</p>
                <p>Markets</p>
            </div>

            <div className="flex flex-col text-sm gap-2">
                <h1 className="text-xl font-bold">Technology</h1>
                <p>Startup</p>
                <p>Employee</p>
                <p>Success</p>
                <p>Videos</p>
                <p>Markets</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
                <h1 className="text-xl font-bold">Travel</h1>
                <p>Startup</p>
                <p>Employee</p>
                <p>Success</p>
                <p>Videos</p>
                <p>Markets</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
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