import React, { useState, useEffect } from 'react';
import './Grid.css';
import { bfs, dfs } from '../../algortihms/bfs_dfs';

const numRows = 10;
const numCols = 10;
const speed = 100;

const createGrid = () => {
  const grid = [];
  for (let row = 0; row < numRows; row++) {
    const currentRow = [];
    for (let col = 0; col < numCols; col++) {
      currentRow.push('');
    }
    grid.push(currentRow);
  }
  return grid;
};

const Grid = () => {
  const [grid, setGrid] = useState(createGrid());

  useEffect(() => {
    setGrid(createGrid());
  }, []);

  const handleBFS = async () => {
    await bfs(grid, { row: 0, col: 0 }, setGrid, speed);
  };

  const handleDFS = async () => {
    await dfs(grid, { row: 0, col: 0 }, setGrid, speed);
  };

  return (
    <div className="grid-container">
      <div className="button-container">
        <button onClick={handleBFS}>Start BFS</button>
        <button onClick={handleDFS}>Start DFS</button>
      </div>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`grid-cell ${cell === 'visited' ? 'visited' : ''}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
