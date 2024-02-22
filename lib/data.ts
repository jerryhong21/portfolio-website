import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import examsnap from "@/public/examsnap.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { TbDeviceDesktopCode } from "react-icons/tb";


// export const socialMediaLinks = {
//   {
//     socialMediaName: "LinkedIn",
//     url: 'https://www.linkedin.com/in/jerry-hong-33a04a182/'
//   },
//   {
//     socialMediaName: "Instagram",
//     url: 'https://www.linkedin.com/in/jerry-hong-33a04a182/'
//   }

// }

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
		location: "Belleve Hill, Sydney",
		description:
			"Finished HSC at Cranbrook School as a Prefect. ATAR: 99.90",
		icon: React.createElement(LuGraduationCap),
		date: "2022",
	},
	{
		title: "Content Writer @ Learnable",
		location: "CBD, Sydney",
		description:
			"Joined the Physics team at Learnable, an all-in-one, interactive e-Learning company. I enhanced a 6000+ question database across multiple subjects by leading the development of advanced data analysis systems with Appscript. I developed a Python-based automated screenshot tool for improved analytics.",
		icon: React.createElement(CgWorkAlt),
		date: "2023 - present",
	},
	{
		title: "UNSW",
		location: "Bachelor of Computer Science + Engineering (Mechatronics)",
		description:
			"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(TbDeviceDesktopCode),
		date: "2023 - present",
	},
] as const;

export const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "This very portfolio website, featuring responsive designs as my gateway into front-end web dev. The website includes innovative animations and a seemless scrolling experience",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer"],
    imageUrl: rmtdevImg,
  },
  {
    title: "BiteMap",
    description:
      "A web-app for finding your favourite restaurants in your preferred area",
    tags: ["React"],
    imageUrl: corpcommentImg,
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
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express",
  "Python",
  "Framer Motion",
] as const;