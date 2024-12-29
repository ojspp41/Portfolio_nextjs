import React from 'react';
import Lottie from 'react-lottie-player';

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
