import Image from "next/image";

export default function ProjectItem({data}){

    const title =
        data.properties?.이름?.title?.[0]?.plain_text || "제목 없음"; // '이름' 필드에서 제목 추출
    const github = data.properties?.gitHub?.url || "#"; // 'gitHub' URL
    const youtube = data.properties?.Youtube?.url || "#"; // 'Youtube' URL
    const description =
        data.properties?.설명?.rich_text?.[0]?.plain_text || "설명 없음"; // '설명' 필드에서 텍스트 추출
    const imgSrc =
        data.cover?.file?.url || data.cover?.external?.url || "/default-image.jpg"; // 이미지 URL
    const tags = data.properties?.["다중 선택"]?.multi_select || []; // '다중 선택' 필드
    const start = data.properties?.날짜?.date?.start || "시작일 없음"; // '날짜' 필드에서 시작일
    const end = data.properties?.날짜?.date?.end || "종료일 없음"; // '날짜' 필드에서 종료일

    

    const calculatedPeriod = (start, end) => {
        if (!start || !end) return "알 수 없음";

        const startDate = new Date(start);
        const endDate = new Date(end);
        const diffInMs = Math.abs(endDate - startDate);
        const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

        return `${diffInDays}일`;
    };

    return (
        <div className="project-card">
            <Image
                className="rounded-t-xl"
                src={imgSrc}
                alt="cover image"
                width="100%"
                height="50%"
                layout="responsive"
                objectFit="cover"
                quality={100}
            />

            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <a href={github}>깃허브 바로가기</a>
                <a href={youtube}>유튜브 시연영상 보러가기</a>
                <p className="my-1 ">
                    작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)})
                </p>
                <div className="flex items-start mt-2">
                    {tags.map((aTag) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                    ))}
                </div>

            </div>

        </div>
    );
}
