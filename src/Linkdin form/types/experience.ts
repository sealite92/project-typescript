import { title } from "process";
import z from "zod";



export const experienceSchema = z.object({
    title: z.string().min(2, "Title is a required field"),
    employmentType: z.enum([
        "Full-time",
        "Part-time",
        "Self-employed",
        "Freelance",
        "Contract", 
        "Internship",
        "Apprenticeship",
        "Seasonal"
    ]),   
    companyName: z.string().min(2, "Company name is a required field"),
    isCurrentlyWorkingHere: z.boolean().optional(),
    location: z.string().min(2, "Location is a required field"),
    locationType: z.enum(["On-site", "Remote", "Hybrid"]).optional(),
 startDate: z.string("Start date is a required field"),
    endDate: z.string().optional(),
    description: z.string().max(500).optional()
})

export type Experience = z.infer<typeof experienceSchema>
