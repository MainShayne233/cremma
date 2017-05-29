import { expect } from 'chai'
import Cremma, { object, string, array } from '../src'
import { equivalent } from '../src/object'

describe('imports of library', () => {
  it ('should be able to import everything', () => {
    expect(Cremma).to.not.equal(undefined)
    expect(object).to.not.equal(undefined)
    expect(string).to.not.equal(undefined)
    expect(array).to.not.equal(undefined)
    expect(equivalent).to.not.equal(undefined)
  })
})
