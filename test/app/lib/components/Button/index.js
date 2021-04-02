import Styles from './styles'

/**
 * @example
 * <Button text='hello' />
 */
export default function Button({
  text,
  name = 'button',
  href,
  onClick = () => null,
  size = 'normal',
  css
}) {
  return (
    <Styles name={name} onClick={onClick} size={size} css={css}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </Styles>
  )
}
