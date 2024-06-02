import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
	dangerouslyAllowBrowser: true,
});

export default async function genText() {
	let completion;
	try {
		completion = await openai.chat.completions.create({
			messages: [
				{
					role: "system",
					content:
						"Generate an inspirational quote by a popular philospher.",
				},
			],
			model: "gpt-3.5-turbo",
		});
		console.log(completion.choices[0].message.content);
	} catch (e) {
		console.error("Error fetching chatGPT message ", e);
	}
	if (completion) return completion.choices[0].message.content as string;
}
