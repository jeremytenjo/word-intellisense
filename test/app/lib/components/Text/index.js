import Styles from './styles'

export default function Text({ text = '', tag = 'p', variant = 'body1' }) {
  return (
    <Styles as={tag} variant={variant}>
      {text}
    </Styles>
  )
}
