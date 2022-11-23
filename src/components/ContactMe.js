import React from "react";

export default function ContactMe() {
	return (
		<div className="md:pt flex h-screen w-full flex-col bg-neutral-800 p-4 pt-24 text-white md:p-8 md:pt-24">
			<h1 className="mt-2 text-4xl font-extrabold underline underline-offset-8">
				Contact me
			</h1>
			<form className="relative mt-12 flex h-full w-full flex-col gap-16 md:mt-24 md:w-1/2 md:gap-10">
				<div className="flex h-10 flex-col gap-4 md:flex-row">
					<span className="w-full self-center text-xl font-semibold md:w-1/3 md:self-start">
						Name:
					</span>
					<div className="relative h-10 w-full md:w-2/3">
						<span className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 blur group-hover:-inset-1"></span>
						<input
							required
							className="focus:ring-none relative h-10 w-full rounded border-2 border-neutral-700 bg-neutral-300 p-2 text-neutral-900 focus:outline-none"
							type="text"
						/>
					</div>
				</div>

				<div className="flex h-10 flex-col gap-4 md:flex-row">
					<span className="w-full self-center text-xl font-semibold md:w-1/3 md:self-start">
						E-mail:
					</span>
					<div className="relative h-10 w-full md:w-2/3">
						<span className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 blur group-hover:-inset-1"></span>
						<input
							required
							className="focus:ring-none relative h-10 w-full rounded border-2 border-neutral-700 bg-neutral-300 p-2 text-neutral-900 focus:outline-none"
							type="email"
						/>
					</div>
				</div>

				<div className="flex h-36 flex-col gap-4 md:flex-row">
					<span className="w-full self-center text-xl font-semibold md:w-1/3 md:self-start">
						Message:
					</span>
					<div className="relative h-full w-full md:h-24 md:w-2/3">
						<span className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 blur group-hover:-inset-1"></span>
						<textarea
							required
							className="focus:ring-none relative h-full w-full rounded border-2 border-neutral-700 bg-neutral-300 p-2 text-neutral-900 focus:outline-none"
						/>
					</div>
				</div>
				<div className="group relative w-36 self-end">
					<span className="group:duration-200 absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 blur group-hover:-inset-1"></span>
					<button className="relative w-full rounded bg-black p-3 text-gray-300 group-hover:text-white">
						Contact me
					</button>
				</div>
			</form>
		</div>
	);
}
