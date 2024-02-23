import { Message } from "postcss";
import { stringify } from "querystring";

export const isValidEmail = (
	email: unknown,
	maxLength: number = 500
): email is string => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (typeof email === "string") {
		return emailRegex.test(email) && email.length <= maxLength;
	}
	return false;
};

export const isValidMessage = (
	message: unknown,
	maxMessageLength: number = 5000,
    minMessageLength: number = 5,
): message is string => {
	if (typeof message === "string") {
		if (
			message.trim().length > 0 &&
			message.length <= maxMessageLength &&
			message.length > minMessageLength
		) {
			return true;
		}
	}
	return false;
};

// Handles error message
export const getErrorMessage = (error: unknown): string => {
	let message: string;

	if (error instanceof Error) {
		message = error.message;
	} else if (error && typeof error === "object" && "message" in error) {
		message = String(error.message);
	} else if (typeof error === "string") {
		message = error;
	} else {
		message = "Something went wrong";
	}

	return message;
};
