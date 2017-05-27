/*
 * return true if two functions are equivalent, false otherwise
 * works with arrays
 * params: (Object, Object)
 * return: Boolean
*/
export function equivalent(object1, object2) {
  if (object1 === null && object2 === null) return true
  if (object1 === null || object2 === null) return false
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
