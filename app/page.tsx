import Intro from "@/components/intro";
import Header from "@/components/header";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
	return (
		<main className="flex flex-col justify-around items-center px-4 ">
			<Intro></Intro>
			<SectionDivider></SectionDivider>
			<About></About>
			<Projects></Projects>
			<Skills></Skills>
			<Experience></Experience>
			<Contact></Contact>			
			<Footer></Footer>
		</main>
	);
}
