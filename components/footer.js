import Link from 'next/link';

export default function Footer() {
    return (
        <> < footer className = "body-font fixed bottom-0 w-full" style = {{ zIndex: 1000 }} > <div className="">
            <div
                className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">

                <Link
                    href="/"
                    className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <span className="ml-3 text-xl">JunSeok PortFolio</span>
                </Link>

                <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 Tailblocks —
                    <a
                        href="https://github.com/ojspp41"
                        rel="noopener noreferrer"
                        className="text-gray-600 ml-1"
                        target="_blank">
                        @ojspp41(git)
                    </a>
                </p>

                <span
                    className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a
                        href="https://www.facebook.com"
                        className="text-gray-500"
                        target="_blank"
                        rel="noopener noreferrer">
                        <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a
                        href="https://github.com/ojspp41"
                        className="ml-3 text-gray-500"
                        target="_blank"
                        rel="noopener noreferrer">
                        <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.49.5.09.66-.22.66-.47v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.45-1.17-1.1-1.48-1.1-1.48-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-2 .99-2.71-.1-.24-.43-1.23.1-2.56 0 0 .82-.26 2.7 1.02a9.47 9.47 0 012.46-.33c.83 0 1.66.11 2.46.33 1.88-1.28 2.7-1.02 2.7-1.02.53 1.33.2 2.32.1 2.56.62.71.99 1.61.99 2.71 0 3.84-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.75c0 .25.17.56.67.46A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z"></path>
                        </svg>
                    </a>
                    <a
                        href="https://www.instagram.com/jseok_492/"
                        className="ml-3 text-gray-500"
                        target="_blank"
                        rel="noopener noreferrer">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>

                </span>
            </div>
        </div>
    </footer>
</>
    );
}
