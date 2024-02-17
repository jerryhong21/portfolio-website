"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import React from "react";

export default function Intro() {
	// TEMPORARY IMAGE SRC
	const imgsrc =
		"https://a.espncdn.com/i/headshots/nba/players/full/1966.png";
	const wavingEmoji = "👋";
	return (
		<section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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
						src={imgsrc}
						alt="Jerry Hong Portrait"
						width="192"
						height="192"
						quality="95"
						priority={true}
						className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"></Image>
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
				<span className="font-bold">Hello, I'm Jerry.</span> I'm a{" "}
				<span className="font-bold">student at UNSW </span>
				studying Computer Science and Mechatronics Engineering. I have a
				passion for <span className="italic">web-dev </span> and how A.I
				could simplify{" "}
				<span className="underline">our everyday tasks.</span>
			</motion.h1>
		</section>
	);
}
