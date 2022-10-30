import { ChakraProvider } from "@chakra-ui/react";
import { Provider, createClient } from "urql";

import { ShopProvider } from "../context/shop";
import "../styles/globals.css";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  const client = createClient({ url: process.env.NEXT_PUBLIC_API_URL });

  return (
    <Provider value={client}>
      <ChakraProvider theme={theme}>
        <ShopProvider>
          <Component {...pageProps} />
        </ShopProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
