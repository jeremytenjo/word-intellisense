export default styled('button', {
  backgroundColor: '$primary',
  outline: 'none',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontFamily: 'TitilliumWebSemiBold',
  fontSize: '16px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  height: 33,
  width: 'fit-content',

  '& a': {
    width: '100%',
    padding: ' 0 27px',
  },

  variants: {
    size: {
      big: {
        fontSize: 25,
        height: 48,
      },
    },
  },
})
