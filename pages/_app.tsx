import { appWithTranslation } from '../i18n'
import App, { Container } from "next/app";
import React from "react";
import withApolloClient from "../lib/with-apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";

class MyApp extends App {

  render() {
    // @ts-ignore
    const { Component, pageProps, apolloClient } = this.props;
    return (
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
    );
  }
}

export default appWithTranslation(withApolloClient(MyApp));
