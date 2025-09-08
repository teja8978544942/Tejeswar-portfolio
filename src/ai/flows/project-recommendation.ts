'use server';

/**
 * @fileOverview An AI agent that recommends data analysis projects based on skill gaps.
 *
 * - recommendProjects - A function that recommends data analysis projects.
 * - ProjectRecommendationInput - The input type for the recommendProjects function.
 * - ProjectRecommendationOutput - The return type for the recommendProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectRecommendationInputSchema = z.object({
  userSkills: z
    .string()
    .describe('A comma separated list of the user skills.'),
  desiredSkills: z
    .string()
    .describe(
      'A comma separated list of skills the user wants to develop further.'
    ),
});

export type ProjectRecommendationInput = z.infer<
  typeof ProjectRecommendationInputSchema
>;

const ProjectRecommendationOutputSchema = z.object({
  projects: z
    .array(z.string())
    .describe(
      'A list of data analysis project recommendations tailored to the skills the user wants to develop.'
    ),
});

export type ProjectRecommendationOutput = z.infer<
  typeof ProjectRecommendationOutputSchema
>;

export async function recommendProjects(
  input: ProjectRecommendationInput
): Promise<ProjectRecommendationOutput> {
  return recommendProjectsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectRecommendationPrompt',
  input: {schema: ProjectRecommendationInputSchema},
  output: {schema: ProjectRecommendationOutputSchema},
  prompt: `You are an expert data analysis project recommender. Given the user's current skills and desired skills, you will recommend data analysis projects that will help them develop those skills.

Current Skills: {{{userSkills}}}
Desired Skills: {{{desiredSkills}}}

Recommend 3 data analysis projects that will help the user develop their desired skills. The projects should be diverse and cover a range of data analysis techniques. The projects should be tailored to the user's current skills, so that they are not too difficult. Return a list of project names.

Example Output:
{
  "projects": [
    "Customer Segmentation using Clustering",
    "Predictive Maintenance for Manufacturing Equipment",
    "Sentiment Analysis of Social Media Data"
  ]
}

Make sure the output is valid JSON.
`,
});

const recommendProjectsFlow = ai.defineFlow(
  {
    name: 'recommendProjectsFlow',
    inputSchema: ProjectRecommendationInputSchema,
    outputSchema: ProjectRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
