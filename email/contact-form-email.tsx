import React from "react";
import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Container,
	Preview,
	Section,
	Text,
} from "@react-email/components"; // Ensure you have installed this package
import { Tailwind } from "@react-email/tailwind"; // Ensure you have installed this package

type ContactFormEmailProps = {
	message: string;
	senderEmail: string;
};

const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
	message,
	senderEmail,
}) => {
	return (
		<Html>
			<Head />
			<Preview>New message from your portfolio site</Preview>
			<Tailwind>
				<Body className="bg-gray-100 text-black">
					<Container>
						<Section className="bg-white border border-black my-10 px-10 py-4 rounded-md shadow-lg">
							<Heading className="text-2xl font-bold mb-4">
								New Message
							</Heading>
							<Text className="mb-2">
								You have received a new message from your
								contact form:
							</Text>
							<Text className="mb-2 text-gray-800">
								{message}
							</Text>
							<Hr className="my-4" />
							<Text className="mb-2">Sender's Email:</Text>
							<Text className="font-bold">{senderEmail}</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default ContactFormEmail;
