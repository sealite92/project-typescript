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
}).superRefine((data, ctx) => {
  if (!data.isCurrentlyWorkingHere && !data.endDate) {
    ctx.addIssue({
      path: ["endDate"],
      code: z.ZodIssueCode.custom,
      message: "End date is required when not currently working here"
    });
  }
});

export type Experience = z.infer<typeof experienceSchema>
