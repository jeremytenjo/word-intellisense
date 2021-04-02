import useInstaramScrapper from '../../utils/useInstaramScrapper'

import Styles from './styles'

export default function InstagramFeed() {
  const username = 'torontocityplacesoccer'
  const insta = useInstaramScrapper({ username })

  const handleClick = () => {
    window.gtag('event', 'select_content', {
      content_type: 'Clicked on Instagram photo',
    })
  }

  return (
    <Styles>
      <div className='header'>
        <Text text='Follow us on Instagam' variant='heading2' tag='h2' />
        <a
          href='https://www.instagram.com/torontocityplacesoccer/?hl=en'
          target='_blank'
          rel='noopener noreferrer'
        >
          @torontocityplacesoccer
        </a>
      </div>
      <ul>
        {insta.photos.map((photo) => {
          const igPhotoURL = 'http://instagram.com/p/' + photo.shortcode
          return (
            <li key={photo.image} onClick={handleClick}>
              <a href={igPhotoURL} target='_blank' rel='noreferrer'>
                <img src={photo.image} alt={photo.alt} />
              </a>
            </li>
          )
        })}
      </ul>
    </Styles>
  )
}
