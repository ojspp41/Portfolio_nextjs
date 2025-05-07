// pages/projects.tsx
import Layout from "../components/layout";
import Head from "next/head";
import ProjectItem from "../components/projects/project-item";
import projectData from "../data/projectData.js"; // JSON 형태의 목데이터

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="min-h-screen">
        <Head>
          <title>JSEOK 포트폴리오</title>
          <meta name="description" content="오늘도 빡코딩!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl text-gray-500 text-center my-8">
          ProJect: <span className="text-blue-300">{projects.length}</span>
        </h1>
        {projects.map((project, index) => (
          <ProjectItem data={project} key={project.id} index={index} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: { projects: projectData },
    revalidate: 3600,
  };
}
