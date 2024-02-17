import Intro from "@/components/intro";
import Header from "@/components/header";
import SectionDivider from "@/components/section-divider";

export default function Home() {
	return (
		<main className="flex flex-col items-center px-4">
			<Header></Header>
			<Intro></Intro>
			<SectionDivider></SectionDivider>
		</main>
	);
}
