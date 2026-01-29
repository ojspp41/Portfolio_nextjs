import { useState } from 'react';
import Header from './header';
import Footer from './footer';
import CursorGlow from './ui/CursorGlow';
import ScrollProgress from './ui/ScrollProgress';
import FloatingNav from './ui/FloatingNav';
import SplashScreen from './ui/SplashScreen';

export default function Layout({ children }) {
    const [showSplash, setShowSplash] = useState(true);

    return (
        <>
            {/* 스플래시 스크린 */}
            <SplashScreen onComplete={() => setShowSplash(false)} />
            
            <div className={`bg-primary flex flex-col relative ${showSplash ? 'overflow-hidden h-screen' : ''}`} style={{ minHeight: '100vh' }}>
                {/* 커스텀 커서 글로우 */}
                <CursorGlow />
                
                {/* 스크롤 프로그레스 바 */}
                <ScrollProgress />
                
                {/* 플로팅 네비게이션 */}
                <FloatingNav />
                
                <Header />
                <div>
                    {children}
                </div>
                <div className='mb-16'>
                </div>
                <Footer />
            </div>
        </>
    );
}
