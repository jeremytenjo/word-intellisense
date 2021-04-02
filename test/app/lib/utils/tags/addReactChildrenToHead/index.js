export default function addReactChildrenToHead(reactComponent) {
  const reactComponentData = reactComponent()
  reactComponentData.props.children.forEach((child) => {
    const tag = document.createElement(child.type)
    for (const [key, value] of Object.entries(child.props)) {
      if (key === 'dangerouslySetInnerHTML') {
        const styleTag = document.createElement('style')
        if (value.__html) {
          styleTag.innerHTML = value.__html
          appendToHead(styleTag)
        }
      } else {
        tag[key] = value
      }
    }
    appendToHead(tag)
  })
}

function appendToHead(tag) {
  document.getElementsByTagName('head')[0].appendChild(tag)
}
