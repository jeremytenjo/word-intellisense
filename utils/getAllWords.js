const vscode = require('vscode')

module.exports = async function getAllWords() {
  const config = vscode.workspace.getConfiguration('wordIntellisense')
  const filesBaseDir = config.baseDir
  const files = await vscode.workspace.findFiles(
    `${filesBaseDir}/**/index.js`,
    '/node_modules/'
  )
  const cleanFiles = files.map((file) => {
    const split = file.path.split('/')
    const name = split[split.length - 2]
    return name
  })

  return cleanFiles
}
