import React from "react";
import PurpleBlob from "./PurpleBlob";
import YellowBlob from "./YellowBlob";
import { motion } from "framer-motion";

export default function AboutMe() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="relative flex h-screen flex-col bg-neutral-900 pt-24 text-white">
				<div className="relative flex h-full w-full flex-col items-center justify-center gap-8 p-4 md:p-8">
					<h1 className="w-full text-left text-6xl font-extrabold md:w-1/2">
						Hey,
					</h1>
					<h1 className="w-full whitespace-normal text-3xl font-extrabold md:w-1/2 md:text-6xl">
						My Name is Inderpreet
					</h1>
					<h1 className="w-full whitespace-normal text-2xl font-extrabold md:w-1/2 md:text-4xl">
						A frontend developer
					</h1>
				</div>
				<PurpleBlob />
				<YellowBlob />
			</div>
		</motion.div>
	);
}
