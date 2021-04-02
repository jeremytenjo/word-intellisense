const vscode = require('vscode')

module.exports = function handleHover() {
  vscode.languages.registerHoverProvider('javascript', {
    async provideHover() {
      const editor = vscode.window.activeTextEditor
      let cursorPosition = editor.selection.start
      let wordRange = editor.document.getWordRangeAtPosition(cursorPosition)
      let documentText = editor.document.getText(wordRange)
      const isCompleteDocument = documentText.split('\r').length > 1
      if (isCompleteDocument) return null

      const config = vscode.workspace.getConfiguration('wordIntellisense')
      const filesBaseDir = config.baseDir
      const storybookPort = config.storybook.port
      const highlightedWord = documentText.split('\r')[0]
      const files = await vscode.workspace.findFiles(
        `${filesBaseDir}/**/${highlightedWord}/index.js`,
        '/node_modules/',
        1
      )
      if (!files.length) return null

      const cutStringFrom = (word, string) => {
        const indexOfWord = string.indexOf(word)
        const slice = string.slice(indexOfWord, string.length)
        return slice
      }

      const getStoryPath = (word, string, storybookPort) => {
        const stringRest = cutStringFrom(word, string)
        let stringSplit = stringRest.split('/')
        stringSplit.pop()
        const componentPath = stringSplit.join('-')
        const storyPath = `http://localhost:${storybookPort}/?path=/story/${componentPath}`
        return storyPath
      }

      const highlightedWordFile = files[0]
      const storyPath = getStoryPath(
        filesBaseDir,
        highlightedWordFile.path,
        storybookPort
      )
      const content = new vscode.MarkdownString('', true)
      content.appendMarkdown(`__${highlightedWord}__`)
      content.appendMarkdown('\n \n')
      content.appendMarkdown(`[Open File](${highlightedWordFile.path})`)
      content.appendMarkdown('\n \n')
      content.appendMarkdown(`[Open Storybook Story](${storyPath})`)

      return {
        contents: [content]
      }
    }
  })
}