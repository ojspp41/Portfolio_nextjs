import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config/index.js";
import ProjectItem from "../components/projects/project-item";

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="min-h-screen">
        <Head>
          <title>JSEOK 포트폴리오</title>
          <meta name="description" content="오늘도 빡코딩!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* 전체 프로젝트 개수 표시 */}
        <h1 className="text-4xl text-gray-500 text-center my-8">
          ProJect: <span className="text-blue-300">{projects.results.length}</span>
        </h1>
        {/* 각 프로젝트 항목 렌더링 */}
        {projects.results.map((aProject, index) => (
          <ProjectItem data={aProject} key={aProject.id} index={index} />
        ))}
      </div>
    </Layout>
  );
}

// 빌드 시 데이터 가져오기 (ISR)
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
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
      throw new Error("projects.results is undefined");
    }

    return {
      props: { projects },
      revalidate: 3600, // 1시간마다 재빌드
    };
  } catch (error) {
    console.error(`Error fetching projects: ${error.message}`);
    return {
      props: { projects: { results: [] } },
      revalidate: 3600,
    };
  }
}
