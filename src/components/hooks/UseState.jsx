import React, { useState } from 'react';

export default function UseState() {
    const [myName, setMyName] = useState('Saurav');

    const changeState = () => {
        setMyName((prevName) => (prevName === 'Saurav' ? 'Jenisha' : 'Saurav'));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4 text-blue-600">{myName}</h1>
            <button
                onClick={changeState}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
            >
                Click Here!!!
            </button>
        </div>
    );
}