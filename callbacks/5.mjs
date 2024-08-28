import { forEach } from './4.mjs'
function mapWith(array, callback) {
  forEach(array, callback)
}
mapWith([1, 2, 3, 4, 5], (a) => console.log(a))
