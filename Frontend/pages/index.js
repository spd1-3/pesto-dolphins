import Head from 'next/head'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Head>
                <title>Pesto Dolphins</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="w-full px-3 antialiased bg-indigo-600 select-none lg:px-6">
    <div className="mx-auto max-w-7xl">
        <nav className="flex items-center w-full h-24" xData="{ showMenu: false }">
            <div className="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
                <a href="#_" className="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0">
                    <span className="text-xl font-black leading-none text-white select-none logo">pesto<br />dolphins<span className="text-pink-500">.</span></span>
                </a>
                <div className="fixed top-0 left-0 z-40 items-center hidden w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex" >
                    <div className="flex-col w-full h-auto h-full overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                        <div className="flex flex-col items-center justify-center w-full h-full mt-12 text-center text-indigo-700 md:text-indigo-200 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                            <a href="#" className="inline-block px-4 py-2 mx-2 font-medium text-left text-indigo-700 md:text-white md:px-0 lg:mx-3 md:text-center">Home</a>
                            <a href="#" className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center">Features</a>
                        </div>
                        <div className="flex flex-col items-center justify-end w-full h-full pt-4 md:w-1/3 md:flex-row md:py-0">
                            <a href="#_" className="w-full pl-6 mr-0 text-indigo-200 hover:text-white md:pl-0 md:mr-3 lg:mr-5 md:w-auto">Sign In</a>
                            <a href="#_" className="inline-flex items-center justify-center px-4 py-2 mr-1 text-base font-medium leading-6 text-indigo-600 whitespace-no-wrap transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-full hover:bg-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">Sign Up</a>
                        </div>
                    </div>
                </div>
                <div className="absolute right-0 z-50 flex flex-col items-end w-10 h-10 p-2 mr-4 rounded-full cursor-pointer md:hidden hover:bg-indigo-700 text-indigo-200">
                    <svg className="w-6 h-6" x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    <svg className="w-6 h-6" x-show="showMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" styles={{display: "none;"}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
            </div>
        </nav>
        <div className="container py-32 mx-auto text-center sm:px-4">

            <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span className="block">Increase engagement</span> <span className="relative inline-block mt-3 text-transparent text-white">and recognition</span></h1>
            <div className="max-w-lg mx-auto mt-6 text-sm text-center text-indigo-200 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">Enhance engagement, bring in "thank you" culture and <br />boost company outcomes</div>
            <div className="relative flex items-center max-w-md mx-auto mt-12 text-center">
                <input type="text" name="email" placeholder="Email Address" className="w-full h-12 px-6 py-2 font-medium text-indigo-800 rounded focus:outline-none" />
                <span className="relative top-0 right-0 block rounded-full shadow-sm">
                    <button type="button" className="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-400 border border-transparent rounded hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
                        Sign Up
                    </button>
                </span>
            </div>
            <div className="mt-8 text-sm text-indigo-300">By signing up, you agree to our terms and services.</div>
        </div>
    </div>
</header>

        <section className="py-20 bg-white">
    <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center">Our Features</h2>
        <p className="mt-2 text-lg text-center text-gray-600">Check out our list of awesome features below.</p>
        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

            <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
                <div className="p-3 text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" />
                        <circle cx="6" cy="14" r="3" />
                        <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" />
                    </svg>
                </div>
                <h4 className="text-xl font-medium text-gray-700">Certifications</h4>
                <p className="text-base text-center text-gray-500">Each of our plan will provide you and your team with certifications.</p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                <div className="p-3 text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 8a3 3 0 0 1 0 6" />
                        <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
                        <path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
                    </svg>
                </div>
                <h4 className="text-xl font-medium text-gray-700">Notifications</h4>
                <p className="text-base text-center text-gray-500">Send out notifications to all your customers to keep them engaged.</p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                <div className="p-3 text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                        <line x1="12" y1="12" x2="20" y2="7.5" />
                        <line x1="12" y1="12" x2="12" y2="21" />
                        <line x1="12" y1="12" x2="4" y2="7.5" />
                        <line x1="16" y1="5.25" x2="8" y2="9.75" />
                    </svg>
                </div>
                <h4 className="text-xl font-medium text-gray-700">Bundles</h4>
                <p className="text-base text-center text-gray-500">High-quality bundles of awesome tools to help you out.</p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                <div className="p-3 text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 9l3 3l-3 3" />
                        <line x1="13" y1="15" x2="16" y2="15" />
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                    </svg>
                </div>
                <h4 className="text-xl font-medium text-gray-700">Developer Tools</h4>
                <p className="text-base text-center text-gray-500">Developer tools to help grow your application and keep it up-to-date.</p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                <div className="p-3 text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="9.5" y1="11" x2="9.51" y2="11" />
                        <line x1="14.5" y1="11" x2="14.51" y2="11" />
                        <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                        <path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3" />
                    </svg>
                </div>
                <h4 className="text-xl font-medium text-gray-700">Building Blocks</h4>
                <p className="text-base text-center text-gray-500">The right kind of building blocks to take your company to the next level.</p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                <div className="p-3 text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="15" y1="5" x2="15" y2="7" />
                        <line x1="15" y1="11" x2="15" y2="13" />
                        <line x1="15" y1="17" x2="15" y2="19" />
                        <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
                    </svg>
                </div>
                <h4 className="text-xl font-medium text-gray-700">Coupons</h4>
                <p className="text-base text-center text-gray-500">Coupons system to provide special offers and discounts for your app.</p>
            </div>

        </div>
    </div>
</section>
            <Footer />
        </>
    )
}
