let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24, 26, 27, 29]

const binarySearch = function(arr, start, end, key) {
    let mid = Math.floor(start + (end - start) / 2);

    if (key === arr[mid]) {
        return mid
    } else if (key < arr[mid]) {
        return binarySearch (arr, start, (mid - 1), key)
    } else if (key > arr[mid]) {
        return binarySearch(arr, (mid + 1), end, key)
    }
};


console.log(binarySearch(testArray, 0, (testArray.length - 1), 12));

// ------------------------------------------------------------------------------

// let binarySearch = function(arr, target, min, max) {
// 	let testArray = arr.slice();
// 	if (min === undefined) min = 0;
// 	if (max === undefined) max = arr.length - 1;

// 	let middle = Math.floor(((max - min) / 2) + min);
// 	if (max <= min && testArray[middle] !== target) return null;
// 	else if (testArray[middle] === target) return middle;
// 	else if (testArray[middle] < target) return binarySearch(testArray, target, middle + 1, max);
// 	else return binarySearch(testArray, target, min, middle - 1);
// };

// ------------------------------------------------------------------------------

//     if(start > end) {
//         return - 1};

//     let mid = Math.floor((start - end) / 2);

//     if(testArray[mid] === key) { 
//         return mid};
//     if(key > testArray[mid]) {
//         return binarySearch(testArray, mid + 1, end, key);
//     } else if(key < testArray[mid]) {
//         return binarySearch(testArray, start, mid - 1, key);
//     }
// };

// ------------------------------------------------------------------------------

// binarySearch = (arr,val,left=0,right=arr.length) => {

//     position = (left,right) => {
//       let pos = (left + right)/2
//       return Math.floor(pos)
//     }
  
//     let i = position(left,right)
  
//     if (arr[i] === val) {
//       return i
//     }
//     // Base Case: if left and midpoint index coincide then there are no more possible solutions
//     else if (i === left) {
//       return -1
//     }
//     // For this case we shift the left index pointer
//     else if (arr[i] < val) {
//       return binarySearch(arr,val,i,right)
//     }
//     // For this case we shift the right index pointer
//     else if (arr[i] > val) {
//       return binarySearch(arr,val,left,i)
//     }
  
//   }


// ------------------------------------------------------------------------------


// const binarySearch = function(arr, target) {
//         let first = 0;
//         let last = arr.length - 1;       
//         let position = -1;
//         let found = false;    
//         let middle;     
//         while (found === false && first <= last) {        
//             middle = Math.floor((first + last)/2);        
//             if (arr[middle] == target) {            
//                 found = true;            
//                 position = middle;        
//             } else if (arr[middle] > target) {              
//                 last = middle - 1;        
//             } else {              
//                 first = middle + 1;        
//             }    
//         }    
//         return position;
//     }
    
 
