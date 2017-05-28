import { expect } from 'chai'
import fs from 'fs'
import path from 'path'
import util from 'util'
import { equivalent } from '../src/object'

export default function doctest(filename) {
  const module = require('../' + filename)
  const fileLines = fs.readFileSync(filename, 'utf8').split("\n")

  const exampleIndecies = fileLines.map((line, index) => {
    return [line, index]
  }).filter(line => {
    return line[0].indexOf('@example') !== -1
  }).map(line => line[1])

  for (const exampleIndex of exampleIndecies) {
    const [ functionName, args ] = findExampleCall(fileLines, exampleIndex)
    const callString = `module['${functionName}']${args}`
    const returnValue = findReturnValue(fileLines, exampleIndex)
    const returnType = findReturnType(fileLines, exampleIndex)
    let value
    try {
      value = eval(callString)
    } catch(error) {
      throw(`failed to eval ${callString}.\n${error}`)
    }

    if ( returnType === 'object' ) {
      const evalVal = parseStringObject( util.inspect(value)  )
      const expectedVal = parseStringObject( returnValue )

      it(functionName + ` doctest line ${exampleIndex}`, () => {
        expect( equivalent(evalVal, expectedVal) ).to.equal( true )
      })
    } else {
      const evalVal = value
      const expectedVal = returnValue
      it(functionName + ` doctest line ${exampleIndex}`, () => {
        expect( `${evalVal}` ).to.equal( expectedVal )
      })
    }
  }
}

function parseStringObject(stringObject) {
  const withoutBrackets = stringObject.split('{').join('').split('}').join('').trim()
  const sanitized = withoutBrackets.split("'").join('"').split(' ').map(word => {
    if (word.indexOf(':') !== -1) return '"' + word.split('"').join('').split(':')[0] + '":'
    else return word
  }).join(' ')
 
  try {
    return JSON.parse(`{ ${sanitized} }`)
  } catch(error) {
    throw(`Failed to parse { ${sanitized} }`)
  }
}

function findReturnType(fileLines, startingIndex) {
  while (startingIndex > 0) {
    const line = fileLines[startingIndex]
    if (line.indexOf('@returns') !== -1)
      return line.split('{')[1].split('}')[0]
    startingIndex -= 1
  }
  throw('No @returns value set')
}

function findExampleCall(fileLines, startingIndex) {
  const line = fileLines[startingIndex + 1]
  const callLine = line.slice(3, line.length)
  const split = callLine.split('(')
  const functionName = split[0]
  const args = split.slice(1, split.length).join('(')
  return [
    functionName,
    '(' + args,
  ]
}

function findFunctionName(fileLines, startingIndex) {
  return fileLines.find(line => {
    return line.indexOf('export function ') !== -1
  }).split(' ')[2].split('(')[0]
}


function findReturnValue(fileLines, startingIndex) {
  return fileLines.find((line, index) => {
    return line.indexOf('//=>') !== -1 && index >= startingIndex
  }).split('//=> ')[1]
}
