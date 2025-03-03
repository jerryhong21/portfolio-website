"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import CursorBlinker from "./cursor-blinker";
import React, { useEffect, useState } from "react";
import SectionHeader from "./section-header";
import SectionDivider from "./section-divider";
import TypeWriter from "./typewriter";
import { useSectionInView } from "@/lib/hooks";
import genText from "@/actions/getQuote";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
("");

export default function Quotebox() {
	const [quote, setQuote] = useState("");
	const [showQuote, setShowQuote] = useState(false);
	const fetchQuote = async () => {
		try {
			const result = await genText();
			console.log("Fetched quote:", result);
			if (result) setQuote(result);
		} catch (e) {
			console.error("Error fetching quote:", e);
		}
	};
	useEffect(() => {
		fetchQuote();
		console.log(quote);

		const timer = setTimeout(() => {
			setShowQuote(true);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<motion.section
			id="quotebox"
			className="mt-10 -mb-10"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}>
			<div>
				<TypeWriter fontSize="big">
					Before we begin, here is something to inspire your day...
					Made just for you.
				</TypeWriter>
			</div>

			{/* <div className="flex items-center border border-black/[0.3] min-h-[3.75rem] my-3 rounded-lg px-4 py-3 bg-[#fafbfb] word-wrap text-left justify-center"> */}
			<div className="flex items-center border border-black/[0.3] min-h-[3.75rem] my-3 rounded-lg px-4 py-3 bg-[#fafbfb] word-wrap text-left justify-center  max-w-[50rem] overflow-hidden">
				{showQuote && <TypeWriter fontSize="small">{quote}</TypeWriter>}
			</div>

			<div className="text-right m-4">
				<HoverCard>
					<HoverCardTrigger>
						<Button>@gpt-3.5</Button>
					</HoverCardTrigger>
					<HoverCardContent className="w-80">
						<div className="flex justify-between space-x-4 text-left">
							<div className="space-y-1">
								<h4 className="text-sm font-semibold">
									@openAI
								</h4>
								<p className="text-sm">
									This quote is generated by gpt-3.5 turbo.
								</p>
							</div>
						</div>
					</HoverCardContent>
				</HoverCard>
			</div>
		</motion.section>
	);
}
