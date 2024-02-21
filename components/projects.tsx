"use client";
import React, { useEffect } from "react";
import SectionHeader from "./section-header";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";


export default function Projects() {

	const threshold = 0.5;
	const { ref } = useSectionInView("Projects", threshold);

	return (
		<section id="projects" className='scroll-mt-24 mb-20' ref={ref}>
			<SectionHeader>My Projects</SectionHeader>
			<div>
				{projectsData.map((project, i) => (
					<React.Fragment key={i}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}

