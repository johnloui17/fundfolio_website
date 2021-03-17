import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'gilroybold';
  src: url("/fonts/gilroy-bold-webfont.woff"),
        url("/fonts/gilroy-bold-webfont.woff2");
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'gilroyextrabold';
  src: url("/fonts/gilroy-extrabold-webfont.woff"),
        url("/fonts/gilroy-extrabold-webfont.woff2");
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'gilroyheavy';
  src: url("/fonts/gilroy-heavy-webfont.woff"),
        url("/fonts/gilroy-heavy-webfont.woff2");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'gilroymedium';
  src: url("/fonts/gilroy-medium-webfont.woff"),
        url("/fonts/gilroy-medium-webfont.woff2");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'gilroyregular';
  src: url("/fonts/gilroy-regular-webfont.woff"),
        url("/fonts/gilroy-regular-webfont.woff2");
  font-weight: normal;
  font-style: normal;
}
  *{
    box-sizing: border-box;
    font-family: 'gilroyregular';
  }
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }
  #__next{
    height: 100%;
  }
  h1,h2,h3,h4,p{
    margin: 0;
  }
 
`;
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={{}}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>fundfolio - financial freedom for all.</title>
        <link
          rel="shortcut icon"
          href="https://fundfolio.gumlet.io/fundfolio/fav_ico.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://fundfolio.gumlet.io/fundfolio/fav_ico.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="https://fundfolio.gumlet.io/fundfolio/fav_ico.png"
        />
        <link rel="apple-touch-icon" sizes="114x114" href="" />
        <script src="https://smtpjs.com/v3/smtp.js"></script>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-166954131-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '[Tracking ID]');
        `,
          }}
        />

        <link
          rel="preload"
          href="/fonts/gilroy-bold-webfont.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/gilroy-extrabold-webfont.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/gilroy-heavy-webfont.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/gilroy-medium-webfont.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/gilroy-regular-webfont.woff"
          as="font"
          crossOrigin=""
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
