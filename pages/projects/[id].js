import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../../components/layout';
import projectData from '../../data/projectData.js';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function ProjectDetail({ project }) {
    const router = useRouter();

    if (router.isFallback) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-2xl text-gray-600 dark:text-gray-300">Loading...</div>
                </div>
            </Layout>
        );
    }

    if (!project) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">프로젝트를 찾을 수 없습니다</h1>
                        <Link href="/projects" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
                            프로젝트 목록으로 돌아가기
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }

    const title = project.properties?.이름?.title?.[0]?.plain_text || "제목 없음";
    const summary = project.properties?.요약?.rich_text?.[0]?.plain_text || "요약 없음";
    const description = project.properties?.설명?.rich_text?.[0]?.plain_text || "";
    const role = project.properties?.담당?.rich_text?.[0]?.plain_text || "담당자 없음";
    const tags = project.properties?.["다중 선택"]?.multi_select || [];
    const imgSrc = project.cover?.file?.url || project.cover?.external?.url || "/default-image.jpg";
    const github = project.properties?.gitHub?.url || "#";
    const youtube = project.properties?.Youtube?.url || "#";

    return (
        <Layout>
            <Head>
                <title>{title} - JSEOK 포트폴리오</title>
                <meta name="description" content={summary} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <motion.div 
                className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:bg-gray-800"
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
            >
                {/* Back Button */}
                <motion.div variants={fadeInUp} className="container mx-auto px-6 pt-8">
                    <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 mb-8">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        프로젝트 목록으로 돌아가기
                    </Link>
                </motion.div>

                {/* Main Content */}
                <div className="container mx-auto px-6 pb-16">
                    <div className="max-w-6xl mx-auto">
                        {/* Header Section */}
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                {title}
                            </h1>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                {summary}
                            </p>
                        </motion.div>

                        {/* Image Section */}
                        <motion.div variants={fadeInUp} className="mb-16">
                            <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={imgSrc}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </motion.div>

                        {/* Project Info Grid */}
                        <div className="grid md:grid-cols-2 gap-12 mb-16">
                            {/* Role & Tags */}
                            <motion.div variants={fadeInUp} className="space-y-8">
                                <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-600">
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                        담당 역할
                                    </h3>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">{role}</p>
                                </div>

                                <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-600">
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                        기술 스택
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {tags.map((tag) => (
                                            <span
                                                key={tag.id}
                                                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800 text-gray-800 dark:text-white font-semibold rounded-full border border-blue-200 dark:border-blue-600 shadow-sm hover:shadow-md transition-shadow duration-200"
                                            >
                                                {tag.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Links */}
                            <motion.div variants={fadeInUp}>
                                <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-600 h-full flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
                                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                        프로젝트 링크
                                    </h3>
                                    <div className="space-y-4">
                                        {github !== "#" && (
                                            <a
                                                href={github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center w-full py-4 px-6 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                                            >
                                                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                                </svg>
                                                GitHub Repository
                                            </a>
                                        )}
                                        {youtube !== "#" && youtube !== "" && (
                                            <a
                                                href={youtube}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center w-full py-4 px-6 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                                            >
                                                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM8 11a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 100-6 3 3 0 000 6z"/>
                                                </svg>
                                                YouTube Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Description Section */}
                        {description && (
                            <motion.div variants={fadeInUp} className="mb-16">
                                <div className="bg-white dark:bg-gray-700 rounded-2xl p-10 shadow-lg border border-gray-100 dark:border-gray-600">
                                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
                                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                                        프로젝트 상세 설명
                                    </h3>
                                    <div className="prose prose-lg max-w-none">
                                        {description.split('\n\n').map((paragraph, index) => (
                                            <div key={index} className="mb-6">
                                                {paragraph.split('\n').map((line, lineIndex) => (
                                                    <p key={lineIndex} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                                        {line}
                                                    </p>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = projectData.map((project) => ({
        params: { id: project.id }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const project = projectData.find((p) => p.id === params.id);

    if (!project) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            project
        }
    };
}