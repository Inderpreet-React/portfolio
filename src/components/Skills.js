import React from "react";
import JavascriptLogo from "../images/JavascriptLogo";
import ReactIcon from "../images/ReactIcon";
import FirebaseLogo from "../images/FirebaseLogo";
import NodeIcon from "../images/NodeIcon";
import TailwindIcon from "../images/TailwindIcon.png";
import BootstrapIcon from "../images/bootstrapLogo.png";
import SassIcon from "../images/SassIcon";
import MongoDBIcon from "../images/MongoDBIcon";
import Express from "../images/express.png";
import HtmlIcon from "../images/HtmlIcon";
import CssIcon from "../images/CssIcon";
import ReduxIcon from "../images/ReduxIcon";
import GitIcon from "../images/GitIcon";
import MaterialIcon from "../images/MaterialIcon";
import RQueryIcon from "../images/RQueryIcon";
import BashIcon from "../images/BashIcon";
import { motion } from "framer-motion";

export default function Skills({ isSkillsRef }) {
	return (
		<section
			id="skills"
			className="h-full min-h-screen w-full overflow-hidden bg-neutral-900 p-6 pt-32 text-white md:p-12 md:pb-0 md:pt-32"
		>
			<div className="flex h-full w-full flex-col gap-10 md:flex-row md:gap-20">
				<div className="flex w-full flex-col gap-10 md:w-1/2">
					<div className="relative">
						<span className="absolute -top-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{"<h1>"}
						</span>
						<motion.h1
							ref={isSkillsRef}
							initial="front"
							whileInView="animation"
							transition={{ duration: 0.5, delay: "0.1" }}
							variants={{
								front: { scale: 1.2, x: "-10%" },
								animation: { scale: 1, x: 0 },
							}}
							viewport={{ once: true }}
							className="relative max-w-min overflow-hidden text-ellipsis bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text p-2 text-5xl font-extrabold text-transparent md:whitespace-nowrap md:text-6xl "
						>
							Skills & Experience
						</motion.h1>
						<span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{"</h1>"}
						</span>
					</div>
					<motion.p
						initial="hidden"
						whileInView="visible"
						transition={{ duration: "0.7", delay: "0.5" }}
						variants={{
							hidden: { opacity: 0, scale: 1.1 },
							visible: { opacity: 1, scale: 1 },
						}}
						viewport={{ once: true }}
						className="relative text-justify text-lg"
					>
						<span className="absolute -top-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{"<p>"}
						</span>
						Est est culpa voluptate nulla eiusmod occaecat irure eiusmod
						ullamco. Irure cupidatat consequat consectetur ad laboris excepteur
						cupidatat voluptate ipsum aliqua Lorem consequat. Ea est do aute sit
						reprehenderit. ex tempor consectetur ut amet ut culpa minim.
						<br />
						<br />
						aliquip incididunt consectetur ullamco laborum eu veniam ad sunt
						cupidatat. Laborum non anim nulla sint est consequat in proident ad
						sunt magna. Fugiat nostrud aute magna cupidatat sunt excepteur irure
						id in officia sit qui.
						<span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{"</p>"}
						</span>
					</motion.p>
					<motion.p
						initial="down"
						whileInView="animation"
						transition={{ duration: 0.3, delay: "0.1" }}
						variants={{
							down: { y: "300%" },
							animation: { y: 0 },
						}}
						viewport={{ once: true }}
						className="relative text-justify text-lg"
					>
						<span className="absolute -top-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{"<a>"}
						</span>
						Visit my{" "}
						<a
							href="https://github.com/Inderpreet-React"
							target="_blank"
							rel="noopener noreferrer"
							className="relative font-semibold text-white after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-md after:bg-gradient-to-l after:from-pink-500 after:to-violet-500"
						>
							LinkedIn
						</a>{" "}
						or{" "}
						<a
							className="relative font-semibold text-white after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-md after:bg-gradient-to-l after:from-pink-500 after:to-violet-500"
							href="#contactme"
						>
							Contact me{" "}
						</a>
						directly.
						<span className="absolute -bottom-6 -left-2 text-lg font-normal italic text-neutral-700 md:-left-8">
							{"</a>"}
						</span>
					</motion.p>
				</div>
				<motion.div
					initial="right"
					whileInView="left"
					transition={{ duration: "0.5", delay: 0.2 }}
					variants={{
						right: { x: 200, opacity: 0 },
						left: { x: 0, opacity: 1 },
					}}
					viewport={{ once: true }}
					className="mb-4 flex w-full flex-col gap-4 pb-4 md:mb-0 md:w-1/2 md:pb-0"
				>
					<h3 className="relative max-w-min whitespace-nowrap text-3xl font-extrabold text-white  after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-md after:bg-gradient-to-l after:from-pink-500 after:to-violet-500 md:pt-10">
						Tech Stack
					</h3>
					<div className="relative text-xl font-bold tracking-widest md:ml-12 md:font-bold">
						<span className="absolute -top-4 -left-0 text-lg font-normal italic text-neutral-700 md:-top-3 md:-left-12">
							{"<ul>"}
						</span>
						<div className="my-2 grid grid-cols-4 gap-y-12 md:grid-cols-5">
							<HtmlIcon hw={"16"} />
							<CssIcon hw={"16"} />
							<JavascriptLogo hw={"16"} />
							<ReactIcon hw={"16"} />
							<NodeIcon hw={"16"} />
							<FirebaseLogo hw={"16"} />
							<SassIcon hw={"16"} />
							<MongoDBIcon hw={"16"} />
							<ReduxIcon hw={"16"} />
							<GitIcon hw={"16"} />
							<MaterialIcon hw={"16"} />
							<RQueryIcon hw={"16"} />
							<BashIcon hw={"16"} />
							<div className="w-16 transition-all hover:scale-125">
								<img src={TailwindIcon} alt="Tailwind" className="h-16 w-16" />
							</div>
							<div className="w-16 transition-all hover:scale-125">
								<img src={BootstrapIcon} alt="Bootstrap" className="w-16" />
							</div>
							<div className="flex w-12 items-center justify-center transition-all hover:scale-125 md:justify-start">
								<img src={Express} alt="express" className="h-12" />
							</div>
						</div>
						<span className="absolute -left-0 -bottom-8 text-lg font-normal italic text-neutral-700 md:-left-12">
							{"</ul>"}
						</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
