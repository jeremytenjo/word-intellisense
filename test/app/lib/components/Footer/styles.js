export default styled('footer', {
  backgroundColor: 'black',
  marginTop: '20px',
  color: 'white',
  alignItems: 'center',
  display: 'grid',
  padding: '25px 20px',
  '@tablet': {
    gridAutoFlow: 'column',
    justifyContent: 'space-between',
    padding: '30px 20px',
  },

  '& .followUs': {
    fontSize: '18px',
  },

  '& p': {
    width: 'fit-content',
    margin: '0',
    marginBottom: '15px',
    '@tablet': { marginBottom: '0' },
  },

  '& .socials': {
    display: 'grid',
    gridGap: '20px',
    '@tablet': {
      width: 'fit-content',
      alignItems: 'center',
      gridAutoFlow: 'column',
      justifyContent: 'space-between',
    },

    '& p': {
      margin: '0',
      '@tablet': { marginBottom: '0' },
    },

    '& img': {
      width: '33px',
      height: '33px',
      transition: '0.3s',
    },
    '& .icons': {
      display: 'grid',
      gridAutoFlow: 'column',
      width: 'fit-content',
      gridGap: '20px',
      '@tablet': {
        gridGap: '15px',
      },
      '& img:hover': {
        transform: 'translateY(-4px)',
      },
    },
  },
})
