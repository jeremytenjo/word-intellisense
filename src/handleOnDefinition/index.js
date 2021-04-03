const vscode = require('vscode')
const getHighlightedWord = require('../../utils/getHighlightedWord')
const getFileData = require('../../utils/getFileData')

module.exports = function handleOnDefinition() {
  vscode.languages.registerDefinitionProvider('javascript', {
    async provideDefinition() {
      try {
        const highlightedWord = getHighlightedWord()
        if (!highlightedWord) return null

        const highlightedWordFile = await getFileData(highlightedWord)
        if (!highlightedWordFile) return null

        let uri = vscode.Uri.file(highlightedWordFile.path)
        const location = new vscode.Location(uri, new vscode.Position(0, 0))

        return location
      } catch (error) {
        console.error(error)
      }
    }
  })
}
