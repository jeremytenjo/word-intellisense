const vscode = require('vscode')
const pkgJson = require('../package.json')

const handleHover = require('./handleHover')
const handleOnDefinition = require('./handleOnDefinition')
const handleAutoComplete = require('./handleAutoComplete')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate() {
  console.log(`${pkgJson.name} activated!`)
  const config = vscode.workspace.getConfiguration('wordIntellisense')

  if (config.enable) {
    handleHover()
    handleOnDefinition()
    handleAutoComplete()
  }
}

// this method is called when your extension is deactivated
function deactivate() {
  console.log(`${pkgJson.name} deactivated!`)
}

module.exports = {
  activate,
  deactivate
}
