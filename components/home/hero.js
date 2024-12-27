import Animation from "./animation";
import Link from 'next/link';
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="text-gray-600 body-font ">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center pt-0 pb-0">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Animation />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <motion.h1 
                        className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-indigo-500 dark:text-white"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Hi, I'm Junseok Oh, a passionate developer!
                        <br className="hidden lg:inline-block" />
                        Striving for better code every day 🚀
                    </motion.h1>
                    <motion.p 
                        className="mb-8 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        "I'm a junior computer science student with a strong passion for frontend development. 
                        I specialize in building dynamic and intuitive user experiences using React and modern web technologies. 
                        I love solving problems, crafting visually stunning UIs, and continuously pushing myself to grow.
                        My ultimate goal is to create meaningful applications that deliver value to users."
                    </motion.p>
                    <motion.div 
                        className="flex justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <Link href="/projects">
                            <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                💻View My Projects
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                ✉️Contact Me
                            </a>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
