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
  const { constructor } = string
  if (constructor !== String && constructor !== Number) return false
  const trimmedString = `${string}`.trim()
  return Math.abs( parseInt( trimmedString  ) ) >= 0 || trimmedString === 'NaN'
}

/**
 * Returns the string with upcased words and space delimited
 * @params {string} string - The string to be titleized
 * @returns {string}
 * @example
 * titleize('super_duper_snake_case')
 * //=> 'Super Duper Snake Case'
 * @example
 * titleize('crazyCamelCase')
 * //=> 'Crazy Camel Case'
 * @example
 * titleize('normal spaces and stuff')
 * //=> 'Normal Spaces And Stuff'
 */
export function titleize(string) {
  return string.split('_').join(' ')
               .split(/(?=[A-Z])/).join(' ')
               .split(' ').map(titleizeWord).join(' ')
}



/**
 * Returns the string all lowercase with the first character upcased
 * @params {string} word - The word to upcase
 * @returns {string}
 * @example
 * titleizeWord('woah')
 * //=> 'Woah'
 * @example
 * titleizeWord('WOAH')
 * //=> 'Woah'
 */
export function titleizeWord(word) {
  const firstLetter = word[0]
  const rest        = word.slice(1, word.length)
  return firstLetter.toUpperCase() + rest.toLowerCase()
}
