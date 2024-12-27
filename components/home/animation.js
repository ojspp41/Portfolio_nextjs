import React from 'react';
import dynamic from 'next/dynamic';

// dynamic import를 통해 SSR을 비활성화합니다.
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

import lottieJson from '/public/animation.json';

export default function Animation() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
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
    </div>
  );
}
