"use client"

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
	const {ref, inView} = useInView();
	const {setActiveSection} = useActiveSectionContext();
	useEffect(() => {		
		if (inView) {
			setActiveSection("About");
		}
	}, [inView, setActiveSection])

	return (
		<section
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-15 scroll-mt-28"
			ref={ref}
			id="about">
			<SectionHeader>About me</SectionHeader>
			<motion.div
				className="font-normal text-center"
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.1, ease: "easeOut" }}>
				<p className="pb-10 ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Pellentesque et neque mollis, varius est nec, euismod
					lectus. In vulputate urna orci, a sodales felis varius at.
					Etiam vitae rutrum ligula. Etiam cursus nisi quis pretium
					pretium. In vitae elit vitae lorem interdum sollicitudin.
					Proin ultricies commodo enim ac rutrum. Duis et felis sed
					nulla auctor tempus. Fusce gravida lectus at erat molestie,
					non congue velit faucibus. In hac habitasse platea dictumst.
				</p>
				<p className="pb-10">
					In faucibus lobortis mi eget efficitur. Sed enim tortor,
					finibus non magna eget, interdum porta tortor. Integer nec
					tincidunt tortor, sit amet feugiat augue. Proin semper
					tincidunt scelerisque. Ut et hendrerit tellus, a rhoncus
					quam. Donec nec lacus ac velit bibendum pretium accumsan a
					lacus. Class aptent taciti sociosqu ad litora torquent per
					conubia nostra, per inceptos himenaeos. Nulla quam erat,
					aliquet sed metus ac, placerat feugiat tellus. Aliquam erat
					volutpat. Ut a bibendum elit, luctus pretium est.
				</p>
			</motion.div>
		</section>
	);
}
