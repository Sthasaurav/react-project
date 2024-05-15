import React, { useState } from 'react';
import data from "./data";
import Navbar from "./Navbar";
import SignInPage from "./Signin";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const [isSignInPageOpen, setIsSignInPageOpen] = useState(false);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  }

  const handleSignInButtonClick = () => {
    setIsSignInPageOpen(true);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar onSignInButtonClick={handleSignInButtonClick} />
      <div className="flex justify-center py-8">
        <div className="flex flex-col items-center">
          <button
            onClick={() => setEnableMultiSelection(!enableMultiSelection)}
            className="mb-4 px-4 py-2 rounded bg-blue-500 text-white"
          >
            {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
          </button>
          <div className="w-full max-w-xl">
            {data && data.length > 0 ? (
              data.map((dataItem) => (
                <div key={dataItem.id} className="border border-gray-200 rounded mb-4 bg-gray-900">
                  <div
                    onClick={
                      enableMultiSelection
                        ? () => handleMultiSelection(dataItem.id)
                        : () => handleSingleSelection(dataItem.id)
                    }
                    className={`p-4 flex justify-between items-center cursor-pointer ${selected === dataItem.id || (enableMultiSelection && multiple.indexOf(dataItem.id) !== -1) ? 'bg-gray-700' : 'bg-gray-900'}`}
                  >
                    <h3>{dataItem.question}</h3>
                    <span className="text-xl">{selected === dataItem.id || (enableMultiSelection && multiple.indexOf(dataItem.id) !== -1) ? '-' : '+'}</span>
                  </div>
                  {(selected === dataItem.id || (enableMultiSelection && multiple.indexOf(dataItem.id) !== -1)) && (
                    <div className="p-4 bg-gray-800">
                      {dataItem.answer}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div>No data found!</div>
            )}
          </div>
        </div>
      </div>
      {isSignInPageOpen && <SignInPage onClose={() => setIsSignInPageOpen(false)} />}
    </div>
  );
}

export default Accordion;
