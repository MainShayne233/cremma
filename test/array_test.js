import { expect } from 'chai'
import { array } from '../src'
import jsdoctest from 'jsdoc-test'

describe('array', () => {

  describe('doctests', () => jsdoctest('./src/array/index.js') )

  describe('dropAtIndex/2', () => {

    it('should return the array with the specified index dropped', () => {
      expect(array.dropAtIndex([], 1)).to.eql([])
      expect(array.dropAtIndex([0], 1)).to.eql([0])
      expect(array.dropAtIndex([0], 0)).to.eql([])
      expect(array.dropAtIndex([1, 1, 2, 3, 5, 8], 4)).to.eql([1, 1, 2, 3, 8])
      expect(array.dropAtIndex([1, 1, 2, 3, 5, 8], 5)).to.eql([1, 1, 2, 3, 5])
    })
  })

  describe('equivalent/2', () => {

    it('should return true if two arrays are equivalent, false otherwise', () => {
      expect( array.equivalent([], []) ).to.equal(true)
      expect( array.equivalent([1, 2], [1, 2])).to.equal(true)
      expect( array.equivalent([1, {hi: 'there'}], [1, {hi: 'there'}])).to.equal(true)
      expect( array.equivalent([[1]], [[2]])).to.equal(false)
    })
  })

  describe('last/1', () => {

    it('should return the last value in the array', () => {

      expect( array.last([]) ).to.equal(undefined)
      expect( array.last([8]) ).to.equal(8)
      expect( array.last([1, 1, 2, 3, 5, [], 'woah', 9]) ).to.equal(9)
    })
  })
})
