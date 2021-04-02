import Image from 'next/image'

import useCMS from '../../../../cms/useCMS'
import Button from '../../Button'

import Styles from './styles'

export default function LoginToCMS() {
  const { cms = {} } = useCMS() || {}

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
      <h1>Content Management System</h1>
      <Button
        onClick={() => cms.toggle()}
        text={cms.enabled ? 'Logout' : 'Start Editing'}
      />
    </Styles>
  )
}
