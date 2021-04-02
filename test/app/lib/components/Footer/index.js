import Styles from './styles'

export default function Footer() {
  return (
    <Styles>
      <Text text='Toronto Cityplace Soccer' variant='heading4' />

      <div className='socials'>
        <Text text='Follow us!' variant='heading5' />
        <div className='icons'>
          <a
            href='https://www.facebook.com/TorontoCityplaceSoccer/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='images/icons/socials/facebook.svg'
              alt='facebook icon opens https://www.facebook.com/TorontoCityplaceSoccer/'
            />
          </a>
          <a
            href='https://www.instagram.com/torontocityplacesoccer/?hl=en'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='images/icons/socials/instagram.svg'
              alt='instagram icon opens https://www.instagram.com/torontocityplacesoccer/?hl=en'
            />
          </a>
        </div>
      </div>
    </Styles>
  )
}
