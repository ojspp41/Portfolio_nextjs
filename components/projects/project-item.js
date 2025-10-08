import Image from "next/image";
import {motion} from "framer-motion";
import Link from 'next/link';
// index에 따라 방향을 달리하는 커스텀 애니메이션 변형
const itemVariants = {
    hidden: (custom) => ({
        opacity: 0,
        y: custom % 2 === 0
            ? -50
            : 50,
        scale: 0.9
    }),
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            stiffness: 100,
            damping: 10
        }
    }
};

export default function ProjectItem({data, index}) {
    // 프로젝트 데이터 추출
    const title = data.properties
        ?.이름
            ?.title
                ?.[0]
                    ?.plain_text || "제목 없음";
    const description = data.properties
        ?.요약
            ?.rich_text
                ?.[0]
                    ?.plain_text || "설명 없음";
    const introduction = data.properties
        ?.설명
            ?.rich_text
                ?.[0]
                    ?.plain_text || "";
    const 담당 = data.properties
        ?.담당
            ?.rich_text
                ?.[0]
                    ?.plain_text || "담당자 없음";
    const tags = data.properties
        ?.["다중 선택"]
            ?.multi_select || [];
    const imgSrc = data.cover
        ?.file
            ?.url || data.cover
                ?.external
                    ?.url || "/default-image.jpg";
    const github = data.properties
        ?.gitHub
            ?.url || "#";
    const youtube = data.properties
        ?.Youtube
            ?.url || "#";

    return (
        <motion.section className="text-gray-600  dark:bg-gray-800 body-font" initial="hidden" whileInView="visible" viewport={{
                once: true,
                amount: 0.3
            }} variants={itemVariants} custom={index}
        >
            <div className="container mx-auto flex flex-col md:flex-row px-5 py-16 items-center rounded-2xl transition-all duration-300 hover:shadow-lg  mb-8 border border-gray-100 dark:border-gray-700">
                {/* 왼쪽 이미지 - 마진 조정 옵션들 */}
                <Link href={`/projects/${data.id}`}>
                    <div
                        className="md:mr-0 relative w-full md:w-3/4 h-64 md:h-96 mb-10 md:mb-0 overflow-hidden rounded-xl cursor-pointer group transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        {/* 옵션 1: 마진 제거 - md:mr-0 */}
                        {/* 옵션 2: 마진 줄이기 - md:mr-4 */}
                        {/* 옵션 3: 패딩으로 변경 - md:pr-4 */}
                        <Image
                            src={imgSrc}
                            alt="cover image"
                            width={500}
                            height={500}
                            className="object-cover rounded-xl group-hover:brightness-110 transition-all duration-300"
                            />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300  bg-opacity-90 px-4 py-2 rounded-full text-gray-800">
                                자세히 보기 →
                            </div>
                        </div>
                    </div>
                </Link>
                {/* 오른쪽 텍스트 - 추가 패딩 옵션 */}
                <div className="flex flex-col md:w-1/2 text-center md:text-left md:pl-8">
                    {/* 텍스트 영역에 왼쪽 패딩 추가로 간격 조절 가능 - md:pl-8 */}
                <Link href={`/projects/${data.id}`}>
                    <h1 className="title-font text-xl sm:text-4xl text-gray-900 mb-6 cursor-pointer hover:text-blue-600 transition-colors duration-300 leading-tight">
                        {title}
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3"></div>
                    </h1>
                </Link>

                    <p className="mb-6 leading-relaxed text-gray-600 text-lg">{description}</p>
                    <div className="mb-6 inline-block bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                        <span className="text-blue-800">👨‍💻 {담당}</span>
                    </div>
                    {
                        tags.length > 0 && (
                            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                            {tags.map((tag) => (
                                <span
                                key={tag.id}
                                className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-2 px-4 rounded-full border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-200 text-sm"
                                >
                                {tag.name}
                                </span>
                            ))}
                            </div>
                        )
                    }

                        {introduction && (
                        <div className="mb-6 leading-relaxed whitespace-pre-line">
                            {introduction.split('\n').map((line, idx) => (
                            <p key={idx} className="mb-2">{line}</p>
                            ))}
                        </div>
                        )}

                    <div className="flex justify-center md:justify-start space-x-4">
                        {github !== "#" && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-white bg-gray-800 hover:bg-gray-700 border-0 py-3 px-6 focus:outline-none rounded-lg text-base transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                </svg>
                                GitHub
                            </a>
                        )}
                        {youtube !== "#" && youtube !== "" && (
                            <a
                                href={youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-white bg-red-500 hover:bg-red-600 border-0 py-3 px-6 focus:outline-none rounded-lg text-base transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                                Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}