export const insertionSort = async (array, setArray, speed) => {
   let len = array.length;
   for (let i = 1; i < len; i++) {
     let key = array[i];
     let j = i - 1;
     while (j >= 0 && array[j] > key) {
       array[j + 1] = array[j];
       j = j - 1;
       setArray([...array]);
       await new Promise((resolve) =>
         setTimeout(() => {
           resolve();
         }, speed)
       );
     }
     array[j + 1] = key;
     setArray([...array]);
   }
 };
 