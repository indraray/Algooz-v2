// algorithms.js
export const bfs = async (grid, startNode, setGrid, speed) => {
   const rows = grid.length;
   const cols = grid[0].length;
   const queue = [startNode];
   const visited = new Set();
   visited.add(`${startNode.row}-${startNode.col}`);
 
   while (queue.length > 0) {
     const { row, col } = queue.shift();
     const directions = [
       [0, 1], [1, 0], [0, -1], [-1, 0]
     ];
 
     for (let [dx, dy] of directions) {
       const newRow = row + dx;
       const newCol = col + dy;
       if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && !visited.has(`${newRow}-${newCol}`)) {
         visited.add(`${newRow}-${newCol}`);
         queue.push({ row: newRow, col: newCol });
         grid[newRow][newCol] = 'visited';
         setGrid([...grid]);
         await new Promise(resolve => setTimeout(resolve, speed));
       }
     }
   }
 };
 
 export const dfs = async (grid, startNode, setGrid, speed) => {
   const rows = grid.length;
   const cols = grid[0].length;
   const stack = [startNode];
   const visited = new Set();
   visited.add(`${startNode.row}-${startNode.col}`);
 
   while (stack.length > 0) {
     const { row, col } = stack.pop();
     const directions = [
       [0, 1], [1, 0], [0, -1], [-1, 0]
     ];
 
     for (let [dx, dy] of directions) {
       const newRow = row + dx;
       const newCol = col + dy;
       if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && !visited.has(`${newRow}-${newCol}`)) {
         visited.add(`${newRow}-${newCol}`);
         stack.push({ row: newRow, col: newCol });
         grid[newRow][newCol] = 'visited';
         setGrid([...grid]);
         await new Promise(resolve => setTimeout(resolve, speed));
       }
     }
   }
 };
 