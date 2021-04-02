export default function Fonts() {
  return (
    <>
      <link
        rel='preload'
        href='/fonts/Titillium_Web/TitilliumWeb-Regular.woff2'
        as='font'
        crossOrigin=''
      />
      <link
        rel='preload'
        href='/fonts/Titillium_Web/TitilliumWeb-Bold.woff2'
        as='font'
        crossOrigin=''
      />
      <link
        rel='preload'
        href='/fonts/Titillium_Web/TitilliumWeb-SemiBold.ttf'
        as='font'
        crossOrigin=''
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
      @font-face {
          font-family: 'TitilliumWebRegular';
  src: url('/fonts/Titillium_Web/TitilliumWeb-Regular.woff2');
  font-display: swap;
}

@font-face {
  font-family: 'TitilliumWebBold';
  src: url('/fonts/Titillium_Web/TitilliumWeb-Bold.woff2');
  font-display: swap;
}

@font-face {
  font-family: 'TitilliumWebSemiBold';
  src: url('/fonts/Titillium_Web/TitilliumWeb-SemiBold.ttf');
  font-display: swap;
}
`,
        }}
      ></style>
    </>
  )
}
