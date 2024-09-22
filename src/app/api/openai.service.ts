import OpenAI from "openai";

/**
 * Service to interact with OpenAI API  
 * @class
 * @constructor 
 */
export default class AIService {
    private client: OpenAI;

    constructor() {
        console.log({
            organization: process.env.NEXT_PUBLIC_ORGANIZATION_OPENAI,
            apiKey: process.env.NEXT_PUBLIC_API_KEY_OPENAI,
            dangerouslyAllowBrowser: true 
        });
        this.client = new OpenAI({
            organization: process.env.NEXT_PUBLIC_ORGANIZATION_OPENAI,
            // apiKey: process.env.NEXT_PUBLIC_API_KEY_OPENAI,
            apiKey: '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',
            dangerouslyAllowBrowser: true 
        });
    }

    /**
     * Consult OpenAI API
     * @param prompt:string
     * @returns 
     */
    async consult(prompt: string) {
        return await this.client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: 'user', content: prompt },
            ]
        })
    }
}   
