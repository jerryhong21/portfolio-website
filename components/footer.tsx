import React from "react";

export default function Footer() {
	return (
		<footer className="mt-[7rem] px-4 text-center text-gray-500 ">
			<small className="mb-2 block text-xs">
				&copy; 2024 Jerry Hong. All rights reserved.
			</small>
			<p className="text-xs">
				<span className="font-semibold">About this website:</span> built
				with React & Next.js (App Router & Server Actions), TypeScript,
				Tailwind CSS, Framer Motion, React Email & Resend, Vercel
				hosting.
			</p>
			<p className="text-xs underline mt-2">
				<a href="https://www.youtube.com/@ByteGrad" target="_blank">
					Inspired by {"ByteGrad "}
				</a>{" "}
			</p>
		</footer>
	);
}
