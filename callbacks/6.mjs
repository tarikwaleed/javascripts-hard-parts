export function reduce(array, reducer, initialValue) {
  let x = initialValue
  array.forEach(element => {
    x = reducer(x, element)
  });
  return x
}
const nums = [4, 1, 3];
const initialValue = 0
const sumReducer = function(accumulator, current) { return accumulator + current; }
reduce(nums, sumReducer, initialValue);   //-> 8
const sum = reduce(nums, sumReducer, initialValue)
console.log(sum)
