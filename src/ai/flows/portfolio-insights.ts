'use server';
/**
 * @fileOverview Generates insights about a portfolio.
 *
 * - portfolioInsights - A function that generates insights.
 * - PortfolioInsightsOutput - The return type for the portfolioInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioInsightsOutputSchema = z.object({
  summary: z.string().describe('A summary of the portfolio owner\'s philosophy, synthesized from the information provided.'),
});
export type PortfolioInsightsOutput = z.infer<typeof PortfolioInsightsOutputSchema>;


export async function portfolioInsights(input: {}): Promise<PortfolioInsightsOutput> {
  return portfolioInsightsFlow(input);
}


const prompt = ai.definePrompt({
  name: 'portfolioInsightsPrompt',
  input: {schema: z.object({})},
  output: {schema: PortfolioInsightsOutputSchema},
  prompt: `
You are a career coach and professional branding expert.
Analyze the following portfolio information to synthesize a compelling summary of the owner's professional philosophy.
The summary should be insightful, concise (2-3 sentences), and written in the third person.
Focus on the unique intersection of their skills in civil engineering and technology.
Highlight their passion for building, problem-solving, and creating tangible outcomes.

Key Information:
- Role: Civil Engineer & Tech Innovator
- Skills: AutoCAD, Project Management, Web Development, SaaS, Leadership, Problem Solving
- Projects: ContractOS (SaaS for contractors), Manual Traffic Calculator, Hustler's Point (entrepreneur community)
- Stated Philosophy: "My philosophy is simple: build things that create real value. I believe that a validated proof-of-work is more than just a resume item—it's the foundation for tangible outcomes and the inspiration for others to forge their own successful paths."
- About: A Civil Engineering student passionate about building real-world and technological projects, solving tricky problems, and creating things that help people.
`,
});

const portfolioInsightsFlow = ai.defineFlow(
  {
    name: 'portfolioInsightsFlow',
    inputSchema: z.object({}),
    outputSchema: PortfolioInsightsOutputSchema,
  },
  async () => {
    const {output} = await prompt({});
    return output!;
  }
);
