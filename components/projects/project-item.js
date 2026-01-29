import Image from "next/image";
import {motion} from "framer-motion";
import TiltCard from "../ui/TiltCard";

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
            ?.url || "";
    const youtube = data.properties
        ?.Youtube
            ?.url || "";

    // 인덱스에 따라 좌우 배치 변경
    const isEven = index % 2 === 0;

    return (
        <motion.section 
            className="text-gray-600 body-font overflow-hidden" 
            initial="hidden" 
            whileInView="visible" 
            viewport={{
                once: true,
                amount: 0.2
            }} 
            variants={itemVariants} 
            custom={index}
        >
            <div className={`container mx-auto flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} px-5 py-16 items-center gap-8 border-b border-gray-200`}>
                
                {/* 이미지 영역 - 3D 틸트 카드 적용 */}
                <TiltCard className="w-full md:w-1/2">
                    <motion.div 
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* 배경 그라데이션 효과 */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
                        
                        {/* 메인 이미지 컨테이너 */}
                        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 shadow-2xl">
                            {/* 상단 윈도우 버튼들 */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-4 text-gray-400 text-sm font-mono truncate">{title}</span>
                            </div>
                            
                            {/* 이미지 */}
                            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-700">
                                <Image
                                    src={imgSrc}
                                    alt={title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                
                                {/* 호버 오버레이 */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <div className="flex gap-3">
                                        {github && (
                                            <a
                                                href={github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
                                                GitHub
                                            </a>
                                        )}
                                        {youtube && (
                                            <a
                                                href={youtube}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-red-500/90 hover:bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                                </svg>
                                                Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            {/* 하단 인덱스 표시 */}
                            <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                        </div>
                    </motion.div>
                </TiltCard>

                {/* 텍스트 영역 */}
                <div className={`flex flex-col md:w-1/2 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
                    {/* 담당 뱃지 */}
                    <motion.span 
                        className="inline-flex items-center self-start bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4 shadow-md"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {담당}
                    </motion.span>

                    {/* 제목 */}
                    <h1 className="title-font text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        {title}
                    </h1>

                    {/* 요약 */}
                    <p className="text-lg text-indigo-600 font-medium mb-4">{description}</p>

                    {/* 기술 스택 태그 */}
                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {tags.map((tag) => (
                                <span
                                    key={tag.id}
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-1.5 px-3 rounded-lg text-sm transition-colors border border-gray-200"
                                >
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* 상세 설명 */}
                    {introduction && (
                        <div className="bg-gray-50 rounded-xl p-5 mb-6 border-l-4 border-indigo-500">
                            <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line max-h-64 overflow-y-auto custom-scrollbar">
                                {introduction.split('\n').map((line, idx) => (
                                    <p key={idx} className={`${line.startsWith('•') || line.startsWith('-') ? 'ml-2' : ''} ${line.startsWith('[') ? 'font-semibold text-gray-900 mt-3 first:mt-0' : 'mb-1'}`}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 버튼 그룹 */}
                    <div className="flex flex-wrap gap-3">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="magnetic-btn inline-flex items-center text-white bg-gray-800 hover:bg-gray-900 border-0 py-2.5 px-5 focus:outline-none rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                                GitHub
                            </a>
                        )}
                        {youtube && (
                            <a
                                href={youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="magnetic-btn inline-flex items-center text-white bg-red-500 hover:bg-red-600 border-0 py-2.5 px-5 focus:outline-none rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg"
                            >
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
