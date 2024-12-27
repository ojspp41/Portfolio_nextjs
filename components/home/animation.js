import React from 'react'
import Lottie from 'react-lottie-player'

import lottieJson from '/public/animation.json'
const s = dynamic(() => import('react-lottie-player'), { ssr: false });
export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{objectFit: 'contain', width: `100%`, height: `100%` }}
    />
  )
}
