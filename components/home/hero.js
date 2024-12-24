import Animation from "./animation";
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-indigo-500 dark:text-white">
                    Hi, I'm Junseok Oh, a passionate developer!
                    <br className="hidden lg:inline-block" />
                    Striving for better code every day 🚀
                </h1>
                <p className="mb-8 leading-relaxed">
                    "I'm a junior computer science student with a strong passion for frontend development. 
                    I specialize in building dynamic and intuitive user experiences using React and modern web technologies. 
                    I love solving problems, crafting visually stunning UIs, and continuously pushing myself to grow.
                    My ultimate goal is to create meaningful applications that deliver value to users."
                </p>
                <div className="flex justify-center">
                    <Link href="/projects">
                        <a className="btn-project">
                            View My Projects
                        </a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    );
}
