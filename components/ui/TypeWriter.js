import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const titles = [
  "프론트엔드 개발자",
  "성능 최적화 전문가", 
  "UX 엔지니어",
  "React/Next.js 개발자"
];

export default function TypeWriter({ className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    
    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(waitTimer);
    }

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        return;
      }
      const deleteTimer = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 50);
      return () => clearTimeout(deleteTimer);
    }

    if (displayText === currentTitle) {
      setIsWaiting(true);
      return;
    }

    const typeTimer = setTimeout(() => {
      setDisplayText(currentTitle.slice(0, displayText.length + 1));
    }, 100);

    return () => clearTimeout(typeTimer);
  }, [displayText, isDeleting, isWaiting, currentIndex]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[3px] h-[1em] bg-indigo-500 ml-1 align-middle"
      />
    </span>
  );
}
