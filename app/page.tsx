import Intro from "@/components/intro";
import Header from "@/components/header";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";


export default function Home() {
	return (
		<main className="flex flex-col items-center px-4 mb-30">
			<Intro></Intro>
			<SectionDivider></SectionDivider>
			<About></About>
			<Projects></Projects>
			<Skills></Skills>
		</main>
	);
}
