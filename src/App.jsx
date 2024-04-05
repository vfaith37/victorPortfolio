/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import {FaCar, FaCss3Alt, FaDharmachakra, FaDocker, FaGithub, FaHtml5, FaInstagram, FaJava, FaJsSquare, FaLinkedin, FaLinkedinIn, FaMoon, FaPhp, FaPython, FaSun, FaTwitter } from "react-icons/fa"
import { HiMenu, HiOutlineX } from "react-icons/hi"
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
				// console.log(theme);
				const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
	return (
		<div className="max-w-md mx-auto shadow-md overflow-hidden sm:max-w-full px-3 py-6 sm:px-32 sm:py-16 bg-pink-50 dark:bg-neutral-900 text-black dark:text-white">
			<section className='flex justify-between items-center'>
			<div className="md:hidden flex justify-between items-center">
        <button
          className="md:hidden"
          onClick={toggleMenu}
        >
         {isOpen ? <HiOutlineX className="h-6 w-6 text-black dark:text-white" /> : <HiMenu className="h-6 w-6 text-black dark:text-white"/>}
        </button>
      </div>
      <nav className={`md:flex gap-6 md:flex-row ${isOpen ? 'block absolute top-16 ease-in-out duration-500 gap-5' : 'hidden'}`}>
        <a href="#" className="gap-6 justify-between flex text-center text-sm sm:text-base font-normal font-outfit text-black dark:text-white">About</a>
        <a href="#" className="gap-6 justify-between flex text-center text-sm sm:text-base font-normal font-outfit text-black dark:text-white">Projects</a>
        <a href="#" className="gap-6 justify-between flex text-center text-sm sm:text-base font-normal font-outfit text-black dark:text-white">Contact me</a>
      </nav>
				<div className='flex gap-3 justify-center items-center '>
					<img src={LOGO} alt="logo" className='w-5 sm:w-10 h-5 sm:h-10' />
					<p className='font-poppins text-red-950 dark:text-white text-xl sm:text-3xl font-bold'>Figo</p>
				</div> 
					<button
					className={`relative inline-block w-11 h-6 sm:w-28 sm:h-16 transition-colors duration-300 ease-in-out ${
						theme === "light" ? 'bg-stone-200' : 'bg-purple-500'
					} rounded-full shadow-inner focus:outline-none`}
					onClick={handleToggle}
					>
						<span
							className={`absolute left-0 top-0 sm:left-1 sm:top-1 w-6 h-6 sm:w-14 sm:h-14 ${
								isDarkMode ? 'translate-x-5 sm:translate-x-12' : 'translate-x-0'
							} bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out flex items-center justify-center`}
						>
							{isDarkMode ? <FaMoon className="sm:w-6 sm:h-6 text-black" /> : <FaSun className="sm:w-6 sm:h-6 text-neutral-900" />}
						</span>
					</button>

						</section>
						<section className='mt-52 text-red-950 dark:text-white flex flex-col items-center'>
							<img src={EXTRA} alt="extra" className='self-end p-6 mr-[1.75rem] sm:mr-[14.75rem]' />
							<h1 className={`text-center text-5xl sm:text-9xl font-extrabold mb-3 chall ${isDarkMode ? 'invert' : ''}`}>Victor Fagbohun S</h1>
							<p className='text-center text-opacity-40 text-sm sm:text-2xl font-normal font-outfit mt-7 w-[20.5625rem] sm:w-[60.5625rem]'>Hi there, I’m a full stack developer passionate about crafting captivating digital experiences. </p>
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
	<img src={EXTRA} alt="extra" className='absolute bottom-56 left-[2rem] sm:bottom-24 sm:left-[20rem]' /><img src={ARROW} alt="arrow" className='self-center' />
{/* </div> */}
		</section>
		<section className="relative flex overflow-x-hidden">
		<div className="py-12 animate-marquee whitespace-nowrap text-4xl sm:text-9xl font-bold">
			<span className="">Featured Work . </span>
			<span className="">Featured Work . </span>
		</div>

		<div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap text-4xl sm:text-9xl font-bold">
			<span className="">Featured Work . </span>
			<span className="">Featured Work . </span>
		</div>
</section>
<section class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-44 mx-auto">
		<div>
			<div className='h-[52.8125rem] w-[34.375rem] bg-red-200'></div>
		<div className='mt-5'>
			<h1 className='text-2xl font-semibold leading-9 font-poppins'>Blockvote</h1>
			<p className='text-stone-400 text-lg font-medium tracking-wide font-urbanist mt-4'>A blockchain-based voting platform streamlining elections for<br /> both voters and candidates across.</p>
			<button className='w-20 sm:w-32 h-8 sm:h-14 px-8 sm:px-10 py-3 bg-stone-50 rounded-3xl border border-red-950 justify-center items-center gap-3.5 inline-flex text-red-950 text-sm sm:text-xl font-bold font-outfit mt-5 leading-7'>View</button>
		</div>
		</div>


		<div>
		<div className='h-[29.1875rem] w-[34.375rem] bg-teal-600'></div>
		<div className='mt-5'>
			<h1 className='text-2xl font-semibold leading-9 font-poppins'>Shelta</h1>
			<p className='text-stone-400 text-lg font-medium tracking-wide font-urbanist mt-4'>Shelta is a property rental platform that makes it simpler for<br /> multifamily owners find the perfect tenant for their vacancy</p>
		<button className='w-40 sm:w-52 h-10 sm:h-14 px-8 sm:px-10 py-3 bg-stone-50 rounded-3xl border border-red-950 justify-center items-center gap-3.5 inline-flex text-red-950 text-sm sm:text-xl font-bold font-outfit mt-5 leading-7'>Coming Soon</button>
		</div>
		</div>


		<div className='mt-12'>
			<div className='h-[29.1875rem] w-[34.375rem] bg-orange-100'></div>
		<div className='mt-5'>
			<h1 className='text-2xl font-semibold leading-9 font-poppins'>BUSA App</h1>
			<p className='text-stone-400 text-lg font-medium tracking-wide font-urbanist mt-4'>This is the pioneer software application for the Babcock<br /> university student association</p>
		<button className='w-20 sm:w-32 h-8 sm:h-14 px-8 sm:px-10 py-3 bg-stone-50 rounded-3xl border border-red-950 justify-center items-center gap-3.5 inline-flex text-red-950 text-sm sm:text-xl font-bold font-outfit mt-5 leading-7'>View</button>
		</div>
		</div>

		<div className='sm:mt-[-350px]'>
			<div className='h-[52.8125rem] w-[34.375rem] bg-gradient-to-br from-fuchsia-700 via-purple-700 to-violet-500'></div>
		<div className='mt-12'>
			<h1 className='text-2xl font-semibold leading-9 font-poppins'>Blockvote</h1>
			<p className='text-stone-400 text-lg font-medium tracking-wide font-urbanist mt-4'>A blockchain-based voting platform streamlining elections for<br /> both voters and candidates across.</p>
		<button className='w-40 sm:w-52 h-10 sm:h-14 px-8 sm:px-10 py-3 bg-stone-50 rounded-3xl border border-red-950 justify-center items-center gap-3.5 inline-flex text-red-950 text-sm sm:text-xl font-bold font-outfit mt-5 leading-7'>Coming Soon</button>
		</div>
		</div>
</section>
{/* <section className='mt-44 flex justify-between'>
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
		</section> */}

	<section className='mt-40 flex flex-col'>
		<p className='text-zinc-400 text-sm font-normal font-montserrat self-center'>SKILLS</p>
			<div className='flex my-12 justify-between'>
			<div className='relative group flex flex-col items-center'>
		<FaJava className='w-10 h-10 sm:w-12 sm:h-12 text-stone-300 transition-colors duration-300 group-hover:text-yellow-500 ' />
		<span className='font-plus-jakarta-sans dark:text-white text-black text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
			Java
		</span>
	</div>
	<div className='relative group flex flex-col items-center'>
		<FaJsSquare className='w-10 h-10 sm:w-12 sm:h-12 text-stone-300 transition-colors duration-300 group-hover:text-yellow-500 ' />
		<span className='font-plus-jakarta-sans dark:text-white text-black text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
			JavaScript
		</span>
	</div>
	<div className='relative group flex flex-col items-center'>
		<FaPhp className='w-10 h-10 sm:w-12 sm:h-12 text-stone-300 transition-colors duration-300 group-hover:text-blue-400 ' />
		<span className='font-plus-jakarta-sans dark:text-white text-black text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
			PHP
		</span>
	</div>
	<div className='relative group flex flex-col items-center'>
		<FaPython className='w-10 h-10 sm:w-12 sm:h-12 text-stone-300 transition-colors duration-300 group-hover:text-blue-500' />

		<span className='font-plus-jakarta-sans dark:text-white text-black text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
			Python
		</span>
	</div>
	<div className='relative group flex flex-col items-center'>
		<FaHtml5 className='w-10 h-10 sm:w-12 sm:h-12 text-stone-300 transition-colors duration-300 group-hover:text-red-500' />
		<span className='font-plus-jakarta-sans dark:text-white text-black text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
			HTML
		</span>
	</div>
	<div className='relative group flex flex-col items-center'>
		<FaCss3Alt className='w-10 h-10 sm:w-12 sm:h-12 text-stone-300 transition-colors duration-300 group-hover:text-blue-500' />
		<span className='font-plus-jakarta-sans dark:text-white text-black text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
			CSS
		</span>
	</div>
	<div className='relative group flex flex-col items-center'>
		<FaDocker className='w-10 h-10 sm:w-12 sm:h-12 text-stone-300 transition-colors duration-300 group-hover:text-purple-500' />
		<span className='font-plus-jakarta-sans dark:text-white text-black text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
			Docker
		</span>
	</div>
	<div className='relative group flex flex-col items-center'>
		<FaDharmachakra className='w-10 h-10 sm:w-12 sm:h-12 text-stone-300 transition-colors duration-300 group-hover:text-blue-900' />
		<span className='font-plus-jakarta-sans dark:text-white text-black text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
			Kubernetes
		</span>
	</div>
</div>
	</section>
<section className='flex flex-col items-center mt-44 mb-64'>
	<p className='text-neutral-400 text-sm sm:text-xl font-normal font-inter'>Want to work on a project?</p>
	<h1 className='text-5xl sm:text-9xl font-semibold mt-7 font-inter'>Let's Talk</h1>
	<button className='font-inter w-32 sm:w-48 h-10 sm:h-14 bg-stone-50 rounded-3xl border border-red-950 justify-center items-center gap-3.5 inline-flex text-red-950 text-sm sm:text-base font-normal mt-12 leading-7'>GET IN TOUCH</button>
</section>
		<footer className='flex items-center flex-col'>
		<p className='self-center mb-12'>Fagbohun Victor | &copy; Copyright {currentYear}.</p>
	</footer> 
	</div>
	)
}
export default App
