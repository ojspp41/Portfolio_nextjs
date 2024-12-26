import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config/index.js";
import ProjectItem from "../components/projects/project-item";

export default function Projects({projects}) {

    console.log(projects);

    return (
        <Layout >
            <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
                <Head>
                    <title>JSEOK 포트폴리오</title>
                    <meta name="description" content="오늘도 빡코딩!" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className="text-4xl font-bold sm:text-6xl">
                    총 프로젝트 :
                    <span className="pl-4 text-blue-500">{projects.results.length}</span>
                </h1>

                <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
                    {projects.results.map((aProject) => (
                        <ProjectItem key={aProject.id} data={aProject}/>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

// 빌드 타임에 호출
// export async function getStaticProps() {

// 각 요청 때마다 호출
export async function getServerSideProps() {
    
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
        // 응답 데이터를 출력
        // 응답 데이터가 올바른지 확인
        if (!projects.results) {
            throw new Error('projects.results is undefined');
        }

        const projectNames = projects.results.map((aProject) => (
            aProject.properties.이름.title[0]?.text.content || "No Name"
        ));

        console.log(`Project names: ${projectNames.join(", ")}`);

        return {
            props: { projects },
        };
    } catch (error) {
        console.error(`Error fetching projects: ${error.message}`);
        return {
            props: { projects: { results: [] } }, // 기본값 설정
        };
    }
}

