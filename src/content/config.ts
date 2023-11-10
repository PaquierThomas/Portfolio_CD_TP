import { defineCollection, z } from 'astro:content'

export const projectSchema = z.object({
  title: z.string(),
  title2: z.string(),
  image: z.string(),
})

export const collections = {
  projects: defineCollection({
    type: 'content',
    schema: projectSchema,
  }),
}
export type Project = z.infer<typeof projectSchema>
