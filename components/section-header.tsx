import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
	children: React.ReactNode;
};

export default function SectionHeader({ children }: SectionHeadingProps) {
	return (
		<motion.h2
			className="flex justify-center items-center text-center text-3xl capitalize font-medium mb-8 drop-shadow-md"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.2 }}>
			{children}
		</motion.h2>
	);
}
