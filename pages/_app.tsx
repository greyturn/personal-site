import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';

import Footer from '../components/Footer'

import { theme } from '../theme';

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
