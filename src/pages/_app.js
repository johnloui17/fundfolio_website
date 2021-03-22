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
        <title>Fundfolio - Financial Freedom for all.</title>
        
        <meta name="description" content="We offer products for Stock markets, Mutual Funds, ITR, Insurance and help you achieve financial freedom and financial independence."/>
        <meta name="keywords" content="ITR Filing, Tax Filing, Mutual funds in India, Buy Insurance online, Stock market Online, stock tips, intraday screener, algo trading"/>

        <meta property="og:url" content="https://fundfolio.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Fundfolio - Financial Freedom for all." />
        <meta property="og:description" content="We offer products for Stock markets, Mutual Funds, ITR, Insurance and help you achieve financial freedom and financial independence." />
        <meta property="og:image" content="https://l8n8labs.com/assets/img/cover-pic/L8-N8-Labs.png" />

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@MarketfeedNews"/>
        <meta name="twitter:creator" content="@MarketfeedNews"/>
        <meta name="twitter:title" content="Fundfolio - Financial Freedom for all."/>
        <meta name="twitter:description" content="We offer products for Stock markets, Mutual Funds, ITR, Insurance and help you achieve financial freedom and financial independence."/>
        <meta name="twitter:image" content="https://l8n8labs.com/assets/img/cover-pic/L8-N8-Labs.png"/>

        <meta itemscope itemtype="http://schema.org/Article" />
        <meta itemprop="headline" content="Fundfolio - Financial Freedom for all." />
        <meta itemprop="description" content="We offer products for Stock markets, Mutual Funds, ITR, Insurance and help you achieve financial freedom and financial independence." />
        <meta itemprop="image" content="https://l8n8labs.com/assets/img/cover-pic/L8-N8-Labs.png" />
        <meta itemprop="og:headline" content="Fundfolio - Financial Freedom for all." />

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
          src="https://www.google.com/recaptcha/api.js?render=6LfTTIcaAAAAAGQDA__sAkZNZadGNeQCmld4Cpvz"
        ></script>
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
