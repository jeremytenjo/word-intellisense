export default styled('button', {
  position: 'sticky',
  bottom: '15px',
  display: 'block',
  left: 'calc(100vw - 80px)',
  width: 'fit-content',
  height: 'fit-content',
  filter:
    'drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.07))\r\n    drop-shadow(0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198))\r\n    drop-shadow(0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275))\r\n    drop-shadow(0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035))\r\n    drop-shadow(0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725))\r\n    drop-shadow(0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802))',
  '@tablet': {
    left: 'calc(100vw - 120px)',
  },

  '& img': {
    width: '60px',
    transition: '0.3s',
    '&:hover': { transform: 'translateY(-4px)' },
    '@tablet': {
      width: '70px',
    },
  },
})
