import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// dynamic import를 통해 SSR을 비활성화합니다.
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

import lottieJson from '/public/animation.json';

export default function Animation() {
    const [isBrowser, setIsBrowser] = useState(false);

    // 클라이언트 환경 여부를 확인
    useEffect(() => {
        setIsBrowser(typeof window !== 'undefined');
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            {isBrowser && (
                <Lottie
                    loop
                    animationData={lottieJson}
                    play
                    style={{
                        objectFit: 'contain',
                        width: '100%',
                        height: '100%',
                    }}
                />
            )}
        </div>
    );
}
