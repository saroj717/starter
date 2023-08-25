/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/
function flatten(arr) {
  // Initialize an empty array to store the flattened elements.
  const flattened = [];

  // Iterate through each element in the input array.
  for (const element of arr) {
    // If the element is an array, recursively call flatten and concatenate the result.
    if (Array.isArray(element)) {
      flattened.push(...flatten(element));
    } else {
      // If the element is not an array, simply push it to the flattened array.
      flattened.push(element);
    }
  }

  return flattened;
}



// function flatten(arr) {
//   let flattened = [];
//   for(let ele of arr) {
//     if(Array.isArray(ele)) {
//       flattened.push(...ele);
//     } else {
//       flattened.push(ele);
//     }
//   }
//   return flattened;
// }
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
