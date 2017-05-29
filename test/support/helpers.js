import { expect } from 'chai'
import { object } from '../../src/'

export function expectEquivalent(object1, object2) {
  const diffs = object.diff(object1, object2)
  if (diffs.length === 0) 
    expect('equivalent').to.equal('equivalent')
  else {
    console.error('Found difference(s)')
    for (const diff of diffs) {
      const { key, firstValue, secondValue } = diff
      console.error(`${key}:`)
      console.error(`  firstValue: ${firstValue}`)
      console.error(`  secondValue: ${secondValue}`)
    }
    expect('inequivalent').to.equal('equivalent')
  }
}

export function expectInequivalent(object1, object2) {
  const diffs = object.diff(object1, object2)
  if (diffs.length === 0) 
    expect('equivalent').to.equal('inequivalent')
  else
    expect('inequivalent').to.equal('inequivalent')
}
