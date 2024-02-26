"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	description,
	tags,
	imageUrl,
}: ProjectProps) {
	const ref = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "0.9 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.section
			className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] even:pl-8 sm:mb-4"
			ref={ref}
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}>
			<div className=" px-5 pt-7 pb-[2.75rem] sm:pl-10 sm:pr-2 sm:max-w-[50%] flex flex-col h-full relative group-even:ml-[19rem]">
				<h3 className="font-semibold text-2xl">{title}</h3>
				<p className="mt-2 text-[0.8rem] w-[75%] sm:w-full sm:leading-relaxed text-gray-700 mb-4">
					{description}
				</p>
				<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
					{tags.map((tag, index) => (
						<li
							key={index}
							className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">
							{tag}
						</li>
					))}
				</ul>
			</div>
			<Image
				src={imageUrl}
				alt={`Project I worked on: ${title}`}
				quality={95}
				className="absolute top-8 -right-40 w-[20rem] sm:w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] 
                sm:group-even:-left-40 
				group-even:w-[10rem]
                group-even:-left-20
                group-hover:-translate-x-3 
                group-hover:translate-y-3 
                group-hover:-rotate-3 
                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-3 
                transition duration-75"></Image>
		</motion.section>
	);
}
