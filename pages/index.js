import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/home/hero';
import Introduction from '../components/home/introduction';

export default function Home() {
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
    </Layout>
  );
}
