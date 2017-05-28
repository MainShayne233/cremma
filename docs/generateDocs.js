const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs')

const modules = [
  ['src/object/index.js', 'objectDocs.md'],
]

for (const module of modules) {
  const [file, outpath] = module
  jsdoc2md.render({
    files: file,
  }).then(output => {
    fs.writeFile('docs/' + outpath, output, () => {
      console.log(`wrote ${'docs/' + outpath}`)
    })
  })
}

