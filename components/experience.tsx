"use client";

import React, { useEffect, useState } from "react";
import SectionHeader from "./section-header";
import { useSectionInView } from "@/lib/hooks";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {
	const { ref, inView } = useSectionInView("Experience");
	const [sectionTriggered, setSectionTriggered] = useState(false);
	const [sectionTriggeredOnce, setSectionTriggeredOnce] = useState(false);
	useEffect(() => {
		if (inView && !sectionTriggeredOnce) {
			setSectionTriggeredOnce(true);
			setSectionTriggered(true);
		} else {
			setSectionTriggered(false);
		}
	}, [inView, sectionTriggeredOnce]);

	return (
		<section id="experience" ref={ref} className="scroll-mt-28 mb:28 small:mb-40">
			<SectionHeader>My Life</SectionHeader>
			<VerticalTimeline lineColor="" animate={inView && sectionTriggered}>
				{experiencesData.map((item, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							visible={true}
							contentStyle={{
								background: "#f3f4f6",
								boxShadow: "none",
								border: "1px solid rgba(0, 0, 0, 0.05)",
								textAlign: "left",
								padding: "1.3rem 2rem",
							}}
							contentArrowStyle={{
								borderRight: "0.4rem solid #9ca3af",
							}}
							date={item.date}
							icon={item.icon}
							iconStyle={{
								background: "white",
								fontSize: "1.5rem",
							}}>
							<h3 className="text-xl font-semibold capitalize">
								{item.title}
							</h3>
							<p className="font-small !mt-3">{item.location}</p>
							<p className="text-gray-700">{item.description}</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
}
