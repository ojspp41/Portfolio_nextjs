import React from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import DarkModeToggleButton from './dark-mode-toggle-button';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// dynamic import를 통해 SSR을 비활성화합니다.
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

import lottieJson from '/public/profile.json';

export default function Header() {
    return (
        <header className="text-gray-600 body-font bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:bg-gray-800 dark:bg-none">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                <Link href="/">
                    <a className="flex title-font font-medium items-center text-gray-900 dark:text-gray-100 mb-4 md:mb-0">
                        <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center overflow-hidden">
                            {/* Lottie Player */}
                            <Lottie
                                loop
                                animationData={lottieJson}
                                play
                                style={{ width: 100, height: 100 }}
                            />
                        </div>
                        <span className="ml-3 text-2xl font-bold">J`SEOK PortFolio</span>
                    </a>
                </Link>

                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-5" // 아래 간격 추가
                    >
                        <Link href="/">
                            <a className="mr-5 px-4 py-2 font-bold text-gray-700 bg-opacity-50 bg-white dark:bg-opacity-20 dark:bg-gray-700 rounded-lg shadow-md hover:bg-opacity-75 hover:shadow-lg transition-all duration-300">
                                🏠 홈
                            </a>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-5" // 아래 간격 추가
                    >
                        <Link href="/projects">
                            <a className="mr-5 px-4 py-2 font-bold text-gray-700 bg-opacity-50 bg-white dark:bg-opacity-20 dark:bg-gray-700 rounded-lg shadow-md hover:bg-opacity-75 hover:shadow-lg transition-all duration-300">
                                💻 프로젝트
                            </a>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-5" // 아래 간격 추가
                    >
                        <a 
                            href="https://open.kakao.com/o/sVInUI6g" 
                            className="mr-5 px-4 py-2 font-bold text-gray-700 bg-opacity-50 bg-white dark:bg-opacity-20 dark:bg-gray-700 rounded-lg shadow-md hover:bg-opacity-75 hover:shadow-lg transition-all duration-300"
                        >
                            ✉️ 연락하기
                        </a>
                    </motion.div>

                    {/* 프로필로 스크롤 이동 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mb-5" // 아래 간격 추가
                    >
                        <ScrollLink 
                            to="introduction" 
                            smooth={true} 
                            duration={500} 
                            className="mr-5 px-4 py-2 font-bold text-gray-700 bg-opacity-50 bg-white dark:bg-opacity-20 dark:bg-gray-700 rounded-lg shadow-md hover:bg-opacity-75 hover:shadow-lg transition-all duration-300 cursor-pointer"
                        >
                            🙋‍♂️ 프로필
                        </ScrollLink>
                    </motion.div>
                </nav>

                <DarkModeToggleButton />
            </div>
        </header>
    );
}
