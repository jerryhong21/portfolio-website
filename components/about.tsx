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
					As an expressive, outgoing, and curious individual, I
					approach everyday challenges with an analytical and
					calculating mindset. Currently, I am a content writer at an
					e-learning company{" "}
					<span className="italics">Learnable</span>, a university
					student, and an aspiring software developer, deeply
					engrossed in integrating technology into everyday
					problem-solving, especially in the realms of artificial
					intelligence. 
				</p>
				<p className="pb-10">
					My desire for product aesthetics drives my passion for
					frontend development and enhancing UI/UX. I revel in the
					freedom to build bespoke solutions, tackling problems so
					unique they&apos;re unlikely to be encountered by anyone else.
					The thrill of crafting over-engineered solutions, even when
					they demand more time than manual efforts, fuels my sense of
					achievement.
				</p>
				<p className="pb-10">
					With a fervent interest in computer science, statistics, and
					physics, I am always eager to seize opportunities that
					broaden my entrepreneurial and technical horizons.
				</p>
			</motion.div>
		</section>
	);
}
