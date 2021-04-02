export default styled('div', {
  position: 'fixed',
  width: '100%',
  maxWidth: '500px',
  height: '200px',
  left: '0',
  right: '0',
  bottom: '0',
  top: '0',
  margin: 'auto',
  textAlign: 'center',
  display: 'grid',
  justifyItems: 'center',

  '& h1': {
    fontFamily: 'TitilliumWebBold',
    marginTop: '5px',
  },
})
