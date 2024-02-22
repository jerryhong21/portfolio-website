import { SectionName } from "./types";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import React, { useEffect } from "react";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
	const { ref, inView } = useInView({
		threshold: threshold,
	});
	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionName);
		}
	}, [inView, setActiveSection, sectionName, timeOfLastClick]);

	return {
		ref,
        inView
	};
}
