import { expect } from 'chai'
import doctest from '../docs/doctest'
import { string } from '../src'

describe('string', () => {

//  describe('doctests', () => doctest('./src/string/index.js') )

  describe('isNumberString', () => {
    it('should return true if string is number, false otherwise', () => {
      expect( string.isNumberString('4234234') ).to.equal(true)
      expect( string.isNumberString('NaN') ).to.equal(true)
      expect( string.isNumberString('') ).to.equal(false)
      expect( string.isNumberString('w0ah') ).to.equal(false)
    })
  })

  describe('titleize', () => {

    it('should upcase each word and make it space delimited', () => {
      expect( string.titleize('super_duper_snake_case') ).to.equal('Super Duper Snake Case')
      expect( string.titleize('crazyLowerCamelCase') ).to.equal('Crazy Lower Camel Case')
      expect( string.titleize('CrazyUpperCamelCase') ).to.equal('Crazy Upper Camel Case')
      expect( string.titleize('very normal set of words') ).to.equal('Very Normal Set Of Words')
    })
  })

  describe('titleizeWord', () => {

    it('upcases the first letter of the word, lowercases the rest', () => {
      expect( string.titleizeWord('super') ).to.equal('Super')
      expect( string.titleizeWord('DOPE') ).to.equal('Dope')
      expect( string.titleizeWord('cRaZy') ).to.equal('Crazy')
    })
  })
})
