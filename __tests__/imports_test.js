import { expect } from 'chai'
import Shed, { object } from '../src/index'

describe('imports of library', () => {
  it ('should be able to import everything', () => {
    expect(Shed).to.not.equal(undefined)
    expect(object).to.not.equal(undefined)
  })
})
