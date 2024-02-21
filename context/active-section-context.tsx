"use client"
import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = {
	children: React.ReactNode;
};

// The type of setActiveSection was obtained by hovering over the "setActiveSection" in the useState hook initialiation
type ActiveSectionContextType = {
	activeSection: SectionName;
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
	timeOfLastClick: number;
	setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
	null
);

export default function ActiveSectionContextProvider({
	children,
}: ActiveSectionContextProviderProps) {
	const [activeSection, setActiveSection] = useState<SectionName>("Home");
	const [timeOfLastClick, setTimeOfLastClick] = useState(0);

	return (
		<ActiveSectionContext.Provider
			value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
			{children}
		</ActiveSectionContext.Provider>
	);
}


export function useActiveSectionContext() {
	const context = useContext(ActiveSectionContext);

	// This custom hook handles the case where context is null, avoids typescript type error if useContext is called in header.tsx
	if (context == null) {
		throw new Error(
			"useActiveSectionContext must be used within an ActiveSectionContextProvider"
		);
	}
	return context;
}