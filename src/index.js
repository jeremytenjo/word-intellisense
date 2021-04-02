const handleHover = require('./handleHover')
const handleOnDefinition = require('./handleOnDefinition')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(ctx) {
  handleHover()
  handleOnDefinition()
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate
}
