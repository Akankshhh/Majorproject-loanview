
import { z } from 'zod';

// --- SCHEMAS ---
export const BankingAdvisorInputSchema = z.object({
  query: z.string(),
});
export type BankingAdvisorInput = z.infer<typeof BankingAdvisorInputSchema>;

export const BankingAdvisorOutputSchema = z.object({
  text: z.string(),
  flow: z.enum(['eligibilityCheck', 'processInfo', 'none']),
});
export type BankingAdvisorOutput = z.infer<typeof BankingAdvisorOutputSchema>;
