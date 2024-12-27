import Image from "next/image";
import { FaGithub, FaYoutube } from "react-icons/fa";

export default function ProjectItem({ data }) {
    const title = data.properties?.이름?.title?.[0]?.plain_text || "제목 없음";
    const github = data.properties?.gitHub?.url || "#";
    const youtube = data.properties?.Youtube?.url || "#";
    const description =
        data.properties?.요약?.rich_text?.[0]?.plain_text || "설명 없음";
    const imgSrc =
        data.cover?.file?.url || data.cover?.external?.url || "/default-image.jpg";
    const tags = data.properties?.["다중 선택"]?.multi_select || [];
    const start = data.properties?.날짜?.date?.start || "시작일 없음";
    const end = data.properties?.날짜?.date?.end || "종료일 없음";
    const des =
        data.properties?.설명?.rich_text?.[0]?.plain_text || "설명 없음";

    const calculatedPeriod = (start, end) => {
        if (!start || !end) return "알 수 없음";

        const startDate = new Date(start);
        const endDate = new Date(end);
        const diffInMs = Math.abs(endDate - startDate);
        const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

        return `${diffInDays}일`;
    };

    return (
        <div className="relative max-w-sm mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 group">
            {/* Project Image */}
            <Image
                className="rounded-t-lg filter dark:brightness-75 brightness-95"
                src={imgSrc}
                alt="cover image"
                width="100%"
                height="50%"
                layout="responsive"
                objectFit="cover"
                quality={100}
            />

            {/* Overlay Description */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-70 text-white flex items-start justify-start p-4 text-base font-bold opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {des}
            </div>


            {/* Project Details */}
            <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{title}</h1>
                <p>{description}</p>
                <p className="my-3 text-gray-600 dark:text-gray-300">
                    작업기간: {start} ~ {end} ({calculatedPeriod(start, end)})
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag) => (
                        <span
                            className="px-3 py-1 bg-teal-50 dark:bg-teal-800 text-sm text-teal-900 dark:text-teal-100 rounded-md"
                            key={tag.id}
                        >
                            {tag.name}
                        </span>
                    ))}
                </div>

                <div className="flex items-center mt-4 space-x-3">
                    <a
                        href={github}
                        className="relative z-10 flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="mr-2" /> 깃허브
                    </a>
                    <a
                        href={youtube}
                        className=" relative z-10 flex items-center px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500 transition duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube className="mr-2" /> 유튜브
                    </a>
                </div>
            </div>
        </div>
    );
}
