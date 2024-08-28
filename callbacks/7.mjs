function myReduce(array, reducer, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    // accumulator = reducer(accumulator, array[i], i, array);
    accumulator = reducer(accumulator, array[i]);
  }

  return accumulator;
}

function intersectionReducer(accumulator, current) {
  return current.filter(e => accumulator.includes(e))
}
function unionReducer(accumulator, current) {
  return accumulator.concat(current.filter(e=>!accumulator.includes(e)))
  
}

export function intersection(arrays) {
  // return arrays.reduce(intersectionReducer, arrays[0])
  return myReduce(arrays,intersectionReducer, arrays[0])
}
export function union(arrays) {
  // return arrays.reduce(intersectionReducer, arrays[0])
  return myReduce(arrays,unionReducer, arrays[0])
}

// let a = intersection([[1, 2, 3, 4], [3, 4, 5], [1, 2, 3]])
// let a=intersectionReducer([1,2,3],[1,2,3])

console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));


