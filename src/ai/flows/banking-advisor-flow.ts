
'use server';

import { z } from 'zod';

// This file is being deactivated to prevent crashes.
// The interactive logic has been removed from the frontend.

const BankingAdvisorInputSchema = z.object({
  query: z.string().describe("The user's question about banking or loans."),
});
export type BankingAdvisorInput = z.infer<typeof BankingAdvisorInputSchema>;

const BankingAdvisorOutputSchema = z.object({
  text: z.string(),
  flow: z.enum(['none', 'eligibilityCheck']).optional().default('none'),
});
export type BankingAdvisorOutput = z.infer<typeof BankingAdvisorOutputSchema>;

// The actual flow is commented out to ensure no part of it can run and cause an error.
/*
import { ai } from '@/ai/genkit';
import { generate } from '@genkit-ai/ai';

export async function bankingAdvisorFlow(input: BankingAdvisorInput): Promise<BankingAdvisorOutput> {
  return bankingAdvisorGenkitFlow(input);
}

const bankingAdvisorGenkitFlow = ai.defineFlow(
  {
    name: 'bankingAdvisorGenkitFlow',
    inputSchema: BankingAdvisorInputSchema,
    outputSchema: BankingAdvisorOutputSchema,
  },
  async ({ query }) => {
    // This is a dummy implementation that will not be called.
    return { text: "The advisor is currently offline.", flow: 'none' };
  }
);
*/

// Provide a dummy function to satisfy any potential imports. This function does nothing.
export async function bankingAdvisorFlow(input: BankingAdvisorInput): Promise<BankingAdvisorOutput> {
  console.log("AI Advisor flow is deactivated.");
  return {
    text: "The AI Advisor is currently deactivated. Please check back later.",
    flow: "none"
  };
}
