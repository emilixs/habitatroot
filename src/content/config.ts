import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    heroImage: z.string().optional(),
    startDate: z.string(), // ISO format: "2025-09-13"
    endDate: z.string().optional(),
    online: z.boolean().default(false),
    locationName: z.string(),
    locationUrl: z.string().optional(),
    intro: z.string(),
    program: z.array(z.object({
      dayTitle: z.string(),
      content: z.string(), // Markdown content
      image: z.string().optional(),
    })),
    pricing: z.array(z.object({
      label: z.string(), // "Double room"
      price: z.string()  // "2050 RON"
    })),
    locationGallery: z.array(z.string()).optional(),
    pricingImage: z.string().optional(),
    specialGuests: z.array(z.object({
      name: z.string(),
      bio: z.string(),
      image: z.string().optional()
    })).optional(),
    registrationOpen: z.boolean().default(true),
    featured: z.boolean().default(false)
  })
});

const trainer = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    expertise: z.string(),
    story: z.string(),
    image: z.string()
  })
});

const settings = defineCollection({
  type: 'data',
  schema: z.object({
    email: z.string(),
    phone: z.string(),
    address: z.string().optional()
  })
});

export const collections = { events, trainer, settings };
