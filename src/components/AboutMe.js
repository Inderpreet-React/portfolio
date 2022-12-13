import React from "react";
import PurpleBlob from "./PurpleBlob";
import YellowBlob from "./YellowBlob";
import PinkBlob from "./PinkBlob";

export default function AboutMe() {
	return (
		<section id="aboutme">
			<div className="relative flex h-screen flex-col overflow-hidden bg-neutral-900 pt-24 text-white">
				<div className="relative flex h-full w-full flex-col items-center justify-center gap-8 p-4 md:p-8">
					<h1 className="relative w-full text-left text-6xl font-extrabold md:w-1/2 md:text-8xl">
						<span className="absolute -top-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{" </h1>"}
						</span>
						Hey,
						<span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{" </h1>"}
						</span>
					</h1>
					<h1 className=" w-full bg-gradient-to-r from-pink-500 to-violet-500 text-left text-5xl font-extrabold md:w-1/2 md:text-8xl">
						I'm Inderpreet.
					</h1>
					<h1 className="relative flex w-full flex-col whitespace-normal text-2xl font-semibold text-neutral-400 md:w-1/2 md:text-4xl">
						<span className="absolute -top-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{"<p> "}
						</span>
						A Web developer
						<span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{" </p>"}
						</span>
					</h1>
				</div>
				<PurpleBlob />
				<YellowBlob />
				<PinkBlob />
			</div>
		</section>
	);
}
