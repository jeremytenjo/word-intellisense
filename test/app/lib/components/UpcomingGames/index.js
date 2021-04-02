import Styles from './styles.js'

export default function UpcomingGames() {
  return (
    <Styles>
      <Text text='Upcoming Games' variant='heading2' tag='h3' />

      <iframe
        src='https://opensports.ca/iframe/cityplace-soccer/events'
        title='OpenSports upcoming games list'
        frameBorder='0'
      ></iframe>
    </Styles>
  )
}
