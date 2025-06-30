'use server';

/**
 * @fileOverview This file defines a Genkit flow to summarize Neeraj's professional philosophy.
 *
 * - summarizePhilosophy - A function that generates a summary of Neeraj's philosophy.
 * - SummarizePhilosophyInput - The input type for the summarizePhilosophy function (currently empty).
 * - SummarizePhilosophyOutput - The return type for the summarizePhilosophy function (the summary string).
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePhilosophyInputSchema = z.object({});
export type SummarizePhilosophyInput = z.infer<typeof SummarizePhilosophyInputSchema>;

const SummarizePhilosophyOutputSchema = z.object({
  summary: z.string().describe('A summary of Neeraj Tammali\'s professional philosophy.'),
});
export type SummarizePhilosophyOutput = z.infer<typeof SummarizePhilosophyOutputSchema>;

export async function summarizePhilosophy(input: SummarizePhilosophyInput): Promise<SummarizePhilosophyOutput> {
  return summarizePhilosophyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizePhilosophyPrompt',
  input: {schema: SummarizePhilosophyInputSchema},
  output: {schema: SummarizePhilosophyOutputSchema},
  prompt: `Summarize Neeraj Tammali's professional philosophy based on the following statement:\n\nPeople don't pay for products – they pay for outcomes. Validated proof-of-work is the ultimate career accelerator. Provide the summary in key principles in a bulleted list.`,
});

const summarizePhilosophyFlow = ai.defineFlow(
  {
    name: 'summarizePhilosophyFlow',
    inputSchema: SummarizePhilosophyInputSchema,
    outputSchema: SummarizePhilosophyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
