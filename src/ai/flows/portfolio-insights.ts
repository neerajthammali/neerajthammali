'use server';

/**
 * @fileOverview This file defines a Genkit flow to summarize Neeraj's professional philosophy.
 *
 * - portfolioInsights - A function that generates a summary of Neeraj's philosophy.
 * - PortfolioInsightsInput - The input type for the portfolioInsights function (currently empty).
 * - PortfolioInsightsOutput - The return type for the portfolioInsights function (the summary string).
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioInsightsInputSchema = z.object({});
export type PortfolioInsightsInput = z.infer<typeof PortfolioInsightsInputSchema>;

const PortfolioInsightsOutputSchema = z.object({
  summary: z.string().describe('A summary of Neeraj Tammali\'s professional philosophy.'),
});
export type PortfolioInsightsOutput = z.infer<typeof PortfolioInsightsOutputSchema>;

export async function portfolioInsights(input: PortfolioInsightsInput): Promise<PortfolioInsightsOutput> {
  return portfolioInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioInsightsPrompt',
  input: {schema: PortfolioInsightsInputSchema},
  output: {schema: PortfolioInsightsOutputSchema},
  prompt: `Summarize Neeraj Tammali's professional philosophy based on the following statement:\n\nPeople don't pay for products – they pay for outcomes. Validated proof-of-work is the ultimate career accelerator.`,
});

const portfolioInsightsFlow = ai.defineFlow(
  {
    name: 'portfolioInsightsFlow',
    inputSchema: PortfolioInsightsInputSchema,
    outputSchema: PortfolioInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
