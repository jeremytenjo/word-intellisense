const vscode = require('vscode')

module.exports = async function getFileData(fileName) {
  const config = vscode.workspace.getConfiguration('wordIntellisense')
  const filesBaseDir = config.baseDir
  const excludes = config.excludeFolders
    ? `/${config.excludeFolders}/`
    : undefined
  const files = await vscode.workspace.findFiles(
    `${filesBaseDir}/**/${fileName}/index.js`,
    excludes,
    1
  )
  if (!files.length) return false

  const file = files[0]
  return file
}
