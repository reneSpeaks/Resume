import { z } from 'zod';

const profileSchema = z.object({
    network: z.string(),
    url: z.string().url()
});

export type Profile = z.infer<typeof profileSchema>;

const summaryObjectSchema = z.object({
    title: z.string(),
    content: z.optional(z.string()),
    subcontent: z.optional(z.string()),
    highlights: z.optional(z.array(z.string()))
});

type SummaryObject = z.infer<typeof summaryObjectSchema>;

const summarySchema = z.string().or(summaryObjectSchema);

export type Summary = z.infer<typeof summarySchema>;

export function isSummaryObject(summary: Summary): summary is SummaryObject {
    return (
        typeof summary === 'object' && 'title' in summary && ('content' in summary || 'subcontent' in summary || 'highlights' in summary)
    );
}

const basicsSchema = z.object({
    name: z.string(),
    label: z.string(),
    summary: summarySchema.or(z.array(summarySchema)),
    image: z.optional(z.string()),
    email: z.optional(z.string().email()),
    url: z.optional(z.string().url()),
    profiles: z.optional(z.array(profileSchema))
});

export type Basics = z.infer<typeof basicsSchema>;

const dateStringSchema = z
    .string()
    .regex(/^(January|February|March|April|May|June|July|August|September|October|November|December) \d{4}$|^Present$/);

const certificateSchema = z.object({
    name: z.string(),
    institution: z.string(),
    startDate: dateStringSchema,
    summary: z.optional(z.string()),
    skills: z.optional(z.array(z.string())),
    url: z.optional(z.string().url())
});

export type Certificate = z.infer<typeof certificateSchema>;

const educationSchema = z.object({
    name: z.string(),
    institution: z.string(),
    startDate: dateStringSchema,
    endDate: z.optional(dateStringSchema),
    summary: z.optional(z.string()),
    skills: z.optional(z.array(z.string())),
    url: z.optional(z.string().url())
});

export type Education = z.infer<typeof educationSchema>;

const languageSchema = z.object({
    language: z.string(),
    fluency: z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'native'])
});

export type Language = z.infer<typeof languageSchema>;

const projectSchema = z.object({
    name: z.string(),
    summary: z.string(),
    startDate: dateStringSchema,
    endDate: z.optional(dateStringSchema),
    highlights: z.optional(z.array(z.string())),
    skills: z.optional(z.array(z.string())),
    url: z.optional(z.string().url())
});

export type Project = z.infer<typeof projectSchema>;

const skillSchema = z.object({
    name: z.string(),
    level: z.enum(['beginner', 'intermediate', 'advanced', 'expert'])
});

export type Skill = z.infer<typeof skillSchema>;

const workSchema = z.object({
    name: z.string(),
    position: z.string(),
    summary: z.string(),
    startDate: dateStringSchema,
    endDate: z.optional(dateStringSchema),
    highlights: z.optional(z.array(z.string())),
    skills: z.optional(z.array(z.string())),
    url: z.optional(z.string().url())
});

export type Work = z.infer<typeof workSchema>;

export const resumeSchema = z.object({
    basics: basicsSchema,
    certificates: z.optional(z.array(certificateSchema)),
    education: z.optional(z.array(educationSchema)),
    languages: z.optional(z.array(languageSchema)),
    projects: z.optional(z.array(projectSchema)),
    skills: z.optional(z.array(skillSchema)),
    work: z.optional(z.array(workSchema))
});

export type Resume = z.infer<typeof resumeSchema>;
