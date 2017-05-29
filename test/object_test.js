import { expect } from 'chai'
import { object } from '../src'
import { sampleObject1, sampleObject2 } from './__support__/helpers/fixtures/objects'
import { sampleArray1, sampleArray2 } from './__support__/helpers/fixtures/arrays'
import doctest from '../docs/doctest'

describe('object', () => {

 // describe('doctests', () => doctest('./src/object/index.js') )
  
  describe('dig/2', () => {

    it('should return the value stored in the object, using the array/string of keys to get to it', () => {

      expect( object.dig(sampleObject1, ['i', 'have', 'some']) ).to.equal('data')
      expect( object.dig(sampleObject1, ['i', 'also', '1']) ).to.equal('array')
    })
  })

  describe('equivalent/2', () =>  {

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

    it('should handle undefined', () => {
      expect( object.equivalent(undefined, undefined) ).to.equal(true)
      expect( object.equivalent([undefined, 1], [undefined, 1]) ).to.equal(true)
    })
  })

  describe('groupBy/2', () => {
    
    it('should return an object that groups the elements via the function', () => {
      const people = [
        {name: 'john', age: 56},
        {name: 'joey', age: 54},
        {name: 'jimmy', age: 56},
        {name: 'josh', age: 49},
      ]

      const expectedGroupedPeople = {
        49: [ {name: 'josh', age: 49} ],
        54: [ {name: 'joey', age: 54} ],
        56: [ {name: 'john', age: 56}, {name: 'jimmy', age: 56} ],
      }

      const grouped = object.groupBy(people, (person) => person.age)

      expect( object.equivalent(grouped, expectedGroupedPeople) ).to.equal(true)
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

  describe('diff/2', () => {

    it('should return an array of objects that describe the differences between two objects', () => {
      const object1 = {
        firstName: 'john',
        lastName: 'smith',
        address: {
          zip: '32952',
          country: 'US',
        },
        catchPhrase: 'ayyyyy!',
        friends: ['travis'],
      }
      const object2 = {
        firstName: 'travis',
        lastName: 'smith',
        address: {
          zip: '90832',
          country: 'US',
        },
        car: {
          make: 'toyota',
          model: 'rav4',
        },
        friends: ['john'],
      }
      const diff = object.diff(object1, object2)
      const expectedDiff = [
        { key: 'firstName', firstValue: 'john', secondValue: 'travis' },
        { key: 'address', firstValue: {zip: '32952', country: 'US'}, secondValue: {zip: '90832', country: 'US'} },
        { key: 'address.zip', firstValue: '32952', secondValue: '90832' },
        { key: 'catchPhrase', firstValue: 'ayyyyy!', secondValue: undefined },
        { key: 'friends', firstValue: ['travis'], secondValue: ['john'] },
        { key: 'friends.0', firstValue: 'travis', secondValue: 'john' },
        { key: 'car', firstValue: undefined, secondValue: {make: 'toyota', model: 'rav4'} },
        { key: 'car.make', firstValue: undefined, secondValue: 'toyota' },
        { key: 'car.model', firstValue: undefined, secondValue: 'rav4' },
      ]

      expect( object.equivalent( diff, expectedDiff ) ).to.equal(true)
    })
  })

  describe('numberKeyedObjectToArray/1', () => {

    it('should return the object as an array', () => {

      const numberKeyedObject = {
        1: 'one',
        2: 'one',
        3: 'oops i mean two',
        4: 'dang! four!',
        5: 'five',
        6: 'back on track',
        7: 'crap!',
      }

      const expectedArray = [
        ,
        'one',
        'one',
        'oops i mean two',
        'dang! four!',
        'five',
        'back on track',
        'crap!',
      ]

      const arrayified = object.numberKeyedObjectToArray(numberKeyedObject)

      expect( object.equivalent(arrayified, expectedArray) ).to.equal(true)
    })
  })
})
