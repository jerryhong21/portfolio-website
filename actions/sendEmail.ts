"use server";
import React from "react";
import { isValidEmail, isValidMessage, getErrorMessage } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(formData: FormData) {
	const senderEmail = formData.get("senderEmail");
	const message = formData.get("message");

	if (!isValidEmail(senderEmail, 500)) {
		return {
			error: "Sender Email is invalid",
		};
	}
	if (!isValidMessage(message, 5000)) {
		return {
			error: "Message is invalid",
		};
	}

	let data;
	try {
		data = await resend.emails.send({
			from: "Contact Form from jhong.com <onboarding@resend.dev>",
			to: ["jh1012037421@gmail.com"],
			subject: "Message from Contact Form - jhong.com",
			reply_to: senderEmail,
			react: React.createElement(ContactFormEmail, {
				message: message,
				senderEmail: senderEmail,
			}),
		});
	} catch (e: unknown) {
		const errorMsg = getErrorMessage(e);
		console.error(errorMsg);
		return {
			error: errorMsg,
		};
	}

	return {
		data,
	};
}
