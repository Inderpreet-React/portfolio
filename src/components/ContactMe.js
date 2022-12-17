import React from "react";
import GithubIcon from "../images/GithubIcon";
import LinkedInIcon from "../images/LinkedInIcon";
import { motion } from "framer-motion";

export default function ContactMe({ isContactRef }) {
	const currentYear = new Date().getFullYear();

	return (
		<section id="contactme">
			<div className="relative flex h-full min-h-screen w-full flex-col gap-12 bg-neutral-900 p-6 pt-32 text-white md:p-12 md:pb-0 md:pt-32">
				<motion.div
					initial="front"
					whileInView="animation"
					transition={{ duration: 0.5, delay: "0.1" }}
					variants={{
						front: { x: "-10%" },
						animation: { x: 0 },
					}}
					viewport={{ once: true }}
					className="relative"
				>
					<span className="absolute -top-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
						{"<h1>"}
					</span>
					<h1
						ref={isContactRef}
						className="relative max-w-min overflow-hidden text-ellipsis whitespace-nowrap bg-gradient-to-r from-pink-500 to-violet-500 p-2 text-5xl font-extrabold underline md:text-6xl"
					>
						Contact Me
					</h1>
					<span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
						{"</h1>"}
					</span>
				</motion.div>
				<div className="flex flex-col gap-6 md:flex-row md:gap-12">
					<motion.form
						initial="front"
						whileInView="animation"
						transition={{ duration: 0.5, delay: "0.3" }}
						variants={{
							front: { opacity: 0 },
							animation: { opacity: 1 },
						}}
						viewport={{ once: true }}
						action="mailto:inderpreet.react.project@gmail.com"
						method="post"
						enctype="text/plain"
						className="relative flex h-full w-full flex-col gap-10 md:w-1/2 md:gap-10"
					>
						<span className="absolute -top-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{"<form>"}
						</span>
						<div className="flex h-12 flex-col gap-2 md:h-12 md:flex-row">
							<span className="w-full self-center text-xl font-semibold text-neutral-300 md:w-1/3 md:self-start">
								Name:
							</span>
							<input
								required
								className="focus:ring-none relative h-full w-full border-b-2 border-emerald-300  bg-neutral-800 p-2 text-neutral-900 caret-emerald-300 shadow-md transition-all  focus:shadow-lg focus:shadow-emerald-600 focus:outline-none focus:placeholder:text-neutral-800 md:w-2/3"
								type="text"
								name="name"
								placeholder="Name"
							/>
						</div>

						<div className="flex h-12 flex-col gap-2 md:h-12 md:flex-row">
							<span className="w-full self-center text-xl font-semibold text-neutral-300 md:w-1/3 md:self-start">
								E-mail:
							</span>
							<input
								required
								className="focus:ring-none relative h-full w-full border-b-2 border-emerald-300 bg-neutral-800 p-2 text-neutral-900 caret-emerald-300 shadow-md transition-all  focus:shadow-lg focus:shadow-emerald-600 focus:outline-none focus:placeholder:text-neutral-800 md:w-2/3"
								type="email"
								name="mail"
								placeholder="E-mail"
							/>
						</div>

						<div className="flex h-32 flex-col gap-2 md:h-36 md:flex-row">
							<span className="w-full self-center text-xl font-semibold text-neutral-300 md:w-1/3 md:self-start">
								Message:
							</span>
							<textarea
								required
								name="message"
								size="100"
								placeholder="Message"
								className="focus:ring-none relative h-full w-full border-b-2 border-emerald-300 bg-neutral-800 p-2 text-neutral-900 caret-emerald-300 shadow-md transition-all  focus:shadow-lg focus:shadow-emerald-600 focus:outline-none focus:placeholder:text-neutral-800 md:w-2/3"
							/>
						</div>
						<div className="group relative w-28 self-end">
							<button
								type="submit"
								value="Send"
								className="relative w-full bg-emerald-300 py-2 px-3 font-semibold text-neutral-800 transition-all hover:-translate-y-1 hover:scale-105 hover:bg-emerald-400 group-hover:text-white"
							>
								Send
							</button>
						</div>
						<span className="absolute -bottom-2 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{"</form>"}
						</span>
					</motion.form>
					<div>
						<motion.h2
							initial="front"
							whileInView="animation"
							transition={{ duration: 0.5, delay: "0.3" }}
							variants={{
								front: { opacity: 0 },
								animation: { opacity: 1 },
							}}
							viewport={{ once: true }}
							className="relative max-w-min text-2xl font-semibold text-white after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:bg-gradient-to-l after:from-pink-500 after:to-violet-500"
						>
							<span className="absolute -top-6 -left-2 hidden text-lg font-normal italic text-neutral-700 md:-left-8 md:block">
								{"<a>"}
							</span>
							Socials
							<span className="absolute -bottom-8 -left-2 hidden text-lg font-normal italic text-neutral-700 md:-left-8 md:block">
								{"</a>"}
							</span>
						</motion.h2>
						<div>
							<motion.div
								initial="front"
								whileInView="animation"
								transition={{ duration: 0.5, delay: "0.1" }}
								variants={{
									front: { x: "100%" },
									animation: { x: 0 },
								}}
								viewport={{ once: true }}
								className="relative mt-8 ml-4 flex flex-col gap-8 md:ml-0 md:mt-16 md:justify-start md:gap-8"
							>
								<span className="absolute -top-6 -left-2 hidden text-lg font-normal italic text-neutral-700 md:-left-8 md:block">
									{"<a>"}
								</span>
								<a
									href="https://github.com/Inderpreet-React"
									target="_blank"
									rel="noopener noreferrer"
									className="flex gap-2 rounded border-2 border-emerald-300 p-2 shadow-sm shadow-emerald-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-700 md:shadow-md md:shadow-emerald-700"
								>
									<div className="flex h-16 w-16 fill-neutral-200">
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
									className="flex gap-2 rounded border-2 border-emerald-300 p-2 shadow-sm shadow-emerald-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-700 md:shadow-md md:shadow-emerald-700"
								>
									<div className="flex h-16 w-16 fill-neutral-200">
										<LinkedInIcon />
									</div>
									<p className="flex w-full items-center justify-center">
										Checkout my LinkedIn profile for my recent updates.
									</p>
								</a>
								<span className="absolute -bottom-8 -left-2 hidden text-lg font-normal italic text-neutral-700 md:-left-8 md:block">
									{"</a>"}
								</span>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
