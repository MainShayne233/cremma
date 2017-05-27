import { expect } from 'chai'
import { object } from '../src/index'

describe('imports of library', () => {
  it ('should be able to import everything', () => {
    expect(object).to.not.equal(undefined)
   // expect(object).to.not.equal(undefined)
  })
})
