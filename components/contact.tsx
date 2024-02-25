"use client";

import React, { useEffect } from "react";
import SectionHeader from "./section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import sendEmail from "@/actions/sendEmail";
// import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FaHammer } from "react-icons/fa";
import SubmitBtn from "./submit-button";

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

			<form
				className="mt-10 flex flex-col"
				action={async (formData: FormData) => {
					const { data, error } = await sendEmail(formData);
					if (error) {
						toast.error(error);
						return;
					}
					toast.success("Email sent!");
					return;
				}}>
				<input
					type="email"
					name="senderEmail"
					placeholder="your.email @ yapyapyap.com"
					className="h-14 px-4 rounded-lg border border-black/10"
				/>
				<textarea
					name="message"
					placeholder="Start writing your message here!"
					required
					className="border border-black/[0.1] h-52 my-3 rounded-lg px-4 py-3 "></textarea>
				<SubmitBtn></SubmitBtn>
			</form>
		</motion.section>
	);
}
