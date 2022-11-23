import React from "react";
import GithubIcon from "../images/GithubIcon";
import LinkedInIcon from "../images/LinkedInIcon";

export default function ContactMe() {
	return (
		<div className="flex h-screen w-full flex-col bg-neutral-900 p-4 pt-24 text-white md:p-8 md:pt-24">
			<h1 className="mt-2 text-4xl font-extrabold underline underline-offset-8">
				Contact me
			</h1>
			<div className="flex flex-col gap-6 md:flex-row md:gap-12">
				<form className="relative flex h-full w-full flex-col gap-14 pt-10 md:w-1/2 md:gap-10 md:pt-24">
					<div className="flex h-12 flex-col gap-4 md:h-14 md:flex-row">
						<span className="w-full self-center text-xl font-semibold md:w-1/3 md:self-start">
							Name:
						</span>
						<input
							required
							className="focus:ring-none relative h-full w-full  rounded border-2 border-teal-600 bg-stone-200 p-2 text-neutral-900 shadow-md shadow-teal-600 transition-all focus:shadow-lg focus:shadow-teal-600 focus:outline-none md:w-2/3"
							type="text"
						/>
					</div>

					<div className="flex h-12 flex-col gap-4 md:h-14 md:flex-row">
						<span className="w-full self-center text-xl font-semibold md:w-1/3 md:self-start">
							E-mail:
						</span>
						<input
							required
							className="focus:ring-none relative h-full w-full rounded border-2 border-teal-600 bg-stone-200 p-2 text-neutral-900 shadow-md shadow-teal-600 transition-all focus:shadow-lg focus:shadow-teal-600 focus:outline-none md:w-2/3"
							type="email"
						/>
					</div>

					<div className="flex h-32 flex-col gap-4 md:h-36 md:flex-row">
						<span className="w-full self-center text-xl font-semibold md:w-1/3 md:self-start">
							Message:
						</span>
						<textarea
							required
							className="focus:ring-none relative h-full w-full rounded border-2 border-teal-600 bg-stone-200 p-2 text-neutral-900 shadow-md shadow-teal-600 transition-all focus:shadow-lg focus:shadow-teal-600 focus:outline-none md:w-2/3"
						/>
					</div>
					<div className="group relative w-28 self-end">
						<span className="group:duration-200 absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-amber-600 to-teal-600 blur group-hover:-inset-1"></span>
						<button className="relative w-full rounded bg-neutral-900 p-3 text-gray-300 group-hover:text-white">
							Send
						</button>
					</div>
				</form>
				<div>
					<h2 className="text-2xl font-semibold">Socials</h2>
					<div className="relative mt-4 flex flex-col gap-2 md:mt-16 md:gap-8">
						<a
							href="https://github.com/Inderpreet-React"
							target="_blank"
							rel="noopener noreferrer"
							className="flex gap-2 rounded border-2 border-amber-600 p-2 shadow-sm shadow-amber-600 transition-all after:top-0 after:left-0 after:w-2 after:bg-amber-600 hover:shadow-lg hover:shadow-amber-600 md:shadow-md md:shadow-amber-600"
						>
							<div className="flex h-16 w-16 fill-white text-white">
								<GithubIcon />
							</div>
							<p className="flex w-full items-center justify-center">
								Checkout my Github account for my recent Projects.
							</p>
						</a>
						<a
							href="https://github.com/Inderpreet-React"
							target="_blank"
							rel="noopener noreferrer"
							className="flex gap-2 rounded border-2 border-emerald-600 p-2 shadow-sm shadow-emerald-600 transition-all after:top-0 after:left-0 after:w-2 after:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-600 md:shadow-md md:shadow-emerald-600"
						>
							<div className="flex h-16 w-16 fill-white text-white">
								<LinkedInIcon />
							</div>
							<p className="flex w-full items-center justify-center">
								Checkout my LinkedIn profile for my recent updates.
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
