const object = require('../object')

/**
 * Returns the array with the element at the specified index dropped
 * @param {array} array - the array to have the element dropped from 
 * @params {number} index - the index of the element to be droppped
 * @returns {array}
 * @example
 * dropAtIndex([1, 2, 3], 1)
 * //=> [1, 3]
 */
export function dropAtIndex(array, index) {
  if (array.length <= index) return array
  if (array.length === 1)    return (index === 0) ? [] : array
  if (index === 0)           return array.slice(1, array.length)

  return array.slice(0, index).concat( array.slice(index + 1, array.length) )
}

/**
 * Returns true if the arrays are equivalent, false otherwise (alias for object.equivalent)
 * @param {array} array1 - The first array to to be compared
 * @param {array} array2 - The second array to to be compared
 * @return {boolean}
 * @example
 * equivalent([], [])
 * //=> true
 * @example
 * equivalent([ [1] ], [ [2] ])
 * //=> false
 */
export function equivalent(array1, array2) {
  return object.equivalent(array1, array2)
}

/**
 * Returns the last element in an array
 * @param {array} array - The array to get the last value from
 * @example
 * last([1,2,3])
 * //=> 3
 * @example
 * last([])
 * //=> undefined 
 */
export function last(array) {
  return array[ array.length - 1 ]
}

/**
 * Sort function that uses boolean return values from the sort function to determine sorting
 * Default sorting function is (x, y) => x < y
 * @param {array} array - The array to be sorted
 * @param {func} sortFunc - The sorting function that returns a truthy value
 * @example
 * sort([5,6,3,4,8,2,9,5], (x, y) => y < x)
 * //=> [9, 8, 6, 5, 5, 4, 3, 2]
 * @example
 * sort(['woah', 'but', 'strings', 'are', 'arrays', 'already', 'woah'])
 * //=> ['already', 'are', 'arrays', 'but', 'strings', 'woah', 'woah']
 */
export function sort(array, sortFunc = (x, y) => x < y) {
  return array.sort((x, y) => {
    return sortFunc(x, y) ? -1 : 1
  })
}
