import { defineCollection, z } from 'astro:content'

export const section_schema = z.object({
  title: z.string(),
  shortDescription: z.string(),

  medias: z
    .array(
      z.object({
        src: z.string(),
        caption: z.string().optional(),
        type: z.enum(['image', 'video']),
      }),
    )
    .optional(),
  procons: z
    .array(
      z.object({
        title: z.string(),
        image: z.string(),
        list: z.array(z.string()).optional(),
        paragraph: z.string().optional(),
      }),
    )
    .optional(),

  textblock: z
    .object({
      title: z.object({
        highlightTitle: z.string(),
        secondPartTitle: z.string(),
      }),
      summary: z.string(),
      paragraph: z.array(z.string()).optional(),
    })
    .optional(),

  'short-textblock': z
    .object({
      title: z.object({
        highlightTitle: z.string(),
        secondPartTitle: z.string(),
      }),
      summary: z.string(),
    })
    .optional(),
})

export const projectSchema = z.object({
  title: z.string(),
  title2: z.string(),
  date_parution: z.date(),
  imageCouverture: z.string(),
  client: z.string(),
  roles: z.array(z.string()),
  annee: z.object({
    debut: z.string(),
    fin: z.string(),
  }),
  subject: z.string(),
  summary: z.string(),

  sections: z.array(section_schema).optional(),

  images: z
    .array(
      z.object({
        src: z.string(),
        caption: z.string().optional(),
      }),
    )
    .optional(),

  videos: z
    .array(
      z.object({
        src: z.string(),
        caption: z.string().optional(),
      }),
    )
    .optional(),

  sectionTitle: z
    .object({
      title: z.string(),
      shortDescription: z.string(),
    })
    .optional(),

  procons: z
    .array(
      z.object({
        title: z.string(),
        image: z.string(),
        list: z.array(z.string()).optional(),
        paragraph: z.string().optional(),
      }),
    )
    .optional(),

  textblock: z
    .object({
      title: z.object({
        highlightTitle: z.string(),
        secondPartTitle: z.string(),
      }),
      summary: z.string(),
      paragraph: z.array(z.string()).optional(),
    })
    .optional(),

  'short-textblock': z
    .object({
      title: z.object({
        highlightTitle: z.string(),
        secondPartTitle: z.string(),
      }),
      summary: z.string(),
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
