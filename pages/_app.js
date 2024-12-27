// _app.js
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import 'slick-carousel/slick/slick.css'; // 슬라이드 스타일
import 'slick-carousel/slick/slick-theme.css'; // 테마 스타일

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
