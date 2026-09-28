// Loads profile.json and checks its shape at build time, so a missing or misspelled
// field fails the build instead of silently rendering a broken page.
import { z } from 'astro/zod';
import raw from '../content/profile.json';

const ProfileSchema = z.object({
  name: z.string(),
  headline: z.string(),
  tagline: z.string(),
  positioning: z.string(),
  location: z.string(),
  portrait: z.string().nullable(),
  credentials: z.array(z.string()),
  timelineMarkers: z.array(z.string()),
  roles: z.array(
    z.object({
      company: z.string(),
      title: z.string(),
      dates: z.string(),
      description: z.string(),
    }),
  ),
  expertise: z.array(z.object({ title: z.string(), description: z.string() })),
  about: z.array(z.string()),
  contact: z.object({
    heading: z.string(),
    email: z.string(),
    linkedin: z.string(),
  }),
});

export const profile = ProfileSchema.parse(raw);
