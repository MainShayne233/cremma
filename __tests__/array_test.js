import { expect } from 'chai'
import { array } from '../src'

describe('array', () => {

  describe('dropAtIndex/2', () => {

    it('should return the array with the specified index dropped', () => {
      expect( array.equivalent( array.dropAtIndex([], 1), [] ) ).to.equal(true)
      expect( array.equivalent( array.dropAtIndex([0], 1), [0] ) ).to.equal(true)
      expect( array.equivalent( array.dropAtIndex([0], 0), [] ) ).to.equal(true)
      expect( array.equivalent( array.dropAtIndex([1, 1, 2, 3, 5, 8], 4), [1, 1, 2, 3, 8] ) ).to.equal(true)
      expect( array.equivalent( array.dropAtIndex([1, 1, 2, 3, 5, 8], 5), [1, 1, 2, 3, 5] ) ).to.equal(true)
    })
  })

  describe('equivalent/2', () => {

    it('should return true if two arrays are equivalent, false otherwise', () => {
      expect( array.equivalent([], []) ).to.equal(true)
      expect( array.equivalent([1, {hi: 'there'}], [1, {hi: 'there'}]) ).to.equal(true)
      expect( array.equivalent([ [1] ], [ [2] ]) ).to.equal(false)
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
