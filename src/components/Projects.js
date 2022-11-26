import React from "react";
import {
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Projects() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="flex h-screen w-full flex-col gap-4 bg-neutral-800 p-4 pt-24 text-white md:p-8 md:pt-24">
				<h1 className="mt-2 text-4xl font-extrabold underline underline-offset-8">
					Projects
				</h1>
				<div className="flex h-full w-full items-center justify-center">
					<div className=" h-full w-full rounded">
						<div className="relative flex h-full w-full items-center justify-center border-2 border-neutral-500">
							<div className="absolute left-4 top-[42%] flex h-12 w-12 cursor-pointer items-center justify-center rounded border-2 border-purple-600 fill-white shadow-md shadow-purple-600 transition-all hover:shadow-lg hover:shadow-purple-600">
								<ChevronDoubleLeftIcon className="h-10 w-10" />
							</div>
							<div className="absolute right-4 top-[42%] flex h-12 w-12 cursor-pointer items-center justify-center rounded border-2 border-purple-600 fill-white shadow-md shadow-purple-600 transition-all hover:shadow-lg hover:shadow-purple-600">
								<ChevronDoubleRightIcon className="h-10 w-10" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
