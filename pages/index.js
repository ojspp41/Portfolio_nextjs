import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/home/hero';
import Introduction from '../components/home/Introduction';
import ProjectItem from '../components/projects/project-item';
import { TOKEN, DATABASE_ID } from '../config/index.js';
import projectData from '../data/projectData';

// 빌드 시 데이터 가져오기 (ISR)
export async function getStaticProps() {
  // Notion API 대신 목데이터 사용
  const projects = { results: projectData };

  return {
    props: { projects },
    revalidate: 3600, // 원래처럼 ISR 구조 유지 가능
  };
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

      <Introduction />

      <section className="min-h-screen" id="projects">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 my-12 tracking-tight">
          전체 {projects.results.length}개의 프로젝트
        </h1>

        <hr className="w-full border-t-2 border-gray-300" />

        {projects.results.map((aProject, index) => (
          <ProjectItem data={aProject} key={aProject.id} index={index} />
        ))}
      </section>
    </Layout>
  );
}
