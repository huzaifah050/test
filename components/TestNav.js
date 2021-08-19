import Image from 'next/image';

const TestNav = () => {
	return (
		<nav className="w-full bg-red-200  z-30 sticky top-0">
			<div className="flex justify-between">
				<div className="">
					<Image src="/logo.png" width="250" height="150" />
				</div>

				<div className="">
					<a href="">Find Care</a>
					<div className="">
						<a href="">Find Care</a>
						<a href="">Find Care</a>
						<a href="">Find Care</a>
						<a href="">Find Care</a>
					</div>
				</div>
				<div className="">
					<a href="">Sign in</a>
					<a href="">Sign in</a>
				</div>
			</div>
			<div className=" bg-green-300">
				<div className="flex flex-col">
					<a href="">Find Care</a>
					<a href="">Find Care</a>
					<a href="">Find Care</a>
					<a href="">Find Care</a>
					<a href="">Find Care</a>
					<a href="">Sign in</a>
					<a href="">Sign in</a>
				</div>
			</div>
		</nav>
	);
};

export default TestNav;
