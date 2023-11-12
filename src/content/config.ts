import { defineCollection, z } from 'astro:content'

export const projectSchema = z.object({
  title: z.string(),
  title2: z.string(),
  image: z.string(),
  client: z.string(),
  roles: z.array(z.string()),
  annee: z.object({
    debut: z.number(),
    fin: z.number(),
  }),
  subject: z.string(),
  summary: z.string(),

  textblock: z
    .object({
      title: z.object({
        highlightTitle: z.string(),
        secondPartTitle: z.string(),
      }),
      summary: z.string(),
      paragraph: z.array(z.string()),
    })
    .optional(),
})

export const collections = {
  projects: defineCollection({
    type: 'content',
    schema: projectSchema,
  }),
}
export type Project = z.infer<typeof projectSchema>
