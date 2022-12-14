import React from "react";
import { motion } from "framer-motion";
import GithubIcon from "../images/GithubIcon";

const variants = {
	entry: { y: "30%", scale: 1.01, opacity: 0 },
	exit: { y: 0, scale: 1, opacity: 1 },
	hover: { y: "-5%" },
};

export default function ProjectItem({ img, name, link }) {
	return (
		<motion.div
			initial="entry"
			whileInView="exit"
			whileHover="hover"
			transition={{ duration: "0.5", ease: "easeInOut" }}
			variants={variants}
			viewport={{ once: true }}
			className="group relative h-full w-full brightness-90"
		>
			<div className="relative z-20 overflow-hidden transition-all group-hover:shadow-lg group-hover:shadow-amber-200">
				<img
					className="aspect-video w-full lg:h-full"
					src={img}
					alt="project"
				/>
			</div>
			<div className="absolute top-0 left-0 z-30 h-full w-full overflow-hidden bg-[#00000080] opacity-0 transition-all group-hover:opacity-100">
				<div>
					<span
						style={{ clipPath: "polygon(0 0, 100% 0, 100% 40%, 0% 100%)" }}
						className="absolute left-0 -top-2 h-1/2 w-full bg-gradient-to-r from-pink-400 to-violet-500 pl-4 pt-4 text-2xl font-bold tracking-normal text-white underline decoration-4 underline-offset-8"
					>
						{name || "Name"}
					</span>
					<div
						style={{ clipPath: "polygon(0 75%, 100% 0, 100% 100%, 0% 100%)" }}
						className="absolute -bottom-2 right-0 h-1/3 w-full bg-gradient-to-r from-pink-400 to-violet-500"
					>
						<a
							href={link || "#"}
							target="_blank"
							rel="noopener noreferrer"
							className="absolute right-4 bottom-4 h-10 w-10 fill-neutral-800"
						>
							<GithubIcon cls="h-10 w-10 hover:scale-110 transition-all" />
						</a>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
