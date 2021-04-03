const vscode = require('vscode')
const getHighlightedWord = require('../../utils/getHighlightedWord')
const getFileData = require('../../utils/getFileData')

module.exports = function handleHover() {
  vscode.languages.registerHoverProvider('javascript', {
    async provideHover() {
      try {
        const highlightedWord = getHighlightedWord()
        if (!highlightedWord) return null

        const highlightedWordFile = await getFileData(highlightedWord)
        if (!highlightedWordFile) return null

        const config = vscode.workspace.getConfiguration('wordIntellisense')
        const filesBaseDir = config.baseDir
        const storybookPort = config.storybook.port
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
      } catch (error) {
        console.error(error)
      }
    }
  })
}
