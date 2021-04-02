export default styled('p', {
  margin: 0,

  variants: {
    variant: {
      body1: {
        marginBottom: '0',
        fontSize: '17px',
        fontFamily: 'TitilliumWebRegular',
        textAlign: 'center',
        maxWidth: '593px',
      },
      heading1: {
        fontFamily: 'TitilliumWebBold',
        fontSize: '7.6vw',
        '@tablet': {
          fontSize: '4vw',
        },
      },
      heading2: {
        fontFamily: 'TitilliumWebBold',
        fontSize: '23px',
        marginTop: 23,
        marginBottom: 23,
        '@tablet': {
          fontSize: '24px',
        },
      },
      heading3: {
        fontFamily: 'TitilliumWebBold',
        fontSize: '27px',
        textAlign: 'center',
        color: 'white',
        margin: '0',
        maxWidth: '320px',

        '@tablet': {
          fontSize: '30px',
          maxWidth: '370px',
        },
      },
      heading4: {
        fontFamily: 'TitilliumWebBold',
        fontSize: '20px',
      },
      heading5: {
        fontFamily: 'TitilliumWebBold',
        fontSize: '18px',
      },
    },
  },
})
