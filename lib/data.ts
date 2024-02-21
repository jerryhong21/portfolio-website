import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import examsnap from "@/public/examsnap.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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