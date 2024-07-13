// src/pages/_app.js

import { Provider } from 'react-redux';
import store from '../redux/store'; // Ensure the path is correct
import AppWrapper from '../components/AppWrapper';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/Footer/footer';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
        <Footer/>
      </AppWrapper>
    </Provider>
  );
}

export default MyApp;