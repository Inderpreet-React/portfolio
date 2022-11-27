import React from "react";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";

export default function Projects() {
	const img = "https://wallpaperaccess.com/full/138728.jpg ";

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="flex h-screen w-full flex-col gap-4 bg-neutral-800 p-4 pt-24 text-white md:p-8 md:pt-24">
				<h1 className="mt-2 text-4xl font-extrabold underline underline-offset-8 md:p-0">
					Projects
				</h1>
				<div className="flex h-full w-full items-center justify-center overflow-scroll">
					<div className=" h-full w-full rounded">
						<div className="relative flex h-full w-full flex-col gap-10 overflow-y-scroll p-2 md:flex-row md:items-center md:justify-start md:overflow-x-auto md:border-2 md:border-neutral-500 md:pt-4">
							<ProjectItem
								img={img}
								name="E-Shopee"
								desc={"A E-Commerce website"}
							/>
							<ProjectItem
								img={img}
								name="E-Shopee"
								desc={"A E-Commerce website"}
							/>
							<ProjectItem
								img={img}
								name="E-Shopee"
								desc={"A E-Commerce website"}
							/>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
