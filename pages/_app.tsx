import { Env } from "../environments/env";
import "../styles/globals.scss";

const env: Env = require(`../environments/${process.env.mode}`);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} env={env} />;
}

export default MyApp;
