/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';
import ApolloProvider from '../app-data/graphql/ApolloProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'aos/dist/aos.css';
import 'react-datetime/css/react-datetime.css';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import '../app-data/shared/styles/global.scss';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { AppProps } from 'next/app';
import { OnlyClientProvider } from '../app-data/shared/hooks/useOnlyClient';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  breakpoints: {
    xs: '22.5em', // 360
    sm: '36em', // 576
    md: '48em', // 768
    lg: '62em', // 992
    xl: '75em', // 1200
    '2xl': '90em', // 1440
    '3xl': '120em', // 1920
  },
});

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>DayByMeMediaHouse</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/fonts/style.css" rel="stylesheet" />
        <meta name="description" content="" />
        {/* Use minimum-scale=1 to enable GPU rasterization */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {/* TODO: add GTM number */}
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-F6P7S4YP2P`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F6P7S4YP2P', {
              page_path: window.location.pathname,
            });
          `,
        }}
      /> */}
      <ApolloProvider>
        <OnlyClientProvider>
          {/* <GoogleReCaptchaProvider reCaptchaKey="6LeT1tolAAAAAJBL4QoWTDf7MXQQXtK1gQrPUzeK"> */}
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
          {/* </GoogleReCaptchaProvider> */}
        </OnlyClientProvider>
      </ApolloProvider>
    </>
  );
}

export default appWithTranslation(App);
