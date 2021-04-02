const vscode = require('vscode')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(ctx) {
  vscode.languages.registerHoverProvider('javascript', {
    async provideHover() {
      const editor = vscode.window.activeTextEditor
      let cursorPosition = editor.selection.start
      let wordRange = editor.document.getWordRangeAtPosition(cursorPosition)
      let documentText = editor.document.getText(wordRange)
      const isCompleteDocument = documentText.split('\r').length > 1
      if (isCompleteDocument) return null

      const filesBaseDir = 'lib'
      const highlightedWord = documentText.split('\r')[0]
      const files = await vscode.workspace.findFiles(
        `${filesBaseDir}/**/${highlightedWord}/index.js`,
        '/node_modules/',
        1
      )
      if (!files.length) return null

      const highlightedWordFile = files[0]
      const content = new vscode.MarkdownString('', true)
      content.appendMarkdown(`__${highlightedWord}__`)
      content.appendMarkdown('\n \n')
      content.appendMarkdown(`[Open File](${highlightedWordFile.path})`)
      content.appendMarkdown('\n \n')
      content.appendMarkdown(
        `[Open Storybook Story](http://localhost:6007/?path=/story/lib-components-${highlightedWord})`
      )

      return {
        contents: [content]
      }
    }
  })
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate
}
