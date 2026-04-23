'use server';
/**
 * @fileOverview A Genkit flow for generating CSS-only visual mockups of the 'Kit Tela Zero' product.
 *
 * - generateCssMockup - A function that handles the CSS mockup generation process.
 * - GenerateCssMockupInput - The input type for the generateCssMockup function.
 * - GenerateCssMockupOutput - The return type for the generateCssMockup function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateCssMockupInputSchema = z.object({
  accentColor: z
    .string()
    .describe(
      'The vibrant accent color to use for highlights, badges, and borders (e.g., #FF6B35).'
    ),
  backgroundColor: z
    .string()
    .describe(
      'The main background color for the mockup (e.g., #FFFFFF).'
    ),
  showEmCasa: z
    .boolean()
    .describe('Whether to include the "Em Casa" section in the mockup.'),
  showNoCarro: z
    .boolean()
    .describe('Whether to include the "No Carro" section in the mockup.'),
  showNaRua: z
    .boolean()
    .describe('Whether to include the "Na Rua" section in the mockup.'),
  showBonus: z
    .boolean()
    .describe('Whether to include the "Bônus" section in the mockup.'),
});
export type GenerateCssMockupInput = z.infer<
  typeof GenerateCssMockupInputSchema
>;

const GenerateCssMockupOutputSchema = z.object({
  cssMockup: z
    .string()
    .describe('The generated CSS-only visual mockup for the Kit Tela Zero product.'),
});
export type GenerateCssMockupOutput = z.infer<
  typeof GenerateCssMockupOutputSchema
>;

export async function generateCssMockup(
  input: GenerateCssMockupInput
): Promise<GenerateCssMockupOutput> {
  return generateCssMockupFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCssMockupPrompt',
  input: { schema: GenerateCssMockupInputSchema },
  output: { schema: GenerateCssMockupOutputSchema },
  prompt: `You are an expert frontend developer and CSS stylist. Your task is to create a CSS-only visual mockup for the 'Kit Tela Zero' product.
The mockup should represent a stylized digital product, like a book or a set of cards, with distinct sections.

The base background color is {{{backgroundColor}}} and the accent color for highlights, badges, and borders is {{{accentColor}}}.

Include the following sections if specified:
{{#if showEmCasa}}
- A section labeled 'Em Casa'
{{/if}}
{{#if showNoCarro}}
- A section labeled 'No Carro'
{{/if}}
{{#if showNaRua}}
- A section labeled 'Na Rua'
{{/if}}
{{#if showBonus}}
- A section labeled 'Bônus'
{{/if}}

The output must be pure CSS, without any HTML or JavaScript. Focus on creating a clean, modern, and visually appealing representation using only CSS properties. The mockup should look like a stylized digital product, possibly with layered elements or subtle shadows. Ensure the generated CSS is valid and self-contained within a single CSS block. Do not provide any comments in the CSS. All styles should be contained within a single parent class, for example, ".kit-tela-zero-mockup".`,
});

const generateCssMockupFlow = ai.defineFlow(
  {
    name: 'generateCssMockupFlow',
    inputSchema: GenerateCssMockupInputSchema,
    outputSchema: GenerateCssMockupOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
