'use server';

/**
 * @fileOverview A Genkit flow for generating and refining persuasive descriptions for landing page content.
 *
 * - generateLandingPageCopy - A function that handles the generation/refinement process.
 * - GenerateLandingPageCopyInput - The input type for the generateLandingPageCopy function.
 * - GenerateLandingPageCopyOutput - The return type for the generateLandingPageCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLandingPageCopyInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productOffer: z.string().describe("A brief description of the product's main offer."),
  targetAudience: z.string().describe('The primary target audience for the product.'),
  mainPainPoint: z.string().describe('The main problem or pain point the product solves for the audience.'),
  productUniqueSellingPoint: z.string().describe('The key differentiator or unique advantage of the product.'),
  benefits: z.array(z.object({
    title: z.string().describe('Title of the product benefit.'),
    originalDescription: z.string().describe('Original description of the product benefit.')
  })).describe('A list of product benefits with their original descriptions.'),
  bonuses: z.array(z.object({
    name: z.string().describe('Name of the bonus.'),
    originalDescription: z.string().describe('Original description of the bonus.'),
    value: z.string().describe('Monetary value of the bonus.')
  })).describe('A list of bonuses with their original descriptions and values.'),
  faqs: z.array(z.object({
    question: z.string().describe('The FAQ question.'),
    originalAnswer: z.string().describe('The original answer to the FAQ question.')
  })).describe('A list of frequently asked questions with their original answers.'),
});
export type GenerateLandingPageCopyInput = z.infer<typeof GenerateLandingPageCopyCopyInputSchema>;

const GenerateLandingPageCopyOutputSchema = z.object({
  refinedBenefits: z.array(z.object({
    title: z.string().describe('Title of the product benefit.'),
    refinedDescription: z.string().describe('Persuasively rewritten description of the product benefit.')
  })).describe('A list of product benefits with their refined, high-conversion descriptions.'),
  refinedBonuses: z.array(z.object({
    name: z.string().describe('Name of the bonus.'),
    refinedDescription: z.string().describe('Persuasively rewritten description of the bonus.'),
    value: z.string().describe('Monetary value of the bonus.')
  })).describe('A list of bonuses with their refined, high-conversion descriptions and values.'),
  refinedFaqs: z.array(z.object({
    question: z.string().describe('The FAQ question.'),
    refinedAnswer: z.string().describe('Clearly and reassuringly rewritten answer to the FAQ question.')
  })).describe('A list of frequently asked questions with their refined answers.'),
});
export type GenerateLandingPageCopyOutput = z.infer<typeof GenerateLandingPageCopyOutputSchema>;

export async function generateLandingPageCopy(input: GenerateLandingPageCopyInput): Promise<GenerateLandingPageCopyOutput> {
  return generateLandingPageCopyFlow(input);
}

const generateLandingPageCopyPrompt = ai.definePrompt({
  name: 'generateLandingPageCopyPrompt',
  input: {schema: GenerateLandingPageCopyInputSchema},
  output: {schema: GenerateLandingPageCopyOutputSchema},
  prompt: `You are an expert frontend developer and high-conversion copywriter. Your task is to refine marketing copy for a landing page.
Target Audience: {{{targetAudience}}}
The tone must be direct, emotional, and highly persuasive, specifically appealing to mothers who are struggling with the main pain point: "{{{mainPainPoint}}}".
The copy should emphasize immediate solutions, practical benefits, and the unique selling point: "{{{productUniqueSellingPoint}}}".

Refine the following content for the product "{{{productName}}}" with the main offer: "{{{productOffer}}}".
The output must be a JSON object matching the provided schema.

---
Product Benefits to Refine:
{{#each benefits}}
Title: {{{title}}}
Original Description: {{{originalDescription}}}
{{/each}}

---
Bonuses to Refine:
{{#each bonuses}}
Name: {{{name}}}
Original Description: {{{originalDescription}}}
Value: {{{value}}}
{{/each}}}

---
FAQs to Refine:
{{#each faqs}}
Question: {{{question}}}
Original Answer: {{{originalAnswer}}}
{{/each}}

Based on the above instructions and content, generate the refined copy in JSON format.
`,
});

const generateLandingPageCopyFlow = ai.defineFlow(
  {
    name: 'generateLandingPageCopyFlow',
    inputSchema: GenerateLandingPageCopyInputSchema,
    outputSchema: GenerateLandingPageCopyOutputSchema,
  },
  async (input) => {
    const {output} = await generateLandingPageCopyPrompt(input);
    if (!output) {
      throw new Error('Failed to generate landing page copy.');
    }
    return output;
  }
);
