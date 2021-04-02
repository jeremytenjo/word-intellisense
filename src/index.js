const handleHover = require('./handleHover')
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(ctx) {
  handleHover()
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate
}
