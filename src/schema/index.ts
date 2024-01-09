import { z } from "zod";

/**
 * Schema validation for endpoint `/api/problems/[problemNum]`
 */
export const problemNumSchema = z.object({
  problemNum: z.coerce
    .number({ invalid_type_error: "Problem number must be a number" })
    .min(1, "Problem number must be a number greater than 0"),
});

export const submissionOvertimeSchema = z.object({
  problemNum: z.coerce
    .number({ invalid_type_error: "Problem number must be a number" })
    .min(1, "Problem number must be a number greater than 0"),
})

export const submissionLangSchema = z.object({
  problemNum: z.coerce
    .number({ invalid_type_error: "Problem number must be a number" })
    .min(1, "Problem number must be a number greater than 0"),
})

