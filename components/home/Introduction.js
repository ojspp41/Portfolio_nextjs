import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // 자식 애니메이션 간격 (0.3초)
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Introduction() {
  return (
    <section id="introduction" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          {/* 타임라인 영역 (왼쪽 부분) */}
          <motion.div 
            className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* 학력 */}
            <motion.div className="flex relative pb-12" variants={itemVariants}>
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-lg text-gray-900 mb-1 tracking-wider">
                  학력
                </h2>
                <p className="leading-relaxed">
                  2020~ 가톨릭대 컴퓨터 정보공학과 재학 <br />
                  학점: 전체 평점 4.09, 전공 평점 4.15
                </p>
              </div>
            </motion.div>

            {/* 동아리 활동 */}
            <motion.div className="flex relative pb-12" variants={itemVariants}>
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-lg text-gray-900 mb-1 tracking-wider">
                  동아리 활동
                </h2>
                <p className="leading-relaxed">
                  Google Developer GOC (3-2학기 Core Member) <br />
                  COMATCHING 창업동아리 (FrontEnd 팀장) <br />
                  COMA (교내 개발 동아리)
                </p>
              </div>
            </motion.div>

            {/* 경험 */}
            <motion.div className="flex relative pb-12" variants={itemVariants}>
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-lg text-gray-900 mb-1 tracking-wider">
                  경험
                </h2>
                <p className="leading-relaxed">
                  네이버 스마트스토어 ‘자판기 마을’ 운영 <br />
                  최대 월 매출 600만원
                </p>
              </div>
            </motion.div>

            {/* 수상 경력 */}
            <motion.div className="flex relative pb-12" variants={itemVariants}>
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-lg text-gray-900 mb-1 tracking-wider">
                  수상 경력
                </h2>
                <p className="leading-relaxed">
                  교내 ICPC 대회 은상 <br />
                  GGUM 교내 해커톤 우수상
                </p>
              </div>
            </motion.div>

            {/* 자격증/어학 */}
            <motion.div className="flex relative" variants={itemVariants}>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 2a6 6 0 016 6v1a6 6 0 01-6 6H8a6 6 0 01-6-6V8a6 6 0 016-6h8z"></path>
                  <path d="M12 14v7"></path>
                  <path d="M8 18h8"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-lg text-gray-900 mb-1 tracking-wider">
                  자격증/어학
                </h2>
                <p className="leading-relaxed">
                  
                  자격증:  컴퓨터 활용능력 2급 ,운전면허 1종 보통
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* 이미지 영역 */}
          <motion.img
            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 filter brightness-90 blur-sm hover:brightness-100 hover:blur-0 transition duration-300"
            src="/profile.jpg"
            alt="portfolio illustration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
}
