import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import examsnap from "@/public/examsnap.png";
import bitemap from "@/public/bitemap.png";
import portfolioPng from "@/public/portfolio-website.png";
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
			"I am currently pursuing a dual degree in Engineering and Computer Science at UNSW, which I believe will equip me with the necessary skills to design, construct, and program automated systems that enhance our daily lives.",
		icon: React.createElement(TbDeviceDesktopCode),
		date: "2023 - present",
	},
] as const;

export const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "This very portfolio website, featuring responsive designs as my gateway into front-end web dev. Through framer motion, the website includes innovative animations and a seemless scrolling experience, and uses Resend API to enable in-app emailing features.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer", "Git"],
    imageUrl: portfolioPng,
  },
  {
    title: "BiteMap",
    description:
      "My very first project, a web-app for finding your favourite restaurants in your preferred area. Built using Yelp API and simple react framework, this project taught me the fundamenetals of front-end wed design.",
    tags: ["JavaScript", "HTML", "React", "Git"],
    imageUrl: bitemap,
  },
  {
    title: "ExamSnap",
    description:
      "ExamSnap efficiently digitizes exam questions with advanced screenshotting, designed for scalable analysis and easy access, enhancing study precision and breadth.",
    tags: ["Python", "Git"],
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