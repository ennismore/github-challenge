import React from 'react';
import Head from 'next/head';
import { css } from '@emotion/core';
import HelloWorld from '@/hello/components/HelloWorld.component';

const Home = () => (
  <React.Fragment>
    <Head>
      <title>GitHub Challenge</title>
    </Head>
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        font-size: 18px;
      `}
    >
      <HelloWorld />
    </div>
  </React.Fragment>
);

export default Home;
