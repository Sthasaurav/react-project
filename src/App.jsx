import React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div className="bg-black text-white min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">My Hacker Stories</h1>

        <label htmlFor="search" className="block mb-4">
          Search:
        </label>
        <input id="search" type="text" className="form-input bg-gray-800 text-white w-full rounded-md py-2 px-4 mb-4" />

        <hr className="border-gray-600 mb-4" />

        <ul>
          {list.map(function (item) {
            return (
              <li key={item.objectID} className="mb-4">
                <span className="text-lg font-bold">
                  <a href={item.url} className="text-blue-400 hover:underline">
                    {item.title}
                  </a>
                </span>
                <span className="block text-sm text-gray-400">{item.author}</span>
                <span className="block text-sm text-gray-400">Comments: {item.num_comments}</span>
                <span className="block text-sm text-gray-400">Points: {item.points}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
