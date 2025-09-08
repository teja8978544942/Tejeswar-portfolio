'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Wand2 } from 'lucide-react';
import { recommendProjects } from '@/ai/flows/project-recommendation';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  userSkills: z.string().min(10, {
    message: 'Please list some of your skills.',
  }),
  desiredSkills: z.string().min(10, {
    message: 'Please list some skills you want to learn.',
  }),
});

export default function RecommendationsPage() {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userSkills: '',
      desiredSkills: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setRecommendations([]);
    try {
      const result = await recommendProjects(data);
      if (result.projects) {
        setRecommendations(result.projects);
      }
    } catch (error) {
      console.error('Error getting recommendations:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to get project recommendations. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">AI Project Recommender</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Bridge your skill gaps. Enter your current skills and what you want to learn, and let AI suggest tailored data analysis projects for you.
        </p>
      </header>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Find Your Next Project</CardTitle>
            <CardDescription>
              Provide your skills as comma-separated lists (e.g., Python, SQL, Data Cleaning).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="userSkills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Current Skills</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Python, Pandas, Matplotlib, SQL..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="desiredSkills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skills You Want to Develop</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Machine Learning, NLP, Time Series Forecasting..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Generate Recommendations
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {isLoading && (
          <div className="mt-8 text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 text-muted-foreground">Finding the perfect projects for you...</p>
          </div>
        )}

        {recommendations.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-6">Your Recommended Projects</h2>
            <div className="space-y-4">
              {recommendations.map((project, index) => (
                <Card key={index} className="bg-secondary">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Wand2 className="h-6 w-6 text-primary" />
                    <CardTitle className="m-0">{project}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
