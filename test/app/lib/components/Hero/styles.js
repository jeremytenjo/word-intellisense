export default styled('section', {
  position: 'relative',
  width: '100%',
  height: '400px',

  '@tablet': {
    height: '500px',
  },

  ' & .overlay': {
    background: 'rgba(0, 0, 0, 0.63)',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  },

  '& img': { objectFit: 'cover' },

  '& .textWrapper': {
    position: 'absolute',
    left: '50%',
    right: '0',
    padding: '0 40px',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    gridGap: '40px',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    width: '100%',
  },

  '& button': { display: 'flex', justifySelf: 'center' },
})
