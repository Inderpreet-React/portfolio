import React from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function ScrollDown() {
	return (
		<motion.div
			animate={{ y: ["-200%", "10%"] }}
			transition={{ repeat: Infinity, repeatType: "reverse" }}
			className="absolute right-5  hidden h-10 w-10 text-white lg:bottom-5 lg:flex"
		>
			<ChevronDoubleDownIcon />
		</motion.div>
	);
}
