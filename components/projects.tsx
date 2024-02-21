"use client";
import React, { useEffect } from "react";
import SectionHeader from "./section-header";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";


export default function Projects() {
	const { ref, inView } = useInView();
	const { setActiveSection } = useActiveSectionContext();

	useEffect(() => {
		if (inView) {
			setActiveSection("Projects");
		}
	}, [inView, setActiveSection]);

	return (
		<section id="projects" className='scroll-mt-24' ref={ref}>
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

