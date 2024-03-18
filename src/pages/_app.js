import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./font.css";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "Satoshi-Variable";
    src: url("fonts/Satoshi-Variable.woff2") format("woff2"),
      url("fonts/Satoshi-Variable.woff") format("woff"),
      url("fonts/Satoshi-Variable.ttf") format("truetype");
    font-weight: 300 900;
    font-display: swap;
    font-style: normal;
  }
  
  /**
  * This is a variable font
  * You can controll variable axes as shown below:
  * font-variation-settings: 'wght' 900.0;
  *
  * available axes:
  
  * 'wght' (range from 300.0 to 900.0)
  
  */
  
  @font-face {
    font-family: "Satoshi-VariableItalic";
    src: url("fonts/Satoshi-VariableItalic.woff2")
        format("woff2"),
      url("fonts/Satoshi-VariableItalic.woff") format("woff"),
      url("fonts/Satoshi-VariableItalic.ttf")
        format("truetype");
    font-weight: 300 900;
    font-display: swap;
    font-style: italic;
  }
  
  @font-face {
    font-family: "Satoshi-Light";
    src: url("fonts/Satoshi-Light.woff2") format("woff2"),
      url("fonts/Satoshi-Light.woff") format("woff"),
      url("fonts/Satoshi-Light.ttf") format("truetype");
    font-weight: 300;
    font-display: swap;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Satoshi-LightItalic";
    src: url("fonts/Satoshi-LightItalic.woff2")
        format("woff2"),
      url("fonts/Satoshi-LightItalic.woff") format("woff"),
      url("fonts/Satoshi-LightItalic.ttf") format("truetype");
    font-weight: 300;
    font-display: swap;
    font-style: italic;
  }
  
  @font-face {
    font-family: "Satoshi-Regular";
    src: url("fonts/Satoshi-Regular.woff2") format("woff2"),
      url("fonts/Satoshi-Regular.woff") format("woff"),
      url("fonts/Satoshi-Regular.ttf") format("truetype");
    font-weight: 400;
    font-display: swap;
    font-style: normal;
    opacity: 0.7;
  }
  
  @font-face {
    font-family: "Satoshi-Italic";
    src: url("fonts/Satoshi-Italic.woff2") format("woff2"),
      url("fonts/Satoshi-Italic.woff") format("woff"),
      url("fonts/Satoshi-Italic.ttf") format("truetype");
    font-weight: 400;
    font-display: swap;
    font-style: italic;
  }
  
  @font-face {
    font-family: "Satoshi-Medium";
    src: url("fonts/Satoshi-Medium.woff2") format("woff2"),
      url("fonts/Satoshi-Medium.woff") format("woff"),
      url("fonts/Satoshi-Medium.ttf") format("truetype");
    font-weight: 500;
    font-display: swap;
    font-style: normal;
    opacity: 0.7;
  }
  
  @font-face {
    font-family: "Satoshi-MediumItalic";
    src: url("fonts/Satoshi-MediumItalic.woff2")
        format("woff2"),
      url("fonts/Satoshi-MediumItalic.woff") format("woff"),
      url("fonts/Satoshi-MediumItalic.ttf") format("truetype");
    font-weight: 500;
    font-display: swap;
    font-style: italic;
  }
  
  @font-face {
    font-family: "Satoshi-Bold";
    src: url("fonts/Satoshi-Bold.woff2") format("woff2"),
      url("fonts/Satoshi-Bold.woff") format("woff"),
      url("fonts/Satoshi-Bold.ttf") format("truetype");
    font-weight: 700;
    font-display: swap;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Satoshi-BoldItalic";
    src: url("fonts/Satoshi-BoldItalic.woff2") format("woff2"),
      url("fonts/Satoshi-BoldItalic.woff") format("woff"),
      url("fonts/Satoshi-BoldItalic.ttf") format("truetype");
    font-weight: 700;
    font-display: swap;
    font-style: italic;
  }
  
  @font-face {
    font-family: "Satoshi-Black";
    src: url("fonts/Satoshi-Black.woff2") format("woff2"),
      url("fonts/Satoshi-Black.woff") format("woff"),
      url("fonts/Satoshi-Black.ttf") format("truetype");
    font-weight: 900;
    font-display: swap;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Satoshi-BlackItalic";
    src: url("fonts/Satoshi-BlackItalic.woff2")
        format("woff2"),
      url("fonts/Satoshi-BlackItalic.woff") format("woff"),
      url("fonts/Satoshi-BlackItalic.ttf") format("truetype");
    font-weight: 900;
    font-display: swap;
    font-style: italic;
  }
  
  *{
    box-sizing: border-box;
    font-family: 'Satoshi-Variable';
    scroll-behavior:smooth;
  }
  body, html {
    margin: 0;
    box-sizing: border-box;
    height: 100vh;
    width:100vw;
    font-family: 'Roboto', sans-serif;
    overscroll-behavior: none;
    .grecaptcha-badge { visibility: hidden; }
  }
  #__next{
    height: 100%;
  }
  h1,h2,h3,h4,p{
    margin: 0;
  }
::-webkit-scrollbar {
  display: none;
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
        <title>
          fundfolio - Making Capital Markets Accessible for Everyone!
        </title>

        <meta
          name="description"
          content="Unleash the power of investing! Start building your financial future today
          "
        />
        <meta
          name="keywords"
          content="ITR Filing, Tax Filing, Mutual funds in India, Buy Insurance online, Stock market Online, stock tips, intraday screener, algo trading, YC, Y Combinator"
        />

        <meta property="og:url" content="https://fundfolio.com" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="  fundfolio - Making Capital Markets Accessible for Everyone!"
        />
        <meta
          property="og:description"
          content="Unleash the power of investing! Start building your financial future today"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MarketfeedNews" />
        <meta name="twitter:creator" content="@MarketfeedNews" />
        <meta
          name="twitter:title"
          content="Fundfolio - financial freedom for all."
        />
        <meta
          name="twitter:description"
          content="We offer products for Stock markets, Mutual Funds, ITR, Insurance and help you achieve financial freedom and financial independence."
        />
        <meta
          name="twitter:image"
          content="https://fundfolio.gumlet.io/fundfolio/fundfolio-thumbnail.png"
        />

        <meta itemscope itemtype="http://schema.org/Article" />
        <meta
          itemprop="headline"
          content="Fundfolio - financial freedom for all."
        />
        <meta
          itemprop="description"
          content="We offer products for Stock markets, Mutual Funds, ITR, Insurance and help you achieve financial freedom and financial independence."
        />
        <meta
          itemprop="image"
          content="https://fundfolio.gumlet.io/fundfolio/fundfolio-thumbnail.png"
        />
        <meta property="og:image" content="/public/meta_thumbnail.png" />
        <meta
          itemprop="og:headline"
          content="Fundfolio - financial freedom for all."
        />

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

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-CHLNQSS681`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CHLNQSS681', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
