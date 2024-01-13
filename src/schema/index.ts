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

export const problemNumRanklistSchema = z.object({
  problemNum: z.coerce
    .number({ invalid_type_error: "Problem number must be a number" })
    .min(1, "Problem number must be a number greater than 0"),
})

export const problemNumSubmissionSchema = z.object({
  problemNum: z.coerce
    .number({ invalid_type_error: "Problem number must be a number" })
    .min(1, "Problem number must be a number greater than 0"),
})

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Schema validation for endpoint `/api/users/[username]/submissions`
 */
export const userSchema = z.object({
  username: z.coerce.string().min(1, "Username must have at least on character")
})
