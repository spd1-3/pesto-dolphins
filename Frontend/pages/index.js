import Head from 'next/head'
import Footer from '../components/Footer'
import "tailwindcss/tailwind.css"

export default function Home() {
    return (
        <>
            <Head>
                <title>Pesto Dolphins</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="w-full px-3 antialiased from-tertiary to-primary bg-gradient-to-br select-none lg:px-6">
                <div className="mx-auto max-w-7xl">
                    <nav className="flex items-center w-full h-24">
                        <div className="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
                            <a href="#_" className="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0">
                                <span className="text-xl font-black leading-none text-white select-none logo">pesto<br />dolphins<span className="text-primary">.</span></span>
                            </a>
                            <div className="fixed top-0 left-0 z-40 items-center hidden w-full h-full p-3 text-xl bg-transparent bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex" >
                                <div className="flex-col w-full h-auto h-full overflow-hidden bg-transparent rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                                    <div className="flex flex-col items-center justify-center w-full h-full mt-12 text-center text-white md:text-white md:w-2/3 md:mt-0 md:flex-row md:items-center">
                                        <a href="#" className="inline-block px-4 py-2 mx-2 font-medium text-left text-white md:text-white md:px-0 lg:mx-3 md:text-center">Home</a>
                                        <a href="#" className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-white md:hover:text-white lg:mx-3 md:text-center">Features</a>
                                    </div>
                                    <div className="flex flex-col items-center justify-end w-full h-full pt-4 md:w-1/3 md:flex-row md:py-0">
                                        <a href="#_" className="w-full pl-6 mr-0 text-white hover:text-white md:pl-0 md:mr-3 lg:mr-5 md:w-auto">Sign In</a>
                                        <a href="#_" className="inline-flex items-center justify-center px-4 py-2 mr-1 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-transparent border border-transparent rounded hover:bg-transparent focus:outline-none focus:border-white focus:shadow-outline-white active:bg-transparent">Sign Up</a>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute right-0 z-50 flex flex-col items-end w-10 h-10 p-2 mr-4 rounded-full cursor-pointer md:hidden hover:bg-white text-white">
                                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" styles={{display: "none;"}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                        </div>
                    </nav>
                    <div className="container py-32 mx-auto text-center sm:px-4">

                        <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span className="block">Increase engagement</span> <span className="relative inline-block mt-3 text-transparent text-white">and recognition</span></h1>
                        <div className="max-w-lg mx-auto mt-6 text-sm text-center text-white md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">Enhance engagement, bring in "thank you" culture and <br />boost company outcomes</div>
                        <div className="relative flex items-center max-w-md mx-auto mt-12 text-center">
                            <input type="text" name="email" placeholder="Email Address" className="w-full h-12 px-6 py-2 font-medium text-indigo-800 rounded focus:outline-none" />
                            <span className="relative top-0 right-0 block rounded-full shadow-sm">
                                <button type="button" className="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-400 border border-transparent rounded hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
                                    Sign Up
                                </button>
                            </span>
                        </div>
                        <div className="mt-8 text-sm text-white">By signing up, you agree to our terms and services.</div>
                    </div>
                </div>
            </header>

                    <section className="py-20 bg-white">
                <div className="container max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight text-center">Our Features</h2>
                    <p className="mt-2 text-lg text-center text-gray-600">Check out our list of awesome features below.</p>
                    <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

                        <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl from-secondary-light to-tertiary-light bg-gradient-to-br border border-tertiary">
                            <div className="p-3 text-white">
                                <svg width="75" height="75" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="50" fill="url(#paint0_linear)" fillOpacity="0.1"/>
                                    <circle cx="50" cy="50" r="49.5" stroke="url(#paint1_linear)"/>
                                    <path d="M29 41V68.75C29 68.9489 29.079 69.1397 29.2197 69.2803C29.3603 69.421 29.5511 69.5 29.75 69.5H42.5V41C42.5 40.6022 42.342 40.2206 42.0607 39.9393C41.7794 39.658 41.3978 39.5 41 39.5H30.5C30.1022 39.5 29.7206 39.658 29.4393 39.9393C29.158 40.2206 29 40.6022 29 41V41ZM56 30.5H44C43.6022 30.5 43.2206 30.658 42.9393 30.9393C42.658 31.2206 42.5 31.6022 42.5 32V69.5H57.5V32C57.5 31.6022 57.342 31.2206 57.0607 30.9393C56.7794 30.658 56.3978 30.5 56 30.5V30.5ZM69.5 45.5H59C58.6022 45.5 58.2206 45.658 57.9393 45.9393C57.658 46.2206 57.5 46.6022 57.5 47V69.5H70.25C70.4489 69.5 70.6397 69.421 70.7803 69.2803C70.921 69.1397 71 68.9489 71 68.75V47C71 46.6022 70.842 46.2206 70.5607 45.9393C70.2794 45.658 69.8978 45.5 69.5 45.5Z" stroke="#C780FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="0" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#1EDC83"/>
                                            <stop offset="1" stopColor="#00E4E4"/>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear" x1="0" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#1EDC83"/>
                                            <stop offset="1" stopColor="#00E4E4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Increase Engagement</h4>
                            <p className="text-base text-center text-gray-500">See live updates on Slack collaboration through a leaderboard</p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 sm:rounded-xl from-secondary-light to-tertiary-light bg-gradient-to-br border border-tertiary">
                            <div className="p-3 text-white">
                                <svg width="75" height="75" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="50" fill="url(#paint0_linear)" fillOpacity="0.1"/>
                                    <circle cx="50" cy="50" r="49.5" stroke="url(#paint1_linear)"/>
                                    <path d="M64.25 32H35.75C34.3588 32.004 33.0258 32.5584 32.0421 33.5421C31.0584 34.5258 30.504 35.8588 30.5 37.25V55.25C30.504 56.6412 31.0584 57.9742 32.0421 58.9579C33.0258 59.9416 34.3588 60.496 35.75 60.5H39.5V68L48.2863 60.6744C48.4212 60.5617 48.5914 60.5 48.7672 60.5H64.25C65.6412 60.496 66.9742 59.9416 67.9579 58.9579C68.9416 57.9742 69.496 56.6412 69.5 55.25V37.25C69.496 35.8588 68.9416 34.5258 67.9579 33.5421C66.9742 32.5584 65.6412 32.004 64.25 32V32Z" stroke="#C780FF" strokeWidth="3" strokeLinejoin="round"/>
                                    <path d="M42.5 46.25C42.5 47.0784 41.8284 47.75 41 47.75C40.1716 47.75 39.5 47.0784 39.5 46.25C39.5 45.4216 40.1716 44.75 41 44.75C41.8284 44.75 42.5 45.4216 42.5 46.25Z" fill="black" stroke="#C780FF" strokeWidth="3"/>
                                    <path d="M51.5 46.25C51.5 47.0784 50.8284 47.75 50 47.75C49.1716 47.75 48.5 47.0784 48.5 46.25C48.5 45.4216 49.1716 44.75 50 44.75C50.8284 44.75 51.5 45.4216 51.5 46.25Z" fill="black" stroke="#C780FF" strokeWidth="3"/>
                                    <path d="M60.5 46.25C60.5 47.0784 59.8284 47.75 59 47.75C58.1716 47.75 57.5 47.0784 57.5 46.25C57.5 45.4216 58.1716 44.75 59 44.75C59.8284 44.75 60.5 45.4216 60.5 46.25Z" fill="black" stroke="#C780FF" strokeWidth="3"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="0" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#1EDC83"/>
                                            <stop offset="1" stopColor="#00E4E4"/>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear" x1="0" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#1EDC83"/>
                                            <stop offset="1" stopColor="#00E4E4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Measure what matters</h4>
                            <p className="text-base text-center text-gray-500">Analyze the number messsages and reactions in a given timeframe</p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 sm:rounded-xl from-secondary-light to-tertiary-light bg-gradient-to-br border border-tertiary">
                            <div className="p-3 text-white">
                            <svg width="75" height="75" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="50" fill="url(#paint0_linear)" fillOpacity="0.1"/>
                                    <circle cx="50" cy="50" r="49.5" stroke="url(#paint1_linear)"/>
                                <path d="M71 45.5H54.875L50 30.5L45.125 45.5H29L42.125 54.5L37.0625 69.5L50 60.125L62.9375 69.5L57.875 54.5L71 45.5Z" stroke="#C780FF" strokeWidth="3" strokeLinejoin="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#1EDC83"/>
                                        <stop offset="1" stopColor="#00E4E4"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear" x1="0" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#1EDC83"/>
                                        <stop offset="1" stopColor="#00E4E4"/>
                                    </linearGradient>
                                </defs>
                            </svg>

                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Recognize good work</h4>
                            <p className="text-base text-center text-gray-500">See who contributed the most in a given time frame and reward them</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
