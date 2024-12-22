"use client"

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";
import { useSectionInView } from "@/lib/hooks";

export default function About() {

	// Threshold for % of section that needs to be displayed on page for navbar transition
	const threshold = 0.85;
	const {ref} = useSectionInView("About", threshold);

	return (
		<section
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-15 scroll-mt-28"
			ref={ref}
			id="about">
			<SectionHeader>About me</SectionHeader>
			<motion.div
				className="font-normal text-center"
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.1, ease: "easeOut" }}>
				<p className="pb-10 ">
					I enjoy algorithms and solving complex problems, and recently have gotten into competitive programming as a hobby.
				</p>
			</motion.div>
		</section>
	);
}
