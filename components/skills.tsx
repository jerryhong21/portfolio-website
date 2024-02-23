"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";
import { skillsData } from "@/lib/data";

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

export default function Skills() {
	const threshold = 1;
	const { ref } = useSectionInView("Skills", threshold);

	return (
		<section
			id="skills"
			ref={ref}
			className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
			<SectionHeader>My Skills</SectionHeader>
			<ul className="flex flex-wrap gap-2 text-lg justify-center text-gray-800">
				{skillsData.map((skill, index) => (
					<motion.li
						className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
						key={index}
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{
							once: true,
						}}
						custom={index}>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	);
}
