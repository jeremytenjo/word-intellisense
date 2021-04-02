const vscode = require('vscode')

module.exports = function handleOnDefinition() {
  vscode.languages.registerDefinitionProvider('javascript', {
    async provideDefinition() {
      console.log('HERE!')

      let uri = new vscode.Uri.file(
        '/Users/jtenjo/Documents/word-intellisense/test/app/lib/utils/strings/capitalize/index.js'
      )
      console.log({ uri })
      const location = new vscode.Location(uri, new vscode.Position(0, 0))

      console.log({ location })

      return location
    }
  })
}
