import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config/index.js";
import ProjectItem from "../components/projects/project-item";

export default function Projects({ projects }) {
    console.log(projects);

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
                <Head>
                    <title>JSEOK 포트폴리오</title>
                    <meta name="description" content="오늘도 빡코딩!" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className="text-4xl text-gray-500  sm:text-6xl">
                    ProJect :
                    <span className="pl-4 text-blue-300">{projects.results.length}</span>
                </h1>

                <div className="grid grid-cols-1 gap-8 p-12 m-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {projects.results.map((aProject, index) => (
                        <div
                            key={aProject.id}
                            className="relative transition-transform duration-500 ease-in-out transform opacity-0 translate-y-10 animate-fade-in"
                        >
                            {/* Numbering Badge */}
                            <span className="absolute top-2 left-2 bg-blue-500 text-white text-sm font-bold rounded-full px-2 py-1">
                                {index + 1}
                            </span>
                            {/* Project Item */}
                            <ProjectItem data={aProject} />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

// 서버사이드 렌더링에서 데이터 가져오기
export async function getStaticProps() {
    const options = {
        method: 'POST',
        headers: {
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
            page_size: 100,
        }),
    };

    try {
        const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);

        if (!res.ok) {
            throw new Error(`Failed to fetch projects: ${res.status} ${res.statusText}`);
        }

        const projects = await res.json();

        if (!projects.results) {
            throw new Error('projects.results is undefined');
        }

        return {
            props: { projects },
            revalidate: 3600, // 60초마다 재빌드 (원하는 시간으로 조정 가능)
        };
    } catch (error) {
        console.error(`Error fetching projects: ${error.message}`);
        return {
            props: { projects: { results: [] } },
            revalidate: 3600, // 에러 발생해도 60초 후 재시도
        };
    }
}
