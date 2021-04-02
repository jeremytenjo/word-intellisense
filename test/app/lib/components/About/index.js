import Image from 'next/image'

import Styles from './styles'

export default function About({ message = '' }) {
  return (
    <Styles>
      <Image
        src='/images/logo/logo.png'
        alt='TCS logo'
        quality={85}
        width={60}
        height={60}
        layout='fixed'
      />
      <Text text={message} />
    </Styles>
  )
}
