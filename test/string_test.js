import { expect } from 'chai'
import { string } from '../src'
import jsdoctest from 'jsdoc-test'

describe('string', () => {

  describe('doctests', () => jsdoctest('./src/string/index.js') )

  describe('isNumberString/1', () => {
    it('should return true if string is number, false otherwise', () => {
      expect( string.isNumberString('4234234') ).to.equal(true)
      expect( string.isNumberString('NaN') ).to.equal(true)
      expect( string.isNumberString('') ).to.equal(false)
      expect( string.isNumberString('w0ah') ).to.equal(false)
    })
  })

  describe('titleize/1', () => {

    it('should upcase each word and make it space delimited', () => {
      expect( string.titleize('super_duper_snake_case') ).to.equal('Super Duper Snake Case')
      expect( string.titleize('crazyLowerCamelCase') ).to.equal('Crazy Lower Camel Case')
      expect( string.titleize('CrazyUpperCamelCase') ).to.equal('Crazy Upper Camel Case')
      expect( string.titleize('very normal set of words') ).to.equal('Very Normal Set Of Words')
    })
  })

  describe('titleizeWord/1', () => {

    it('upcases the first letter of the word, lowercases the rest', () => {
      expect( string.titleizeWord('super') ).to.equal('Super')
      expect( string.titleizeWord('DOPE') ).to.equal('Dope')
      expect( string.titleizeWord('cRaZy') ).to.equal('Crazy')
    })
  })
})
