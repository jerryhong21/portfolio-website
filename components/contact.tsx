"use client";

import React from "react";
import SectionHeader from "./section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
// import { sendEmail } from "@/actions/sendEmail";
// import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FaHammer } from "react-icons/fa";

export default function Contact() {
	const email = "jh1012037421@gmail.com";
	const { ref } = useSectionInView("Contact");
	return (
		<motion.section
			id="contact"
			ref={ref}
			className="mt-28 scroll-mt-28 w-[min(100%,50rem)]"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}>
			<SectionHeader>Contact Me</SectionHeader>

			<p className="text-gray-700  text-center -mt-6">
				Please contact me through the following form. Alternatively, you
				can directly reach me at{" "}
				<a
					className="underline"
					href={`mailto:${email}`}
					target="_blank">
					{email}
				</a>
			</p>

			<form action="" className="mt-10 flex flex-col">
				<input
					type="email"
					placeholder="your.email @ yapyapyap.com"
					className="h-14 px-4 rounded-lg border border-black/[0.1] transition-all"
					maxLength={500}
				/>
				<textarea
					name="message"
					placeholder="Start writing your message here!"
					required
					className="border border-black/[0.1] h-52 my-3 rounded-lg px-4 py-3 focus:border-black"
					maxLength={5000}></textarea>
				<button
					type="submit"
					className="group h-[3rem] w-[7rem] bg-gray-900 flex items-center justify-center gap-2 text-white rounded-full outline-none transition-all group px-7 py-3  focus:scale-105 hover:scale-[120%] active:scale-105  border border-black/10 hover:bg-gray-950">
					Submit{" "}
					<FaHammer className="w-10 h-[2rem] group-hover:translate-x-1 group-hover:-translate-y-1" />
				</button>
			</form>
		</motion.section>
	);
}
