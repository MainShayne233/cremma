const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs')

const modules = [
  ['src/object/index.js', 'objectDocs.md', 'object'],
  ['src/string/index.js', 'stringDocs.md', 'string'],
]

const modulesList =modules.map(module => {
  const [file, outpath, name] = module
  jsdoc2md.render({
    files: file,
  }).then(output => {
    fs.writeFile('docs/' + outpath, output, () => {
      console.log(`wrote ${'docs/' + outpath}`)
    })
  })

  return `- [${name}](${outpath})`
}).join("\n")

const index = "" +
  "# Docs" + "\n" +
  modulesList + "\n"

fs.writeFile('docs/index.md', index, () => {
  console.log('wrote docs/index.md')
})
