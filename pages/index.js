import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/home/hero';
import Introduction from '../components/home/Introduction';
import ProjectItem from '../components/projects/project-item';
import { TOKEN, DATABASE_ID } from '../config/index.js';
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

export default function Home({ projects }) {
  return (
    <Layout>
      <Head>
        <title>JSEOK 포트폴리오</title>
        <meta name="description" content="오늘도 코딩!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center justify-center pt-0">
          <Hero />
        </div>
      </section>

      {/* 자기소개 컴포넌트 추가 */}
      <Introduction />

      {/* 프로젝트 리스트 섹션 추가 */}
      <section className="min-h-screen">
        <h1 className="text-4xl text-gray-500 text-center my-8">
          ProJect: <span className="text-blue-300">{projects.results.length}</span>
        </h1>
        {projects.results.map((aProject, index) => (
          <ProjectItem data={aProject} key={aProject.id} index={index} />
        ))}
      </section>
    </Layout>
  );
}

