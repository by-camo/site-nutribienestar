import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	schema: z.object({
		author: z.string(),
		date: z.string(),
		image: z.string(),
		tags: z.array(z.string()).optional(),
		title: z.string(),
		summary: z.string(),
		categories: z.array(z.string()),
	}),
});

const testimoniesCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    date: z.string(),
    image: z.string(),
    body: z.string(),
  }),
});

export const collections = {
	posts: blogCollection,
	testimonies: testimoniesCollection,
};
