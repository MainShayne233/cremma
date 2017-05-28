import { expect } from 'chai'
import { object } from '../src'
import { sampleObject1, sampleObject2 } from './__support__/helpers/fixtures/objects'
import { sampleArray1, sampleArray2 } from './__support__/helpers/fixtures/arrays'
import doctest from '../docs/doctest'

describe('object', () => {


  describe('equivalent/2', () =>  {

    doctest('./src/object/index.js')

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

  describe('merge/2', () => {

    it('should merge two objects together', () => {
      const mergedObject = object.merge(sampleObject1, sampleObject2)
      expect( object.equivalent(mergedObject, {
        hi: 'there',
        i: {
          have: {
            some: 'data',
          },
          also: ['an', 'array'],
        },
        that: {
          is: 'all, again',
        },
        woah: 5,
        a: 'number',
        now: {
          a: {
            string: '5',
            version: 'nice!',
          },
        },
      })).to.equal(true)
    })
  })
})
