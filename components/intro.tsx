"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import jerry_headshot from "@/public/intro-headshot.png"
import { linkedInUrl, instagramUrl, githubUrl } from "@/lib/data";

import React from "react";

export default function Intro() {

	const wavingEmoji = "👋";

	// Threshold for % of section that needs to be displayed on page for navbar transition
	const threshold = 0.1;
	const { ref } = useSectionInView("Home", threshold);

	return (
		<section
			className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[80rem]"
			id="home"
			ref={ref}>
			<div className="flex justify-center items-center">
				<motion.div
					className="relative"
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: "tween",
						duration: 0.2,
					}}>
					<Image
						src={jerry_headshot}
						alt="Jerry Hong Portrait"
						width="192"
						height="192"
						quality="100"
						priority={true}
						className="h-[8rem] w-[8rem] rounded-full object-cover border-[0.35rem] border-white shadow-xl"></Image>
					<motion.span
						className="absolute bottom-0 right-0 text-3xl"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.1,
							duration: 0.4,
						}}>
						{wavingEmoji}
					</motion.span>
				</motion.div>
			</div>
			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}>
				<span className="font-bold">Hello, I&apos;m Jerry.</span>{" "}
				I&apos;m a <span className="font-bold">student at UNSW </span>
				studying Computer Science and Mechatronics Engineering. I have a
				passion for <span className="italic">web-dev </span> and how A.I
				could simplify{" "}
				<span className="underline">our everyday tasks.</span>
			</motion.h1>
			<motion.div
				className="flex flex-col justify-center items-center sm:flex-row text-lg font-medium gap-4"
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.3, ease: "easeIn" }}>
				<Link
					href="#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center rounded-full outline-none focus:scale-105 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
					{`Contact me here `}
					<BsArrowRight className="opacity-70 translate-x-1 group-hover:translate-x-2" />
				</Link>
				<a
					href="/cv.pdf"
					download={true}
					className="group bg-white text-gray-900 px-7 py-3 flex items-center rounded-full outline-none focus:scale-105 hover:scale-110 hover:bg-gray-100 active:scale-105 transition border border-black/10">
					Download CV{" "}
					<HiDownload className="group-hover: translate-x-1 opacity:70" />
				</a>
				<a
					href={githubUrl}
					target="_blank"
					className="bg-white text-gray-900 p-4 flex items-center rounded-full outline-none focus:scale-105 hover:scale-[1.15] hover:text-gray-950 hover:bg-gray-100 active:scale-105 transition border border-black/10">
					<BsGithub />
				</a>
				<a
					href={linkedInUrl}
					target="_blank"
					className="bg-white text-gray-900 p-4 flex items-center rounded-full outline-none focus:scale-105 hover:scale-[1.15] hover:text-gray-950 hover:bg-gray-100 active:scale-105 transition border border-black/10">
					<BsLinkedin />
				</a>
				<a
					href={instagramUrl}
					target="_blank"
					className="bg-white text-gray-900 p-4 flex items-center rounded-full outline-none focus:scale-105 hover:scale-[1.15] hover:text-gray-950 hover:bg-gray-100 active:scale-105 transition border border-black/10">
					<BsInstagram />
				</a>
			</motion.div>
		</section>
	);
}
