import Image from "next/image";
import {motion} from "framer-motion";

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
        <motion.section className="text-gray-600 body-font" initial="hidden" whileInView="visible" viewport={{
                once: true,
                amount: 0.3
            }} variants={itemVariants} custom={index}
            // index를 custom 값으로 전달하여 방향 제어
        
        
    >
            <div
                className="container mx-auto flex flex-col md:flex-row px-5 py-24 items-center rounded-lg transition-shadow duration-300 border-b border-gray-300">
                {/* 왼쪽 이미지 */}
                <div
                    className="md:mr-8 relative w-full md:w-1/2 h-64 md:h-96 mb-10 md:mb-0 overflow-hidden rounded-lg">
                    <Image
                        src={imgSrc}
                        alt="cover image"
                        fill
                        className="object-contain object-center"/>
                </div>
                {/* 오른쪽 텍스트 */}
                <div className="flex flex-col md:w-1/2 text-center md:text-left">
                <h1 className="title-font text-xl sm:text-5xl font-bold text-gray-900 mb-4 border-b-4 border-black-500 pb-2">
                    {title}
                </h1>

                    <p className="mb-6 leading-relaxed">{description}</p>
                    <p className="mb-4 text-lg font-extrabold text-gray-700 ">담당: {담당}</p>
                    {
                        tags.length > 0 && (
                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                            {tags.map((tag) => (
                                <span
                                key={tag.id}
                                className="bg-blue-100 text-black-900 font-bold py-1 px-3 rounded-full border border-blue-400 shadow-md"
                                >
                                {tag.name}
                                </span>
                            ))}
                            </div>
                        )
                    }

                    {introduction && (<p className="mb-6 leading-relaxed">{introduction}</p>)}
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="GitHub 아이콘"
                                className="w-5 h-5 mr-2"
                            />
                            깃허브
                        </a>
                        <a
                            href={youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">
                             <img
                                src="https://www.svgrepo.com/show/13671/youtube.svg"
                                alt="YouTube 아이콘"
                                className="w-5 h-5 mr-2"
                            />
                            유튜브
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
