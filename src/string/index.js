/**
 * Returns true if string is a valid number, false otherwise.
 * @params {string} string - String to check if number
 * @returns {boolean}
 * @example
 * isNumberString('123')
 * //=> true
 * @example
 * isNumberString('w0ah')
 * //=> false
 */
export function isNumberString(string) {
  const trimmedString = string.trim()
  return Math.abs( parseInt( trimmedString  ) ) >= 0 || trimmedString === 'NaN'
}
