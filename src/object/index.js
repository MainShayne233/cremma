/**
 * Returns an array of objects, where each object describes a difference between the two objects
 * @param {object} object1 - First object to diff
 * @param {object} object2 - Second object to diff
 * @returns {array<object>}
 * @example
 * diff({name: 'john'}, {name: 'simon'})
 * //=> [ [key: 'name', firstValue: 'john', secondValue: 'simon'] ]
 */
export function diff(diffObject1, diffObject2) {
  let diffs = []
  const pairs = [ 
    [diffObject1, diffObject2], 
    [diffObject2, diffObject1],
  ]

  for (const pair of pairs) {
    const [ object1, object2 ] = pair
    const keys = Object.keys(object1)
    for (const key of keys) {
      const [value1, value2] = pair.map(object => object[key])
      if (value1 === null && value2 !== null)
        diffs.push( {key: key, firstValue: value1, secondValue: value2} )
      else if (value1.constructor === Array || value1.constructor === Object) {
        if (value1.constructor !== value2.constructor) {
          diffs.push( {key: key, firstValue: value1, secondValue: value2} )
          diffs = diffs.concat( [diff(value1, {})] )
        } else {
          const subDiff = diff(value1, value2)
          if (subDiff.length > 0) { 
            diffs.push( {key: key, firstValue: value1, secondValue: value2} )
            diffs = diffs.concat( subDiff )
          }
        }
      } else if (value1 !== value2) {
        keys.push( {key: key, firstValue: value1, secondValue: value2} )
      }
    }
  }

  return diffs
}

/**
 * Returns the value stored in the object where the nested keys point to
 * @params {object} object - Object with value to dig out
 * @params {array} - nestedKeys - Can be array or '.' delimited string
 * @example
 * dig({a: {b: {c: 'd'}}}, ['a', 'b', 'c'])
 * //=> 'd'
 * @example
 * dig({a: {b: {c: 'd'}}}, 'a.b.c')
 * //=> 'd'
 */
export function dig(object, nestedKeys) {
  const keys = (nestedKeys.constructor === Array) ? nestedKeys : nestedKeys.split('.')
  var value = object
  for (const key of keys) value = value[key]
  return value
}

/**
 * Returns true if objects are equivalent, false otherwise
 * Equivlanet means that every value at every level is equal in both objects
 * @params {object} object1 - First object
 * @params {object} object2 - Second object
 * @returns {boolean}
 * @example
 * equivalent({hi: {how: 'are you'}}, {hi: {how: 'are you'}})
 * //=> true
 * @example
 * equivalent({hi: {how: 'are you'}}, {hi: {how: 'art thou?'}})
 * //=> false
 */ 
export function equivalent(object1, object2) {
  if (object1 === undefined) return object2 === undefined
  if (object1 === null) return object2 === null
  const [constructor1, constructor2] = [object1, object2].map(object => object.constructor)
  if (constructor1 !== constructor2) return false
  if (constructor1 === Object || constructor1 === Array) {
    const [keys1, keys2] = [object1, object2].map(Object.keys)
    if (keys1.length !== keys2.length) return false
    for (const key of keys1)
      if (!equivalent(object1[key], object2[key])) return false
    return true
  } else
    return object1 === object2
}

/**
 * Returns an object of the elements grouped by the function
 * @params {array} elements - the elements to be grouped
 * @params {function} fun - the function who's return value will be the key in the return object
 * @returns {object}
 * @example
 * groupBy([1, 1, 2, 3, 5, 8, 11], (val) => val % 2 ? 'odd' : 'even' )
 * //=> {odd: [1, 1, 3, 5, 11], even: [2, 8]}
 */
export function groupBy(elements, fun) {
  let grouping = {}
  for (const element of elements) {
    const value = fun(element)
    grouping[value] = (grouping[value] || []).concat([element])
  }
  return grouping
}

/**
 * Merges two objects into one new object
 * object2 will overwrite matching keys in object1
 * @params {object} object1 - First Object
 * @params {object} object2 - Second Object
 * @returns {object}
 * @example
 * merge({woah: 'we', seeya: 'soon'}, {done: 'merged', seeya: 'later'})
 * //=> {woah: 'we', done: 'merged', seeya: 'later'}
 */
export function merge(object1, object2) {
  let newObject = {}
  for ( const key of Object.keys(object1) ) newObject[key] = object1[key]
  for ( const key of Object.keys(object2) ) newObject[key] = object2[key]
  return newObject
}

/**
 * Returns the object as an array
 * @params {object} object - Object with numbers as keys
 * returns {array}
 * @example
 * numberKeyedObjectToArray({1: 'one', 2: 'two'})
 * //=> [ undefined, 'one', 'two' ]
 */
export function numberKeyedObjectToArray(object) {
  let array = []
  for (const key of Object.keys(object)) array[key] = object[key]
  return array
}
