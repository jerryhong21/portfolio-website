import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import examsnap from "@/public/examsnap.png";
import bitemap from "@/public/bitemap.png";
import portfolioPng from "@/public/portfolio-website.png";
import preflopPokerPng from "@/public/preflop-poker-chart.png";
import { TbDeviceDesktopCode } from "react-icons/tb";

// export const socialMediaLinks = [
// 	{
// 		socialMedia: "github",
// 		url: "https://github.com/jerryhong21",
// 	},
// 	{
// 		socialMedia: "instagram",
// 		url: "https://www.linkedin.com/in/jerry-hong-33a04a182/",
// 	},
// 	{
// 		socialMedia: "linkedin",
// 		url: "https://www.linkedin.com/in/jerry-hong-33a04a182/",
// 	},
// ] as const;
	export const linkedInUrl = "https://www.linkedin.com/in/jerry-hong-33a04a182/" as const;
	export const instagramUrl = "https://www.instagram.com/jerry_hong21/" as const;
	export const githubUrl = "https://github.com/jerryhong21" as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  { 
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
 
export const experiencesData = [
	{
		title: "Graduated Cranbrook School",
		location: "Bellevue Hill, Sydney",
		description:
			"Finished HSC at Cranbrook School.",
		icon: React.createElement(LuGraduationCap),
		date: "2022",
	},
	{
		title: "UNSW",
		location: "Bachelor of Computer Science",
		description:
			"I was doing Computer Science and Mechatronics Engineering until I realised I did not have the talent nor the interest for hardware stuff.",
		icon: React.createElement(TbDeviceDesktopCode),
		date: "2023 - present",
	},
	{
		title: "Intern @ SafetyCulture",
		location: "Surry Hills, NSW",
		description: "Fullstack Software Engineering intern, playing table tennis and sometimes coding.",
		icon: React.createElement(CgWorkAlt),
		date: "Dec 2024 - Feb 2025",
	},
	{
		title: "Intern @ TikTok",
		location: "Circular Quay, NSW",
		description: "Backend / server intern in TikTok-LIVE, worked on a few features to interrupt your scrolls to maximise shareholder value.",
		icon: React.createElement(CgWorkAlt),
		date: "Mar 2025 - Oct 2025",
	},
	{
		title: "Intern @ Susquehanna",
		location: "Barangaroo, NSW",
		description: "Delta one team, trading basically everything but options.",
		icon: React.createElement(CgWorkAlt),
		date: "Nov 2025 - present",
	},
] as const;

export const projectsData = [
	{
		title: "Preflop Poker Solver",
		description:
			"A AI solver for a simplified version of Heads Up Texas Hold'em. The AI model uses CFR (Counterfactual Regret Minimisation) and MCTS (Monte-Carlo Tree Search) strategies to simulate iterative self-play, culminating in a complete strategy profile all possible decision points in the game at Nash Equilibrium",
		tags: ["C++","Python", "MatLab", "Counterfactual Regret Minimisation"],
		imageUrl: preflopPokerPng,
	},
	{
		title: "jhong21.com",
		description:
			"This portfolio website, featuring responsive designs as my gateway into front-end web dev. Through framer motion, the website includes innovative animations and a seemless scrolling experience, and uses Resend API to enable in-app emailing features.",
		tags: ["React", "TypeScript", "Next.js", "Tailwind"],
		imageUrl: portfolioPng,
	},
	{
		title: "ExamSnap",
		description:
			"ExamSnap efficiently digitizes exam questions with advanced screenshotting, designed for scalable analysis and easy access, enhancing study precision and breadth.",
		tags: ["Python"],
		imageUrl: examsnap,
	},
] as const;

export const skillsData = [
  "C",
  "C++",
  "Go",
  "gRPC",
  "mySQL",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "Express",
  "Python",
  "Framer Motion",
  "HTML",
  "CSS",
] as const;