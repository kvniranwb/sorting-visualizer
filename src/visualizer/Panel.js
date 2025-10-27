import React from 'react'

function Control({ handleNewArrayGenrate, setSpeed, isSorting, handleSorting, reSet, selectedSorting }) {
    return (
        <div className='controls-container'>
            <button className='neu-button' onClick={handleNewArrayGenrate}>Generate New Array</button>
            <button className="neu-button" onClick={reSet} >
                Reset
            </button>
            <select className='neumorphism-dropdown' value={selectedSorting} onChange={handleSorting}>
                <option value=''>Select Sorting</option>
                <option value='bubbleSort'>Bubble Sorting</option>
                <option value="mergeSort">Merge Sort</option>
                <option value="selectionSort">SelectionSort Sort</option>
            </select>
            <label>
                Speed:
                <input
                    type="range"
                    min="10"
                    max="200"
                    className="speedControl"
                    onChange={(e) => setSpeed(200 - e.target.value)}
                    disabled={isSorting}
                />
            </label>
        </div>
    )
}

export default Control