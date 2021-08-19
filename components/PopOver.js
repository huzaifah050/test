import { Popover, Transition } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/solid';

const PopOver = () => {
	return (
		<Popover>
			{({ open }) => (
				<>
					<Popover.Button>
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
					</Popover.Button>
					<Transition
						enter="transition duration-100 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-75 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
					>
						<Popover.Panel className="absolute z-10 w-full">
							<div className="bg-red-100 flex justify-center">
								<div className="w-4/5 bg-green-300">
									<a href="/" className="block">
										Analytics
									</a>
									<a href="/" className="block">
										Engagement
									</a>
									<a href="/" className="block">
										Security
									</a>
									<a href="/" className="block">
										Integrations
									</a>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
};

export default PopOver;
