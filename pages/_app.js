import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { Provider } from "next-auth/client";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Head>
          <title>Coin Finder</title>
          <meta
            name="description"
            content="A Crypto site where Coin and NFT owners come to advertise their products"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
