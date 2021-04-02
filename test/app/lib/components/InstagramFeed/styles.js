export default styled('section', {
  width: '100%',
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
  '@tablet': {
    marginBottom: '40px',
  },
  '& ul': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '10px',
    '@tablet': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
  '& img': { maxWidth: '100%', borderRadius: '6px' },
  '& .header': {
    marginBottom: '30px',
    '& h2': { marginBottom: '0' },
    '& a': { fontFamily: 'TitilliumWebRegular' },
  },
})
