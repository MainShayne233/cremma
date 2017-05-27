import { expect } from 'chai'
import { object } from '../src'
import { sampleObject1, sampleObject2 } from './__support__/helpers/fixtures/objects'
import { sampleArray1, sampleArray2 } from './__support__/helpers/fixtures/arrays'

describe('object', () => {

  describe('object.equivalent/2', () =>  {

    it('should return true if two objects are equivalent', () => {
      const clonedObject = JSON.parse( JSON.stringify(sampleObject1) )
      expect( object.equivalent(sampleObject1, clonedObject) ).to.equal(true)
      expect( object.equivalent(sampleObject1, sampleObject2) ).to.equal(false)
    })

    it('should also work for arrays', () => {
      const clonedArray = JSON.parse( JSON.stringify(sampleArray1) )
      expect( object.equivalent(sampleArray1, clonedArray) ).to.equal(true)
      expect( object.equivalent(sampleArray1, sampleArray2) ).to.equal(false)
    })
  })
})
