/**
 * Returns true if value is NaN, false otherwise (undefined !== NaN)
 * @returns {boolean}
 * @example
 * isNaN(NaN)
 * //=> true
 * @example
 * isNaN(undefined)
 * //=> false
 */
export function isNaN(value) {
  if (value === null || value === undefined) return false
  return value.constructor === Number &&
         value !== 0                  &&
         !(0 < Math.abs(value))
}
