import React from 'react'
import { RxCross2 } from "react-icons/rx";

const RulesCard = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-1 py-1 text-2xl rounded-lg cursor-pointer hover:scale-101 transition duration-200"
              onClick={onClose}
            >
              <RxCross2 />
            </button>

            

            <h2 className="text-2xl font-bold mb-4">How To Play</h2>
            <p className="mb-2">Guess the Wordle in 6 tries.</p> 
            <ul className="list-disc list-inside text-gray-600">
              <li>Each guess must be a valid 5-letter word.</li>
              <li>The color of the tiles will change based on accuracy.</li>
            </ul>

            {/* Examples */}
        <h3 className="mt-2 text-lg font-semibold text-gray-600">Examples</h3>
        <div className="mt-3 space-y-3">
          {/* Example 1 */}
          <div className="flex items-center space-x-2 text-white">
            <span className="bg-green-500 text-black font-bold px-2 py-1 rounded flex justify-center item-center">W</span>
            <span className="bg-gray-700 px-2 py-1 rounded w-[30px] h-[30px] flex justify-center item-center">O</span>
            <span className="bg-gray-700 px-2 py-1 rounded w-[30px] h-[30px] flex justify-center item-center">R</span>
            <span className="bg-gray-700 px-2 py-1 rounded w-[30px] h-[30px] flex justify-center item-center">D</span>
            <span className="bg-gray-700 px-2 py-1 rounded w-[30px] h-[30px] flex justify-center item-center">Y</span>
          </div>
          <p className="text-gray-600 text-sm">W is in the word and in the correct spot.</p>

          {/* Example 2 */}
          <div className="flex items-center space-x-2 text-white">
            <span className="bg-gray-700 px-2 py-1 rounded w-[30px] h-[30px] flex justify-center item-center">L</span>
            <span className="bg-yellow-500 text-black font-bold px-2 py-1 rounded w-[30px] h-[30px] flex justify-center item-center">I</span>
            <span className="bg-gray-700 px-2 py-1 rounded w-[30px] h-[30px] flex justify-center item-center">G</span>
            <span className="bg-gray-700 px-2 py-1 rounded w-[30px] h-[30px] flex justify-center item-center">H</span>
            <span className="bg-gray-700 px-2 py-1 rounded w-[30px] h-[30px] flex justify-center item-center">T</span>
          </div>
          <p className="text-gray-600 text-sm">I is in the word but in the wrong spot.</p>

          {/* Example 3 */}
          <div className="flex items-center space-x-2 text-white">
            <span className="bg-gray-700 px-2 py-1 rounded w-[30px] h-[30px] flex justify-center item-center">R</span>
            <span className="bg-gray-700 px-2 py-1 rounded w-[30px] h-[30px] flex justify-center item-center">O</span>
            <span className="bg-gray-700 px-2 py-1 rounded w-[30px] h-[30px] flex justify-center item-center">G</span>
            <span className="bg-gray-700 px-2 py-1 rounded w-[30px] h-[30px] flex justify-center item-center">U</span>
            <span className="bg-gray-700 px-2 py-1 rounded w-[30px] h-[30px] flex justify-center item-center">E</span>
          </div>
          <p className="text-gray-600 text-sm">U is not in the word in any spot.</p>
          </div>
        </div>
        </div>
  )
}

export default RulesCard
