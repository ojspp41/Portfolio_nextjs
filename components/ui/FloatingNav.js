import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Home', icon: '🏠' },
  { id: 'introduction', label: 'About', icon: '👤' },
  { id: 'projects', label: 'Projects', icon: '💼' },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 100px 이상이면 네비게이션 표시
      setIsVisible(window.scrollY > 100);

      // 현재 활성 섹션 감지
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4"
        >
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* 툴팁 */}
              <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {section.label}
              </span>
              
              {/* 도트 */}
              <motion.div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-indigo-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                animate={{
                  scale: activeSection === section.id ? 1.25 : 1,
                }}
              />
              
              {/* 활성 인디케이터 */}
              {activeSection === section.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 w-3 h-3 rounded-full border-2 border-indigo-500"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  style={{ scale: 2 }}
                />
              )}
            </motion.button>
          ))}
          
          {/* 연결선 */}
          <div className="absolute left-1.5 top-3 bottom-3 w-[1px] bg-gray-200 -z-10" />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
