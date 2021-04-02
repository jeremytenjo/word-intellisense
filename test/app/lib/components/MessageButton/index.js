import Styles from './styles'

export default function MessageButton() {
  const handleClick = () => {
    window.gtag('event', 'select_content', {
      content_type: 'Clicked send email button',
    })
  }

  return (
    <Styles onClick={handleClick}>
      <a
        href='mailto:torontocityplacesoccer@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src='/images/icons/email.svg'
          alt='email torontocityplacesoccer@gmail.com button'
        />
      </a>
    </Styles>
  )
}
