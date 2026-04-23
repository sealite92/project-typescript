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
 startDate: z.string().min(1, "Start date is a required field").transform((value) => {
        const date = new Date(value);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
        return date.toLocaleDateString('en-US', options);
    }),
    endDate: z.string().min(1, "End date is a required field").transform((value) => {
        const date = new Date(value);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
        return date.toLocaleDateString('en-US', options);
    }),
    description: z.string().max(100, "100 characters max exceeded").optional()
}).refine(
    (data) => data.isCurrentlyWorkingHere || !!data.endDate,
    {
      message: "End date is required if you are not currently working here",
      path: ["endDate"],
    }
  )
  // Rule 2: endDate must be after startDate
  .refine(
    (data) => {
      if (!data.startDate || !data.endDate) return true; // skip check if one is missing
      const start = new Date(data.startDate);
      const end = new Date(data.endDate);
      return end > start;
    },
    {
      message: "End date must be after start date",
      path: ["endDate"],
    }
  );

export type Experience = z.infer<typeof experienceSchema>
