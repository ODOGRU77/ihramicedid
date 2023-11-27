import { z } from "zod";

export const FormOtherSchema = z.object({
  motherPuanTotal: z.number(),
  motherArabicTotal: z.string(),
  fatherPuanTotal: z.number(),
  fatherArabicTotal: z.string(),
  kidPuanTotal: z.number(),
  kidArabicTotal: z.string(),
  akil: z.number(),
  fikir: z.number(),
  burcAy: z.string(),
});

export type TFormOtherSchema = z.infer<typeof FormOtherSchema>;
