const vscode = require('vscode')

module.exports = function getHighlightedWord() {
  const editor = vscode.window.activeTextEditor
  let cursorPosition = editor.selection.start
  let wordRange = editor.document.getWordRangeAtPosition(cursorPosition)
  let documentText = editor.document.getText(wordRange)
  const isCompleteDocument = documentText.split('\r').length > 1
  if (isCompleteDocument) return false

  const highlightedWord = documentText.split('\r')[0]

  return highlightedWord
}
