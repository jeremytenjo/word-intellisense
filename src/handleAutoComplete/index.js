const vscode = require('vscode')
const getAllWords = require('../../utils/getAllWords')

module.exports = function handleAutoComplete() {
  vscode.languages.registerCompletionItemProvider('javascript', {
    async provideCompletionItems() {
      try {
        const allWords = await getAllWords()
        const allWordsItems = allWords.map(
          (word) => new vscode.CompletionItem(word)
        )
        return allWordsItems
      } catch (error) {
        console.error(error)
      }
    }
  })
}
