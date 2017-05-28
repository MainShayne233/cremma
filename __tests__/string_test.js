import { expect } from 'chai'
import doctest from '../docs/doctest'
import { string } from '../src'

describe('string', () => {

  describe('doctests', () => doctest('./src/string/index.js') )

  describe('isNumberString', () => {
    it('should return true if string is number, false otherwise', () => {
      expect( string.isNumberString('4234234') ).to.equal(true)
      expect( string.isNumberString('NaN') ).to.equal(true)
      expect( string.isNumberString('') ).to.equal(false)
      expect( string.isNumberString('w0ah') ).to.equal(false)
    })
  })
})
