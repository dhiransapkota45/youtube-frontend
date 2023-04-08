import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import Layout from "../../components/layout/Layout";
import store from "../../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "",
            duration: 5000,
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
