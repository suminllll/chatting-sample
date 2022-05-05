import { RecoilRoot } from "recoil";

import "../styles/globals.css";
import "../styles/login.css";
import "../styles/room.css";
import "../styles/chat.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>OAChat</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
