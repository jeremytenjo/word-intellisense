const handleHover = require('./handleHover')
const handleOnDefinition = require('./handleOnDefinition')
const handleAutoComplete = require('./handleAutoComplete')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate() {
  handleHover()
  handleOnDefinition()
  handleAutoComplete()
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate
}
