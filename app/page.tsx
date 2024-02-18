import Intro from "@/components/intro";
import Header from "@/components/header";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";


export default function Home() {
	return (
		<main className="flex flex-col items-center px-4">
			<Header></Header>
			<Intro></Intro>
			<SectionDivider></SectionDivider>
			<About></About>
			<Projects></Projects>
		</main>
	);
}
