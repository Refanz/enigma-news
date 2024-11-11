import React from 'react';

function Hero() {
    return (
        <div className="max-w-screen-xl w-full bg-gray-200 text-center px-4 py-7 rounded-xl">
            <h1 className="text-sm font-semibold spacing text-gray-500">WELCOME TO ENIGMA NEWS</h1>
            <div className="mt-2">
                <p className="text-2xl font-bold">Craft narratives that ignite <span
                    className="text-red-600">inspiration</span></p>
                <p className="text-2xl font-bold"><span className="text-red-600">knowledge</span>,
                    and <span className="text-red-600">entertainment</span></p>
            </div>
        </div>
    );
}

export default Hero;