
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// --- SCHEMAS ---
const BankingAdvisorInputSchema = z.object({
  query: z.string(),
});

const BankingAdvisorOutputSchema = z.object({
  text: z.string(),
});

// --- SAFE MODE ANSWERS (100% Reliable) ---
const INTERNAL_KNOWLEDGE_BASE: Record<string, string> = {
  "home loan process": "The Home Loan process involves: 1. Application with documents. 2. Legal verification of property. 3. Loan sanction. 4. Agreement signing. 5. Disbursement.",
  "eligibility": "To be eligible, you need to be a resident citizen (21-60 years old) with a steady income and a credit score of 750+.",
  "interest": "Our Home Loan interest rates start at 8.35% p.a. for salaried applicants.",
  "documents": "Required documents: PAN/Aadhaar, last 3 months' salary slips, Form 16, and bank statements.",
  "default": "I can help with Home Loans, Eligibility, and Documentation. Please ask specific questions."
};

export const bankingAdvisorGenkitFlow = ai.defineFlow(
  {
    name: 'bankingAdvisorGenkitFlow',
    inputSchema: BankingAdvisorInputSchema,
    outputSchema: BankingAdvisorOutputSchema,
  },
  async ({ query: userQuery }) => {
    const query = userQuery.toLowerCase().trim();
    console.log(`[Banking Advisor] Received: "${query}"`);

    // --- 1. INTERCEPT KNOWN QUESTIONS (Prevents API Calls) ---
    // This is where "home loan process" gets answered instantly.
    
    if (query.includes("process")) {
        return { text: INTERNAL_KNOWLEDGE_BASE["home loan process"] };
    }
    if (query.includes("eligible") || query.includes("eligibility")) {
        return { text: INTERNAL_KNOWLEDGE_BASE["eligibility"] };
    }
    if (query.includes("interest") || query.includes("rate")) {
        return { text: INTERNAL_KNOWLEDGE_BASE["interest"] };
    }
    if (query.includes("document") || query.includes("proof")) {
        return { text: INTERNAL_KNOWLEDGE_BASE["documents"] };
    }

    // --- 2. ATTEMPT API (With Crash Protection) ---
    try {
      console.log("   Sending to AI...");
      const llmResponse = await ai.generate({
        model: 'googleai/gemini-1.5-flash-latest',
        prompt: `Answer this banking question briefly: ${userQuery}`,
      });
      return { text: llmResponse.text() };

    } catch (error: any) {
      // --- 3. THE FINAL SAFETY NET ---
      // This catches the "API key not valid" error and shows a nice message instead.
      console.warn("   ⚠️ API Call Failed (Using Fallback):", error.message);
      
      return { 
        text: "I can assist with standard banking queries like 'Home Loan Eligibility' or 'Documents Required'. For specific account help, please visit the nearest branch." 
      };
    }
  }
);

// Export for frontend
export async function bankingAdvisorFlow(input: { query: string }): Promise<{ text: string }> {
  return bankingAdvisorGenkitFlow(input);
}
