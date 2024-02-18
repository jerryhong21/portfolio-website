"use client";
import React from "react";
import SectionHeader from "./section-header";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
	return (
		<section id="projects" className='scroll-mt-24'>
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

