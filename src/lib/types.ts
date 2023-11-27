import { z } from "zod";

export const NameAnalysisSchema = z.object({
  motherName: z.string().min(2, "İsim en az 2 karakterli olmalıdır."),
  fatherName: z.string().min(2, "İsim en az 2 karakterli olmalıdır."),
  kidName: z.string().min(2, "İsim en az 2 karakterli olmalıdır."),
});

export type TNameAnalysisSchema = z.infer<typeof NameAnalysisSchema>;
