import React from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function ScrollDown() {
	return (
		<motion.div
			animate={{ y: ["-200%", "10%"] }}
			transition={{ repeat: Infinity, repeatType: "reverse" }}
			className="fixed right-5 z-50 hidden h-10 w-10 text-white md:bottom-5 md:flex"
		>
			<ChevronDoubleDownIcon />
		</motion.div>
	);
}
