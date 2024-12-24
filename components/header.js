import Link from 'next/link';
import DarkModeToggleButton from './dark-mode-toggle-button';
import Image from 'next/image';
export default function Header(){
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image
                            src="/bg.jpg" // public 폴더 기준 경로
                            alt="Profile"
                            width={50} // w-17 (17 * 4px) 크기를 픽셀로 계산
                            height={50} // h-16 (16 * 4px) 크기를 픽셀로 계산
                            className="text-white p-2 border-2 border-indigo-500 rounded-full object-cover"
                        />

                        <span className="ml-3 text-xl text-indigo-500 dark:text-inherit ">J`SEOK PortFolio</span>


                        </a>
                    </Link>


                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

                        <Link href="/">
                            <a className="mr-5 hover:text-gray-900">홈</a>
                        </Link>

                        <Link href="/projects">
                            <a className="mr-5 hover:text-gray-900">프로젝트</a>
                        </Link>

                        <a href="https://open.kakao.com/o/sVInUI6g" className="mr-5 hover:text-gray-900">연락하기</a>

                    </nav>
                    {/* 다크모드 토글 버튼 작업해야함 */}
                    <DarkModeToggleButton/>
                </div>
            </header>
        </>
    );
}
