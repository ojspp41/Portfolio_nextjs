// pages/projects/index.js
import Layout from "../../components/layout";
import Head from "next/head";
import ProjectItem from "../../components/projects/project-item";
import projectData from "../../data/projectData.js";

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="min-h-screen  from-gray-800 py-8 ">
        <Head>
          <title>Projects - JSEOK 포트폴리오</title>
          <meta name="description" content="다양한 프로젝트들을 확인해보세요!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container mx-auto px-6  dark:bg-gray-800">
          <div className="text-center mb-16  dark:bg-gray-800 ">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 mb-4">
              총 <span className="font-bold text-blue-600">{projects.length}</span>개의 프로젝트
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              각 프로젝트를 클릭하면 상세 정보를 확인할 수 있습니다.
            </p>
          </div>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectItem data={project} key={project.id} index={index} />
            ))}
          </div>
        </div>
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