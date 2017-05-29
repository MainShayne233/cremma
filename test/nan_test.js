import { expect } from 'chai'
import { nan } from '../src'

describe('nan', () => {

  describe('isNaN/1', () => {

    it('should return true if value is NaN, false otherwise', () => {

      expect( nan.isNaN(NaN) ).to.equal(true)
      expect( nan.isNaN(parseInt('a')) ).to.equal(true)
      expect( nan.isNaN(undefined) ).to.equal(false)
      expect( nan.isNaN(null) ).to.equal(false)
      expect( nan.isNaN(0) ).to.equal(false)
      expect( nan.isNaN(0.1) ).to.equal(false)
      expect( nan.isNaN(-1) ).to.equal(false)
      expect( nan.isNaN('') ).to.equal(false)
    })
  })
})
