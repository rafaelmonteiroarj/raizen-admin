import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';

import GlobalStyles from 'styles/global';
import ResetStyle from 'styles/reset';
import { useApollo } from 'utils/apollo';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = async () => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  const client = useApollo(pageProps.initialApolloState);

  return (
    <>
      <ApolloProvider client={client}>
        <Head>
          <title>React Avançado - Boilerplate</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Exo+2:wght@700&family=Lato:wght@100;400&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ResetStyle />
        <GlobalStyles />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default App;
