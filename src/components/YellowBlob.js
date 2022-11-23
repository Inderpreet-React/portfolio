import React from "react";
import { motion } from "framer-motion";

export default function YellowBlob() {
	return (
		<motion.div
			drag
			whileDrag={{ scale: 1.2 }}
			dragConstraints={{
				top: -100,
				left: -300,
				right: 50,
				bottom: 200,
			}}
			animate={{
				rotate: 360,
			}}
			transition={{ type: "tween", duration: 5, repeat: Infinity }}
			className="absolute bottom-24 right-20 h-48 w-48 fill-amber-500 md:top-56 md:right-10"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 428.4 394.6">
				<path d="M369.4 109.2c43.2 55.3 71.5 121.4 53.4 167.3-18.2 45.8-82.8 71.4-140.5 91.7-57.8 20.4-108.7 35.4-152.9 20.3C85.1 373.4 47.6 328.3 23.2 267c-24.5-61.2-35.8-138.6-2.5-191.7C54.1 22.2 132-6.6 200 1.3c68 7.9 126.1 52.5 169.4 107.9z"></path>
			</svg>
		</motion.div>
	);
}
