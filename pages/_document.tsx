import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html >
        <title >Carlson SiteOPS</title >
        <Head />
        <body >
        <link
          rel = "stylesheet/less"
          type = "text/css"
          href = {`${getConfig().publicRuntimeConfig.prefix}_next/static/color.less`}
        />
        <script
          dangerouslySetInnerHTML = {{
            __html: `window.less = { async: false, env: 'production' };`,
          }}
        />
        <script
          type = "text/javascript"
          src = "./less.min.js"
        />
        <Main />
        <NextScript />
        </body >
      </Html >
    );
  }
}
