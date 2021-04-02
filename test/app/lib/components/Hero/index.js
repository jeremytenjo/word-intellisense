import Image from 'next/image'

import Button from '../Button'

import Styles from './styles'

export default function Hero({ message = '', buttonText = 'Join' }) {
  const handleClick = () => {
    window.gtag('event', 'select_content', {
      content_type: 'Opened Open Sports Link',
    })
  }

  return (
    <Styles>
      <Image
        src='/images/hero/hero1.png'
        alt='Picture of the author'
        layout='fill'
        quality={85}
      />

      <div className='overlay' />

      <div className='textWrapper'>
        <Text text={message} tag='h2' variant='heading3' />
        <Button
          text={buttonText}
          name={buttonText}
          href='https://opensports.net/cityplace-soccer/events/upcoming'
          onClick={handleClick}
        />
      </div>
    </Styles>
  )
}
