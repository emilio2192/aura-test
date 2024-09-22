import OpenAI from "openai";

/**
 * Service to interact with OpenAI API  
 * @class
 * @constructor 
 */
export default class AIService {
    private client: OpenAI;

    constructor() {
        this.client = new OpenAI({
            organization: process.env.NEXT_PUBLIC_ORGANIZATION_OPENAI,
            apiKey: process.env.NEXT_PUBLIC_API_KEY_OPENAI,
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
