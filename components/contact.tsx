"use client";

import React from "react";
import SectionHeader from "./section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
// import { sendEmail } from "@/actions/sendEmail";
// import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
	
    const {ref} = useSectionInView('Contact');
    return (
		<section id="contact" ref={ref} className="mt-28 scroll-mt-28">
			<SectionHeader>Contact Me</SectionHeader>
		</section>
	);
}
