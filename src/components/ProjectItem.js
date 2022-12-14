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
			transition={{ duration: "0.3", ease: "linear" }}
			variants={variants}
			viewport={{ once: true }}
			className="group relative h-full w-full rounded"
		>
			<div className="relative z-20 overflow-hidden transition-all group-hover:shadow-lg group-hover:shadow-amber-200">
				<img
					className="aspect-video w-full rounded md:h-full"
					src={img}
					alt="project"
				/>
			</div>
			<div className="absolute top-0 left-0 z-30 h-full w-full bg-[#00000080] opacity-0 transition-all group-hover:opacity-100">
				<div>
					<span
						style={{ clipPath: "polygon(0 0, 100% 0, 100% 30%, 0% 100%)" }}
						className="absolute left-0 top-0 h-1/2 w-full rounded bg-[#f59e0be6] pl-2 pt-2 text-3xl font-bold tracking-normal text-gray-100 underline decoration-4 underline-offset-8"
					>
						{name || "Name"}
					</span>
					<div
						style={{ clipPath: "polygon(0 75%, 100% 0, 100% 100%, 0% 100%)" }}
						className="absolute bottom-0 right-0 h-1/3 w-full bg-[#f59e0be6]"
					>
						<a
							href={link || "#"}
							className="absolute right-4 bottom-4 h-10 w-10 fill-white"
						>
							<GithubIcon cls="h-10 w-10 hover:scale-110 transition-all" />
						</a>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
