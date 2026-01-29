import Animation from "./animation";
import Link from 'next/link';
import {motion} from "framer-motion";
import ParticleBackground from "../ui/ParticleBackground";
import MagneticButton from "../ui/MagneticButton";
import TypeWriter from "../ui/TypeWriter";

export default function Hero() {

    return (
        <section id="hero" className="text-gray-600 body-font relative min-h-screen flex items-center">
            {/* 파티클 배경 */}
            <ParticleBackground />
            
            <div
                className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center pt-0 pb-0 relative z-10">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Animation/>
                </div>
                <div
                    className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    
                    {/* 인사말 + 타이핑 애니메이션 */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-2"
                    >
                        <span className="text-indigo-500 font-medium text-lg">안녕하세요, 저는</span>
                    </motion.div>
                    
                    <motion.h1
                        className="title-font text-4xl sm:text-5xl lg:text-6xl mb-2 font-bold text-gray-900 dark:text-white"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        오준석
                    </motion.h1>
                    
                    {/* 타이핑 애니메이션 */}
                    <motion.div
                        className="text-2xl sm:text-3xl font-semibold text-indigo-500 mb-6 h-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <TypeWriter />
                    </motion.div>

                    <motion.p
                        className="mb-8 leading-relaxed text-gray-700 dark:text-gray-300 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 1 }}
                    >
                        한솔그룹 AI 개발팀에서 5년 차 시니어 포지션을 대체하며, 
                        <span className="font-bold text-indigo-600"> 13개 계열사·1만 명 규모의 LLM 서비스</span> 프론트엔드 총괄 및 런칭을 성공적으로 완수했습니다.
                    </motion.p>
                    
                    <motion.p
                        className="mb-8 leading-relaxed text-gray-600 dark:text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 1 }}
                    >
                        <span className="font-semibold">Next.js 15, React 19, TypeScript</span> 기반의 엔터프라이즈 애플리케이션 개발과
                        <span className="font-semibold"> 실시간 스트리밍 렌더링 최적화</span>에 강점이 있습니다.
                    </motion.p>
                    
                    <motion.div
                        className="flex flex-wrap justify-center md:justify-start gap-2 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                    >
                        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm">OSSCA 2025 우수상 (장관상)</span>
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm">오픈소스 개발자 대회 우수작</span>
                        <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm">정보처리기사</span>
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm">OPIc IH</span>
                    </motion.div>
                    
                    <motion.div
                        className="flex justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                    >
                        <MagneticButton>
                            <Link
                                href="#projects"
                                className="inline-flex items-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 border-0 py-3 px-8 focus:outline-none hover:from-indigo-600 hover:to-purple-700 rounded-xl text-lg font-medium shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                View Projects
                            </Link>
                        </MagneticButton>
                        <MagneticButton>
                            <Link
                                href="https://github.com/ojspp41"
                                target="_blank"
                                className="inline-flex items-center text-gray-700 bg-white border-2 border-gray-200 py-3 px-8 focus:outline-none hover:border-indigo-300 hover:bg-gray-50 rounded-xl text-lg font-medium shadow-lg transition-all duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                                GitHub
                            </Link>
                        </MagneticButton>
                    </motion.div>
                    
                    {/* 스크롤 다운 인디케이터 */}
                    <motion.div
                        className="mt-16 hidden md:flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
