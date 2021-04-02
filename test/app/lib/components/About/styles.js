export default styled('section', {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  justifyItems: 'center',
  marginTop: '70px',
  padding: '0 20px',
  marginBottom: '37px',
  gridGap: '10px',
  '& p': {
    marginTop: 17,
  },

  '@tablet': {
    fontSize: '4vw',
    marginTop: '110px',
    marginBottom: '80px',
  },
})
