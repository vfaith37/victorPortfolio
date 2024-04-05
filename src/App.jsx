/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import {FaCss3Alt, FaDharmachakra, FaDocker, FaGithub, FaHtml5, FaInstagram, FaJava, FaJsSquare, FaLinkedin, FaLinkedinIn, FaMoon, FaPhp, FaPython, FaSun, FaTwitter } from "react-icons/fa"
import LOGO from "./assets/logo.svg"
import EXTRA from "./assets/star.svg"
import ARROW from "./assets/Arrow.svg"
function App() {
		const currentYear = new Date().getFullYear();
		const [isHovered, setIsHovered] = useState(false);
			const [theme, setTheme] = useState("light");

			useEffect(() => {
				const storedTheme = localStorage.getItem("theme");
				const mode = JSON.parse(localStorage.getItem("darkMode"));
				if (storedTheme) {
					setTheme(storedTheme);
					setIsDarkMode(mode)
				}
			}, []);

			useEffect(() => {
				if (theme === "dark") {
					document.documentElement.classList.add("dark");
				} else {
					document.documentElement.classList.remove("dark");
				}
			}, [theme]);

			const [isDarkMode, setIsDarkMode] = useState(false);
				const handleToggle = () => {
					setIsDarkMode(!isDarkMode);
					const newTheme = theme === "dark" ? "light" : "dark";
					setTheme(newTheme);
					localStorage.setItem("theme", newTheme);
					localStorage.setItem("darkMode", !isDarkMode);
				};
				console.log(theme);
	return (
		<div className="max-w-md mx-auto shadow-md overflow-hidden sm:max-w-full p-0 sm:px-32 sm:py-16 bg-pink-50 dark:bg-neutral-900 text-black dark:text-white">
			<section className='flex justify-between items-center'>
				<div className='gap-6 justify-between flex text-center text-base font-normal font-outfit'>
					<p>About</p>
					<p>Projects</p>
					<p>Contact me</p>
				</div>
				<div className='flex gap-3 justify-center items-center '>
					<img src={LOGO} alt="logo" />
					<p className='font-poppins text-red-950 dark:text-white text-3xl font-bold'>Figo</p>
				</div> 
					<button
					className={`relative inline-block w-28 h-16 transition-colors duration-300 ease-in-out ${
						theme === "light" ? 'bg-stone-200' : 'bg-purple-500'
					} rounded-full shadow-inner focus:outline-none`}
					onClick={handleToggle}
					>
						<span
							className={`absolute left-1 top-1 w-14 h-14 ${
								isDarkMode ? 'translate-x-12' : 'translate-x-0'
							} bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out flex items-center justify-center`}
						>
							{isDarkMode ? <FaMoon className="w-6 h-6 text-black" /> : <FaSun className="w-6 h-6 text-neutral-900" />}
						</span>
					</button>

						</section>
						<section className='mt-52 text-red-950 dark:text-white flex flex-col'>
							<img src={EXTRA} alt="extra" className='self-end p-6 mr-[14.75rem]' />
							<h1 className={`text-center text-9xl font-extrabold mb-3 chall ${isDarkMode ? 'invert' : ''}`}>Victor Fagbohun S</h1>
							<p className='text-center text-opacity-40 text-2xl font-normal font-outfit mt-7'>Hi there, I’m a full stack developer passionate about crafting captivating<br /> digital experiences. </p>
							<div className='flex mt-24 my-12 self-center gap-3 text-neutral-900 dark:text-gray-50'>
		<div className='w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center flex-col'>
			<FaInstagram className='w-8 h-8' />
		</div>
		<div className='w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center flex-col'>
			<FaTwitter className='w-8 h-8' />
		</div>
		<div className='w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center flex-col'>
			<FaGithub className='w-8 h-8' />
		</div>
		<div className='w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center flex-col'>
			<FaLinkedinIn className='w-8 h-8' />
		</div>
</div>
{/* <div className='flex justify-between'> */}
	<img src={EXTRA} alt="extra" className='absolute bottom-24 left-[20rem]' /><img src={ARROW} alt="arrow" className='self-center' />
{/* </div> */}
		</section>
		<section className="relative flex overflow-x-hidden">
		<div className="py-12 animate-marquee whitespace-nowrap">
			<span className="text-9xl font-bold">Featured Work .</span>
			<span className="text-9xl font-bold">Featured Work .</span>
		</div>

		<div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
			<span className="text-9xl font-bold">Featured Work .</span>
			<span className="text-9xl font-bold">Featured Work .</span>
		</div>
</section>

<section className='mt-44 flex justify-between'>
	<div>
		<div>
			<div className='h-[52.8125rem] w-[34.375rem] bg-red-200'></div>
		<div className='mt-5'>
			<h1 className='text-2xl font-semibold leading-9 font-poppins'>Blockvote</h1>
			<p className='text-stone-400 text-lg font-medium tracking-wide font-urbanist mt-4'>A blockchain-based voting platform streamlining elections for<br /> both voters and candidates across.</p>
		<button className='w-32 h-14 px-10 py-3 bg-stone-50 rounded-3xl border border-red-950 justify-center items-center gap-3.5 inline-flex text-red-950 text-xl font-bold font-outfit mt-5 leading-7'>View</button>
		</div>
		</div>

		<div className='mt-12'>
			<div className='h-[29.1875rem] w-[34.375rem] bg-orange-100'></div>
		<div className='mt-5'>
			<h1 className='text-2xl font-semibold leading-9 font-poppins'>BUSA App</h1>
			<p className='text-stone-400 text-lg font-medium tracking-wide font-urbanist mt-4'>This is the pioneer software application for the Babcock<br /> university student association</p>
		<button className='w-32 h-14 px-10 py-3 bg-stone-50 rounded-3xl border border-red-950 justify-center items-center gap-3.5 inline-flex text-red-950 text-xl font-bold font-outfit mt-5 leading-7'>View</button>
		</div>
		</div>
	</div>


	<div>
	<div>
		<div className='h-[29.1875rem] w-[34.375rem] bg-teal-600'></div>
		<div className='mt-5'>
			<h1 className='text-2xl font-semibold leading-9 font-poppins'>Shelta</h1>
			<p className='text-stone-400 text-lg font-medium tracking-wide font-urbanist mt-4'>Shelta is a property rental platform that makes it simpler for<br /> multifamily owners find the perfect tenant for their vacancy</p>
		<button className='w-52 h-14 px-10 py-3 bg-stone-50 rounded-3xl border border-red-950 justify-center items-center gap-3.5 inline-flex text-red-950 text-xl font-bold font-outfit mt-5 leading-7'>Coming Soon</button>
		</div>
		</div>

		<div className='mt-12'>
			<div className='h-[52.8125rem] w-[34.375rem] bg-gradient-to-br from-fuchsia-700 via-purple-700 to-violet-500'></div>
		<div className='mt-12'>
			<h1 className='text-2xl font-semibold leading-9 font-poppins'>Blockvote</h1>
			<p className='text-stone-400 text-lg font-medium tracking-wide font-urbanist mt-4'>A blockchain-based voting platform streamlining elections for<br /> both voters and candidates across.</p>
		<button className='w-52 h-14 px-10 py-3 bg-stone-50 rounded-3xl border border-red-950 justify-center items-center gap-3.5 inline-flex text-red-950 text-xl font-bold font-outfit mt-5 leading-7'>Coming Soon</button>
		</div>
		</div>

	</div>
		</section>

	<section className='mt-40 flex flex-col'>
		<p className='text-zinc-400 text-sm font-normal font-montserrat self-center'>SKILLS</p>
			<div className='flex my-12 justify-between'>
			<div className='relative group flex flex-col items-center'>
		<FaJava className='w-12 h-12 text-stone-300 transition-colors duration-300 group-hover:text-yellow-500 ' />
		<span className='font-plus-jakarta-sans dark:text-white text-black text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
			Java
		</span>
	</div>
	<div className='relative group flex flex-col items-center'>
		<FaJsSquare className='w-12 h-12 text-stone-300 transition-colors duration-300 group-hover:text-yellow-500 ' />
		<span className='font-plus-jakarta-sans dark:text-white text-black text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
			JavaScript
		</span>
	</div>
	<div className='relative group flex flex-col items-center'>
		<FaPhp className='w-12 h-12 text-stone-300 transition-colors duration-300 group-hover:text-blue-400 ' />
		<span className='font-plus-jakarta-sans dark:text-white text-black text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
			PHP
		</span>
	</div>
	<div className='relative group flex flex-col items-center'>
		<FaPython className='w-12 h-12 text-stone-300 transition-colors duration-300 group-hover:text-blue-500' />

		<span className='font-plus-jakarta-sans dark:text-white text-black text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
			Python
		</span>
	</div>
	<div className='relative group flex flex-col items-center'>
		<FaHtml5 className='w-12 h-12 text-stone-300 transition-colors duration-300 group-hover:text-red-500' />
		<span className='font-plus-jakarta-sans dark:text-white text-black text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
			HTML
		</span>
	</div>
	<div className='relative group flex flex-col items-center'>
		<FaCss3Alt className='w-12 h-12 text-stone-300 transition-colors duration-300 group-hover:text-blue-500' />
		<span className='font-plus-jakarta-sans dark:text-white text-black text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
			CSS
		</span>
	</div>
	<div className='relative group flex flex-col items-center'>
		<FaDocker className='w-12 h-12 text-stone-300 transition-colors duration-300 group-hover:text-purple-500' />
		<span className='font-plus-jakarta-sans dark:text-white text-black text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
			Docker
		</span>
	</div>
	<div className='relative group flex flex-col items-center'>
		<FaDharmachakra className='w-12 h-12 text-stone-300 transition-colors duration-300 group-hover:text-blue-900' />
		<span className='font-plus-jakarta-sans dark:text-white text-black text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
			Kubernetes
		</span>
	</div>
</div>
	</section>
<section className='flex flex-col items-center mt-44 mb-64'>
	<p className='text-neutral-400 text-xl font-normal font-inter'>Want to work on a project?</p>
	<h1 className='text-9xl font-semibold mt-7 font-inter'>Let's Talk</h1>
	<button className='font-inter w-48 h-14 bg-stone-50 rounded-3xl border border-red-950 justify-center items-center gap-3.5 inline-flex text-red-950 text-base font-normal mt-12 leading-7'>GET IN TOUCH</button>
</section>
		<footer className='flex items-center flex-col'>
		<p className='self-center mb-12'>Fagbohun Victor | &copy; Copyright {currentYear}.</p>
	</footer> 
	</div>
	)
}
export default App
