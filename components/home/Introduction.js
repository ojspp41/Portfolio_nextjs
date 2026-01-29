import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
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

// Tech Stack 데이터
const techStacks = {
  frontend: {
    title: "Frontend",
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50",
    items: [
      { name: "React 19", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js 15", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ]
  },
  state: {
    title: "State & Data Fetching",
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50",
    items: [
      { name: "Zustand", icon: "https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg" },
      { name: "Recoil", icon: "https://recoiljs.org/img/logo.svg" },
      { name: "TanStack Query", icon: "https://tanstack.com/_build/assets/logo-color-600w-Bx4vtR8J.png" },
      { name: "WebSocket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
      { name: "STOMP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
    ]
  },
  testing: {
    title: "Testing & DevOps",
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-50 to-pink-50",
    items: [
      { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
      { name: "Playwright", icon: "https://playwright.dev/img/playwright-logo.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    ]
  },
  backend: {
    title: "Backend & Database",
    color: "from-orange-500 to-amber-600",
    bgColor: "from-orange-50 to-amber-50",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "AWS S3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ]
  }
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
            {/* 경력 */}
            <motion.div className="flex relative pb-12" variants={itemVariants}>
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 inline-flex items-center justify-center text-white relative z-10 shadow-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-xl text-gray-900 mb-3 tracking-wider">
                  경력
                </h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border-l-4 border-indigo-500">
                    <p className="font-bold text-indigo-700">한솔그룹 AI개발팀</p>
                    <p className="text-sm text-gray-500 mb-2">2025.10 ~ 현재 (재직 중)</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 프론트엔드 개발 (On-Premise)</li>
                      <li>• 1만 명 규모 LLM 서비스 총괄</li>
                      <li>• 5년 차 시니어 포지션 대체</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <p className="font-bold text-blue-700">삼성닷컴 QA 자동화</p>
                    <p className="text-sm text-gray-500 mb-2">2025.06 ~ 2025.09</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 프론트엔드 개발 인턴</li>
                      <li>• 96개국 글로벌 웹사이트 퍼블리싱</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 수상 경력 */}
            <motion.div className="flex relative pb-12" variants={itemVariants}>
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 inline-flex items-center justify-center text-white relative z-10 shadow-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M12 15l-2 5l9-13h-6l2-5l-9 13h6z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-xl text-gray-900 mb-3 tracking-wider">
                  수상 경력
                </h2>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">🏆</span>
                      <p className="font-bold text-orange-700">OSSCA 2025 우수상</p>
                    </div>
                    <p className="text-sm text-gray-600">과학기술정보통신부 장관상</p>
                    <p className="text-xs text-gray-500">Githru VSCode Extension 기여</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">🥈</span>
                      <p className="font-bold text-green-700">오픈소스 개발자 대회 우수작</p>
                    </div>
                    <p className="text-sm text-gray-600">직장인 부문</p>
                    <p className="text-xs text-gray-500">Favus - S3 멀티파트 업로드</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1.5 rounded-full">GGUM 해커톤 우수상</span>
                    <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full">ICPC 대회 우수상</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 학력 */}
            <motion.div className="flex relative pb-12" variants={itemVariants}>
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 inline-flex items-center justify-center text-white relative z-10 shadow-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-xl text-gray-900 mb-3 tracking-wider">
                  학력
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border-l-4 border-blue-500">
                  <p className="font-bold text-blue-700">가톨릭대학교</p>
                  <p className="text-sm text-gray-600">컴퓨터정보공학과</p>
                  <p className="text-sm text-gray-500">2020.03 - 2026.02 (졸업예정)</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">학점 4.09 / 4.5</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 동아리 활동 */}
            <motion.div className="flex relative pb-12" variants={itemVariants}>
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 inline-flex items-center justify-center text-white relative z-10 shadow-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-xl text-gray-900 mb-3 tracking-wider">
                  동아리 활동
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-3 rounded-lg text-center">
                    <p className="font-bold text-indigo-700 text-sm">COMA</p>
                    <p className="text-xs text-gray-600">IT 개발 동아리 (임원)</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-3 rounded-lg text-center">
                    <p className="font-bold text-pink-700 text-sm">COMATCHING</p>
                    <p className="text-xs text-gray-600">IT창업 동아리 (팀장)</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-3 rounded-lg text-center">
                    <p className="font-bold text-blue-700 text-sm">GDG CUK</p>
                    <p className="text-xs text-gray-600">구글 개발 동아리 (임원)</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-3 rounded-lg text-center">
                    <p className="font-bold text-green-700 text-sm">UMC</p>
                    <p className="text-xs text-gray-600">Node.js 파트</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 자격증/어학 */}
            <motion.div className="flex relative" variants={itemVariants}>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-green-600 inline-flex items-center justify-center text-white relative z-10 shadow-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-xl text-gray-900 mb-3 tracking-wider">
                  자격증/어학
                </h2>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">
                    정보처리기사
                  </span>
                  <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">
                    OPIc IH
                  </span>
                  <span className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full">
                    컴활 2급
                  </span>
                  <span className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full">
                    운전면허 1종
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 이미지 영역 */}
          <motion.img
            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-2xl md:mt-0 mt-12 filter brightness-90 blur-sm hover:brightness-100 hover:blur-0 transition duration-500 shadow-2xl"
            src="/profile.jpg"
            alt="portfolio illustration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
        </div>
      </div>

      {/* Tech Stack 섹션 - 확장된 버전 */}
      <div className="container px-5 pb-24 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tech Stack</h2>
          <p className="text-gray-600 text-lg">주로 사용하는 기술 스택입니다</p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(techStacks).map(([key, stack], idx) => (
            <motion.div
              key={key}
              className={`bg-gradient-to-br ${stack.bgColor} p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-shadow duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stack.color} flex items-center justify-center shadow-md`}>
                  <span className="text-white text-lg">
                    {key === 'frontend' && '🎨'}
                    {key === 'state' && '🔄'}
                    {key === 'testing' && '🧪'}
                    {key === 'backend' && '⚙️'}
                  </span>
                </div>
                <h3 className="font-bold text-xl text-gray-800">{stack.title}</h3>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {stack.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.name}
                    className="flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + itemIdx * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center p-2 group-hover:shadow-lg transition-shadow">
                      <img 
                        src={item.icon} 
                        alt={item.name} 
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<span class="text-2xl">${item.name.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 mt-2 text-center font-medium">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 연락처 섹션 - 확장된 버전 */}
      <div className="container px-5 pb-24 mx-auto">
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* 배경 그라데이션 - 더 연한 색상 */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/90 via-purple-400/90 to-pink-400/90 rounded-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
          
          <div className="relative p-12 text-gray-700">
            <div className="text-center mb-10">
              <motion.h2 
                className="text-4xl font-bold mb-4 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Contact Me
              </motion.h2>
              <p className="text-gray-600 text-lg">언제든 연락주세요!</p>
            </div>

            {/* 연락처 카드들 */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {/* 이메일 카드 */}
              <motion.a
                href="mailto:ojspp000@naver.com"
                className="bg-white/40 backdrop-blur-md rounded-2xl p-6 hover:bg-white/60 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Email</h3>
                <p className="text-gray-600 text-sm">ojspp000@naver.com</p>
                <p className="text-gray-500 text-sm">ojsppppppp41@gmail.com</p>
              </motion.a>

              {/* 전화 카드 */}
              <motion.a
                href="tel:010-7593-4447"
                className="bg-white/40 backdrop-blur-md rounded-2xl p-6 hover:bg-white/60 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Phone</h3>
                <p className="text-gray-600 text-sm">010-7593-4447</p>
                <p className="text-gray-500 text-sm">전화 & 문자 가능</p>
              </motion.a>

              {/* 위치 카드 */}
              <motion.div
                className="bg-white/40 backdrop-blur-md rounded-2xl p-6 group"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Location</h3>
                <p className="text-gray-600 text-sm">경기도 시흥시</p>
                <p className="text-gray-500 text-sm">이사 가능</p>
              </motion.div>
            </div>

            {/* 소셜 링크 버튼들 */}
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://github.com/ojspp41"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </motion.a>
              <motion.a
                href="https://portfolio-nextjs-puce-pi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
                Portfolio
              </motion.a>
              <motion.a
                href="https://open.kakao.com/o/sVInUI6g"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c-5.52 0-10 3.58-10 8 0 2.84 1.88 5.34 4.7 6.76-.2.73-.76 2.64-.87 3.05-.14.52.19.51.4.37.17-.11 2.61-1.78 3.67-2.5.69.1 1.4.15 2.1.15 5.52 0 10-3.58 10-8s-4.48-8-10-8z"/>
                </svg>
                KakaoTalk
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
