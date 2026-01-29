import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState(0); // 0: 로고, 1: 텍스트, 2: 완료

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 1800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const nameLetters = "오준석".split('');
  const titleLetters = "Frontend Developer".split('');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: 'blur(10px)'
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)'
          }}
        >
          {/* 애니메이션 배경 그리드 */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                animation: 'gridMove 20s linear infinite'
              }}
            />
          </div>

          {/* 움직이는 광선 효과 */}
          <motion.div
            className="absolute w-[200%] h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
            initial={{ x: '-100%', rotate: -45 }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{ top: '30%' }}
          />
          <motion.div
            className="absolute w-[200%] h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ x: '100%', rotate: -45 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
            style={{ top: '70%' }}
          />

          {/* 플로팅 파티클들 */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400 rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: 0,
                scale: 0
              }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                y: [null, Math.random() * -200]
              }}
              transition={{ 
                duration: 1.5,
                delay: Math.random() * 0.5,
                ease: 'easeOut'
              }}
            />
          ))}

          <div className="text-center relative z-10">
            {/* 로고 컨테이너 */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 15,
              }}
            >
              {/* 글로우 링 */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  scale: [0.8, 1.5, 1.8]
                }}
                transition={{ duration: 1, repeat: Infinity }}
                style={{
                  background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
                  filter: 'blur(20px)'
                }}
              />
              
              {/* 메인 로고 박스 */}
              <motion.div 
                className="relative w-28 h-28 mx-auto rounded-2xl flex items-center justify-center overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                  boxShadow: '0 0 60px rgba(99, 102, 241, 0.5)'
                }}
                animate={{
                  boxShadow: [
                    '0 0 60px rgba(99, 102, 241, 0.5)',
                    '0 0 80px rgba(139, 92, 246, 0.6)',
                    '0 0 60px rgba(99, 102, 241, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* 내부 글래스 효과 */}
                <div className="absolute inset-1 bg-gray-900/80 rounded-xl backdrop-blur-sm" />
                
                {/* JS 텍스트 */}
                <motion.span 
                  className="relative text-5xl font-black"
                  style={{
                    background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 30px rgba(165, 180, 252, 0.5)'
                  }}
                  animate={{
                    textShadow: [
                      '0 0 30px rgba(165, 180, 252, 0.5)',
                      '0 0 50px rgba(165, 180, 252, 0.8)',
                      '0 0 30px rgba(165, 180, 252, 0.5)'
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  JS
                </motion.span>
              </motion.div>
            </motion.div>

            {/* 이름 - 글자별 애니메이션 */}
            <div className="overflow-hidden mb-2">
              <motion.div className="flex justify-center gap-1">
                {nameLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    className="text-5xl md:text-6xl font-bold text-white inline-block"
                    initial={{ y: 100, opacity: 0 }}
                    animate={phase >= 1 ? { y: 0, opacity: 1 } : {}}
                    transition={{ 
                      duration: 0.4,
                      delay: i * 0.08,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* 직함 - 글자별 애니메이션 */}
            <div className="overflow-hidden">
              <motion.div className="flex justify-center">
                {titleLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    className="text-xl md:text-2xl font-medium text-indigo-300 inline-block"
                    initial={{ y: 50, opacity: 0 }}
                    animate={phase >= 1 ? { y: 0, opacity: 1 } : {}}
                    transition={{ 
                      duration: 0.3,
                      delay: 0.3 + i * 0.02,
                      ease: 'easeOut'
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* 로딩 바 */}
            <motion.div
              className="mt-10 mx-auto w-48 h-1 bg-gray-800 rounded-full overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)'
                }}
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* 로딩 퍼센트 */}
            <motion.div
              className="mt-3 text-gray-500 text-sm font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Counter />
            </motion.div>
          </div>

          {/* 코너 장식 */}
          <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-indigo-500/30" />
          <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-indigo-500/30" />
          <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-indigo-500/30" />
          <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-indigo-500/30" />

          <style jsx global>{`
            @keyframes gridMove {
              0% { transform: translate(0, 0); }
              100% { transform: translate(50px, 50px); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// 카운터 컴포넌트
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return <span>{count}%</span>;
}
