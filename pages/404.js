import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// dynamic import를 통해 SSR을 비활성화합니다.
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

import errorAnimation from '../public/error.json';

export default function PageNotFound() {
    const [isBrowser, setIsBrowser] = useState(false);

    // 클라이언트 환경 여부를 확인
    useEffect(() => {
        setIsBrowser(typeof window !== 'undefined');
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {isBrowser && (
                <Lottie
                    autoPlay
                    loop
                    animationData={errorAnimation}
                    play
                    style={{ height: '300px', width: '300px' }}
                />
            )}
            <h1 className="text-2xl font-bold text-gray-700 mt-6">
                페이지를 찾을 수 없습니다 ㅠㅠ
            </h1>
            <p className="text-gray-500 mt-2">
                요청하신 페이지가 존재하지 않거나 삭제되었습니다.
            </p>
        </div>
    );
}
