import Image from "next/image";
import {FaGithub, FaYoutube} from "react-icons/fa";
import TechStackTag from "./TechStackTag";
export default function ProjectItem({data}) {
    console.log(data);
    const title = data.properties
        ?.이름
            ?.title
                ?.[0]
                    ?.plain_text || "제목 없음";
    const github = data.properties
        ?.gitHub
            ?.url || "#";
    const youtube = data.properties
        ?.Youtube
            ?.url || "#";
    const description = data.properties
        ?.요약
            ?.rich_text
                ?.[0]
                    ?.plain_text || "설명 없음";
    const imgSrc = data.cover
        ?.file
            ?.url || data.cover
                ?.external
                    ?.url || "/default-image.jpg";
    const tags = data.properties
        ?.["다중 선택"]
            ?.multi_select || [];
    const 담당 = data.properties
    ?.담당
        ?.rich_text
            ?.[0]
                ?.plain_text || "담당자 없음";

    const des = data.properties
        ?.설명
            ?.rich_text
                ?.[0]
                    ?.plain_text || "설명 없음";

    
    return (
        <div
            className="relative max-w-sm mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 group min-h-[550px] flex flex-col">

            {/* Project Image */}
            <div className="flex justify-center p-4">
                <div className="w-1/2 relative">
                    <Image className="rounded-lg filter dark:brightness-75 brightness-95" src={imgSrc} alt="cover image" width={300}
                        // 원하는 크기로!
                        height={200} style={{
                            objectFit: "cover",
                            background: "transparent"
                        }} quality={100}/>
                </div>
            </div>

            {/* Overlay Description */}
            <div
                className="absolute inset-0 bg-gray-800 bg-opacity-70 text-white flex items-start justify-start p-4 text-base font-bold opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {des}
            </div>

            {/* Project Details */}
            <div className="p-6 flex-1 flex flex-col justify-between justify-between items-center text-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{title}</h1>
                    <p className="mb-2">{description}</p>
                    <p className="my-3 text-lg font-semibold text-gray-800 dark:text-white">
                        담당: {담당}
                    </p>



                    <div className="flex flex-wrap gap-2 mt-4 z-0 ">
                    {tags.map((tag) => (
                        <TechStackTag name={tag.name} id={tag.id} key={tag.id} />
                    ))}
                    </div>
                </div>

                <div className="flex items-center mt-4 space-x-3">
                    <a
                        href={github}
                        className="relative z-10 flex items-center px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-200"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaGithub className="mr-2"/>
                        깃허브
                    </a>
                    <a
                        href={youtube}
                        className="relative z-10 flex items-center px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base bg-red-400 text-white rounded-md hover:bg-red-500 transition duration-200"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaYoutube className="mr-2"/>
                        유튜브
                    </a>
                </div>
            </div>
        </div>

    );
}
