import { expect } from 'chai'
import Shed, { object } from '../src'
import { equivalent } from '../src/object'

describe('imports of library', () => {
  it ('should be able to import everything', () => {
    expect(Shed).to.not.equal(undefined)
    expect(object).to.not.equal(undefined)
    expect(equivalent).to.not.equal(undefined)
  })
})
