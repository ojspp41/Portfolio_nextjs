import Animation from "./animation";
import Link from 'next/link';
import {motion} from "framer-motion";

export default function Hero() {

    return (
        <section className="text-gray-600 body-font">
            <div
                className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center pt-0 pb-0">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Animation/>
                </div>
                <div
                    className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <motion.h1
                        className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-indigo-500 dark:text-white"
                        initial={{
                            opacity: 0,
                            y: -50
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 1
                        }}>
                        안녕하세요, 프론트엔드 개발자 오준석입니다
                        <br className="hidden lg:inline-block"/>
                        대용량 트래픽 최적화와 안정적인 아키텍처 설계를 주도합니다
                    </motion.h1>
                    <motion.p
                        className="mb-8 leading-relaxed text-gray-700 dark:text-gray-300"
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 1
                        }}>
                        한솔그룹 AI 개발팀에서 5년 차 시니어 포지션을 대체하며, 
                        <span className="font-bold text-indigo-600"> 13개 계열사·1만 명 규모의 LLM 서비스</span> 프론트엔드 총괄 및 런칭을 성공적으로 완수했습니다.
                        <br /><br />
                        <span className="font-semibold">Next.js 15, React 19, TypeScript</span> 기반의 엔터프라이즈 애플리케이션 개발과
                        <span className="font-semibold"> 실시간 스트리밍 렌더링 최적화</span>에 강점이 있습니다.
                    </motion.p>
                    <motion.div
                        className="flex flex-wrap justify-center md:justify-start gap-2 mb-6"
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{
                            delay: 0.8,
                            duration: 1
                        }}>
                        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">OSSCA 2025 우수상 (장관상)</span>
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">오픈소스 개발자 대회 우수작</span>
                        <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">정보처리기사</span>
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">OPIc IH</span>
                    </motion.div>
                    <motion.div
                        className="flex justify-center"
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{
                            delay: 1,
                            duration: 1
                        }}>
                        <Link
                            href="#projects"
                            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            View My Projects
                        </Link>
                        <Link
                            href="https://github.com/ojspp41"
                            target="_blank"
                            className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            GitHub
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
