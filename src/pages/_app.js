// pages/_app.js
import { Provider } from "react-redux";
import store from "../redux/store"; // Ensure the correct path to the store
import "./globals.css"; // Ensure your global styles are imported correctly
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar/navbar"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Toaster position="top-right" />
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
