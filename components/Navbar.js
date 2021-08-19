import Image from 'next/image';
import { useEffect, useState } from 'react';
import PopOver from './PopOver';
import { Popover, Transition } from '@headlessui/react';

// window.addEventListener((e) => {
// 	e.preventDefault();
// });

const Navbar = () => {
	const [state, setstate] = useState({ theposition: 0 });
	const [show, setShow] = useState(false);
	// useEffect(() => {
	// 	window.addEventListener('scroll', listenToScroll);

	// 	return () => {
	// 		window.removeEventListener('scroll', listenToScroll);
	// 	};
	// }, []);

	// const listenToScroll = () => {
	// 	const winScroll =
	// 		document.body.scrollTop || document.documentElement.scrollTop;

	// 	const height =
	// 		document.documentElement.scrollHeight -
	// 		document.documentElement.clientHeight;

	// 	const scrolled = winScroll / height;

	// 	setstate({
	// 		theposition: scrolled,
	// 	});
	// };

	return (
		<nav
			className={
				state.theposition === 0
					? 'w-full bg-red-200  lg:flex justify-center  lg:h-20 z-30 sticky top-0'
					: 'w-full bg-red-200 shadow-2xl flex justify-center lg:h-20 z-30 sticky top-0'
			}
		>
			<div className="w-11/12 flex lg:flex items-center justify-between">
				<div className="w-3/12 flex items-center ">
					<Image src="/logo.png" width="250" height="150" />
				</div>

				<div className="lg:hidden">
					<button
						onClick={() => setShow(!show)}
						className="outline-none focus:bg-blue-400 "
					>
						{show ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</button>
				</div>
				<div className=" justify-between w-6/12 xs:hidden lg:flex  ">
					<div className=" w-4/12 flex justify-end">
						<a href="">Find Care</a>
					</div>
					<div className="space-x-4 w-8/12">
						<div className="flex justify-end gap-x-5">
							<a href="">Find Care</a>
							<a href="">Find Care</a>
							<a href="">Find Care</a>
							<a href="">Find Care</a>
						</div>
					</div>
				</div>
				<div className="w-3/12 xs:hidden lg:block ">
					<div className=" flex justify-end gap-x-5">
						<a href="">Sign in</a>
						<a href="">Sign in</a>
					</div>
				</div>
			</div>

			{show ? (
				<div className="lg:hidden  bg-green-300">
					<div className="">
						<div className="flex flex-col gap-y-3 pl-10">
							<a href="" className="pt-3 text-gray-700 tracking-wide">
								Find Care
							</a>
							<a href="" className="text-gray-700 tracking-wide">
								Find Care
							</a>
							<a href="" className="text-gray-700 tracking-wide">
								Find Care
							</a>
							<a href="" className="text-gray-700 tracking-wide">
								Find Care
							</a>
							<a href="" className="text-gray-700 tracking-wide">
								Find Care
							</a>
						</div>
						<div className="flex flex-col bg-blue-300 pl-10 py-5 gap-y-3 tracking-wide">
							<a href="" className="text-gray-700">
								Sign in
							</a>
							<a href="" className="text-gray-700 tracking-wide">
								Sign in
							</a>
						</div>
					</div>
				</div>
			) : null}
		</nav>
	);
};

export default Navbar;
