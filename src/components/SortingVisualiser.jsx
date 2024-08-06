import React, { useState, useEffect, useCallback } from 'react';
import './SortingVisualizer.css';
import { bubbleSort } from '../algortihms/bubblesort';
import { selectionSort } from '../algortihms/selectionsort';
import { insertionSort } from '../algortihms/insertionsort';
import { mergeSort } from "../algortihms/mergesort";
import { quickSort } from "../algortihms/quicksort"
import { countingSort } from '../algortihms/countingsort';


const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const speed = 50;

  const resetArray = useCallback(() => {
    const newArray = [];
    for (let i = 0; i < 30; i++) {
      newArray.push(randomIntFromInterval(5, 500));
    }
    setArray(newArray);
  }, []);

  useEffect(() => {
    resetArray(); // Call resetArray in useEffect
  }, [resetArray]);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleBubbleSort = async () => {
    setIsSorting(true);
    await bubbleSort(array, setArray, speed);
    setIsSorting(false);
  };

  const handleSelectionSort = async () => {
    setIsSorting(true);
    await selectionSort(array, setArray, speed);
    setIsSorting(false);
  };

  const handleInsertionSort = async () => {
    setIsSorting(true);
    await insertionSort(array, setArray, speed);
    setIsSorting(false);
  };

  const handleMergeSort = async () => {
    setIsSorting(true);
    await mergeSort(array, setArray, speed);
    setIsSorting(false);
  };

  const handleQuickSort = async () => {
    setIsSorting(true);
    await quickSort(array, setArray, speed);
    setIsSorting(false);
  };

  const handleCountingSort = async () => {
    setIsSorting(true);
    await countingSort(array, setArray, speed);
    setIsSorting(false);
  };

  return (

    <div className='sorting-div'>
      <div class="parent-sorting-div">
        <div class="div1-sorting-div">
          <div className="array-container">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{ height: `${value}px` }}
              ></div>
            ))}
          </div>
        </div>
        <div class="div2-sorting-div">
          <button className='div-button-sorting' onClick={resetArray} disabled={isSorting}>Generate New Array</button>
          <button className='div-button-sorting' onClick={handleBubbleSort} disabled={isSorting}>Bubble Sort</button>
          <button className='div-button-sorting' onClick={handleSelectionSort} disabled={isSorting}>Selection Sort</button>
          <button className='div-button-sorting' onClick={handleInsertionSort} disabled={isSorting}>Insertion Sort</button>
          <button className='div-button-sorting' onClick={handleMergeSort} disabled={isSorting}>Merge Sort</button>
          <button className='div-button-sorting' onClick={handleQuickSort} disabled={isSorting}>Quick Sort</button>
          <button className='div-button-sorting' onClick={handleCountingSort} disabled={isSorting}>Counting Sort</button>
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizer;
