import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollDown from "./ScrollDown";

export default function AboutMe({ isAboutMeRef }) {
	const [currentName, setCurrentName] = useState("Frontend Developer.");

	const changeName = () => {
		if (currentName === "Frontend Developer.") {
			setCurrentName("Backend Developer.");
			return;
		}
		setCurrentName("Frontend Developer.");
		return;
	};

	setTimeout(changeName, 5000);

	return (
		<section id="aboutme">
			<div className="relative flex h-screen flex-col overflow-hidden bg-neutral-900 pt-24 text-white">
				<div className="relative flex h-full w-full flex-col items-center justify-center gap-8 p-4 lg:p-8">
					<motion.h1
						initial="initial"
						whileInView="animation"
						transition={{ duration: 0.5, delay: "0.1" }}
						variants={{
							initial: { scale: 1.2, y: "-30%" },
							animation: { scale: 1, y: 0 },
						}}
						viewport={{ once: true }}
						className="relative w-full text-left text-6xl font-extrabold lg:w-1/2 lg:text-8xl"
					>
						<span
							ref={isAboutMeRef}
							className="absolute -top-6 -left-2 text-lg font-normal italic text-neutral-700 lg:-left-8"
						>
							{" </h1>"}
						</span>
						Hey,
						<span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 lg:-left-8">
							{" </h1>"}
						</span>
					</motion.h1>
					<motion.h1
						initial="initial"
						whileInView="animation"
						transition={{ duration: 0.5, delay: "0.2" }}
						variants={{
							initial: { x: "30%" },
							animation: { x: 0 },
						}}
						viewport={{ once: true }}
						className="w-full text-left text-5xl font-extrabold lg:w-1/2 lg:text-8xl"
					>
						I'm{" "}
						<span className="relative after:absolute after:-bottom-1 after:left-0 after:h-2 after:w-full after:bg-gradient-to-l after:from-pink-500 after:to-violet-500">
							{" "}
							Inderpreet.
						</span>
					</motion.h1>
					<motion.h1
						initial="initial"
						whileInView="animation"
						transition={{ duration: 0.5, delay: "0.1" }}
						variants={{
							initial: { scale: 1.2, y: "100%" },
							animation: { scale: 1, y: 0 },
						}}
						viewport={{ once: true }}
						className="relative flex w-full flex-col whitespace-normal text-2xl font-semibold text-neutral-400 lg:w-1/2 lg:text-4xl"
					>
						<div className="flex">
							<span className="absolute -top-6 -left-2 text-lg font-normal italic text-neutral-700 lg:-left-8">
								{"<p> "}
							</span>
							I'm a <h1 className="iam ml-3 text-amber-400"> {currentName}</h1>
							<span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 lg:-left-8">
								{" </p>"}
							</span>
						</div>
					</motion.h1>
				</div>
			</div>
			<ScrollDown />
		</section>
	);
}
