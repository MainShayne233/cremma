# cremma

Utility functions for Javascript with a preference for immutability

[![Build Status](https://travis-ci.org/MainShayne233/cremma.svg?branch=master)](https://travis-ci.org/MainShayne233/cremma)

Check the [docs](docs/index.md) for available functions

## Use
Install in your project
```bash
npm i --save cremma
```

Import modules wherever you want to use them
```javascript
import { object } from 'cremma'

const sampleObject1 = {
  hi: 'there',
  i: {
    have: {
      some: 'data',
    },
    also: ['an', 'array'],
  },
}

const sampleObject2 = {
  woah: 5,
  a: 'number',
  now: {
    a: {
      string: '5',
      version: 'nice!',
    },
  },
}

object.equivalent( sampleObject1, sampleObject2 )
// #=> false
```

## Available Functions
### Object
- equivalent(object1, object2)

## Development
Clone and enter the repo, and install deps
```bash
git clone https://github.com/MainShayne233/cremma.git
cd cremma
npm i
```
and make changes in `src`

### Commands
- `npm run test`: Runs tests
- `npm run test:watch`: Starts test watcher; will run test suite when changes are made
- `npm run build`: Builds `index.js` for distribution/client use
- `npm run start`: Starts a developer server, running at [localhost:4000](http://localhost:4000), where you can exercise/demo your code
