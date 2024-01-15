import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import {
  Problem,
  Submission,
  SubmissionLangType,
  SubmissionSovledVsAttempted,
  SubmissionsOvertimeLineChartType,
  UserSubmission,
  UserSubmissionBarChartType,
} from "@/types";

/**
 * Enum for React Query Keys when using React-query
 */
export enum queryKey {
  polling = "live-polling",
  /**
   * Reacy query key for fetching all problems
   */
  allProblems = "all-problems",
  /**
   * React query key for fetching a problem num
   */
  problemNum = "problem-num",
  /**
   * React query key for fetching a problem ranklist
   */
  problemRanklist = "problem-ranklist",
  /**
   * React query key for fetching a problem ranklist
   */
  problemSubmission = "problem-submission",
  /**
   * React query key for fetching submission overtime count
   */
  submissionCount = "submission-overtime",
  /**
   * React query key for fetching submission by language
   */
  submissionLang = "submission-language",
  ////////////////////////////////////////////////////////////////////////////////////////////////
  /**
   * React query key for fetching user submissions
   */
  userSubmissions = "user-submissions",
  /**
   * React-query key for fetching user submissions verdict
   */
  userSubmissionVerdict = "user-submissions-verdict",
  /**
   * React-query key for fetching user submissions language
   */
  userSubmissionLanguage = "user-submissions-language",
  /**
   * React-query key for fetching user submissions overtime
   */
  userSubmissionOvertime = "user-submissions-overtime",
  /**
   * React-query key for fetching user solved problems vs attempted submisssions
   */
  userSubmissionAttempted = "user-submissions-attempted",
}

/**
 * Fetch live submission (polling)
 *
 * @param pollId - pollId to retrieve the live submission
 * @param fetchInterval - time in milliseconds to refetch from the server
 */
export const useFetchLiveSubmission = (pollId = 0, fetchInterval = 5000) => {
  return useQuery({
    queryKey: [queryKey.polling],
    queryFn: async () => {
      const { data } = await axios.get<Submission[]>(`/api/poll/${pollId}`);

      return data;
    },
    refetchInterval: fetchInterval,
    staleTime: fetchInterval,
  });
};

/**
 * Fetch all problems
 */
export const useFetchProblems = () => {
  return useQuery({
    queryKey: [queryKey.allProblems],
    queryFn: async () =>
      axios.get<Problem[]>("/api/problems").then((res) => res.data),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

/**
 * Fetch stats of a problem using problem number
 */
export const useFetchProblemNum = (problemNum: number) => {
  return useQuery({
    queryKey: [queryKey.problemNum],
    queryFn: async () =>
      await axios
        .get<Problem>(`/api/problems/${problemNum}`)
        .then((res) => res.data),
    refetchOnWindowFocus: false,
  });
};

/**
 * Fetch submissions overtime count
 */
export const useFetchSubmissionCount = (problemNum: number) => {
  return useQuery({
    queryKey: [queryKey.submissionCount],
    queryFn: async () =>
      await axios
        .get(`/api/submissions/overtime/${problemNum}`)
        .then((res) => res.data),
    refetchOnWindowFocus: false,
  });
};

/**
 * Fetch submissions by language
 */
export const useFetchSubmissionLang = (problemNum: number) => {
  return useQuery({
    queryKey: [queryKey.submissionLang],
    queryFn: async () =>
      await axios
        .get<SubmissionLangType[]>(`/api/submissions/language/${problemNum}`)
        .then((res) => res.data),
    refetchOnWindowFocus: false,
  });
};

/**
 * Fetch problem ranklist
 */
export const useFetchProblemRanklist = (problemNum: number) => {
  return useQuery({
    queryKey: [queryKey.problemRanklist],
    queryFn: async () =>
      await axios
        .get<Submission["msg"][]>(`/api/problems/ranklist/${problemNum}`)
        .then((res) => res.data),
    refetchOnWindowFocus: false,
  });
};

/**
 * Fetch problem submissions
 */
export const useFetchProblemSubmission = (problemNum: number) => {
  return useQuery({
    queryKey: [queryKey.problemSubmission],
    queryFn: async () =>
      await axios
        .get<Submission["msg"][]>(`/api/submissions/${problemNum}`)
        .then((res) => res.data),
    refetchOnWindowFocus: false,
  });
};

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Fetch user submissions
 */
export const useFetchUserSubmissions = (username: string) => {
  return useQuery({
    queryKey: [queryKey.userSubmissions],
    queryFn: async () =>
      await axios
        .get<UserSubmission>(`/api/users/${username}/submissions`)
        .then((res) => res.data),
    refetchOnWindowFocus: false,
  });
};

/**
 * Fetch user submissions verdicts
 * Used for displaying data using Rechart bar chart
 */
export const useFetchUserSubmissionVerdict = (username: string) => {
  return useQuery({
    queryKey: [queryKey.userSubmissionVerdict],
    queryFn: async () =>
      await axios
        .get<UserSubmissionBarChartType[]>(
          `/api/users/${username}/submissions/verdict`,
        )
        .then((res) => res.data),
    refetchOnWindowFocus: false,
  });
};

/**
 * Fetch user submissions by language
 * Used for displaying data using Rechart radar chart
 */
export const useFetchUserSubmissionLanguage = (username: string) => {
  return useQuery({
    queryKey: [queryKey.userSubmissionLanguage],
    queryFn: async () =>
      await axios
        .get<SubmissionLangType[]>(
          `/api/users/${username}/submissions/language`,
        )
        .then((res) => res.data),
    refetchOnWindowFocus: false,
  });
};

/**
 * Fetch user submissions by language
 * Used for displaying data using Rechart radar chart
 */
export const useFetchUserSubmissionOvertime = (username: string) => {
  return useQuery({
    queryKey: [queryKey.userSubmissionOvertime],
    queryFn: async () =>
      await axios
        .get<SubmissionsOvertimeLineChartType[]>(
          `/api/users/${username}/submissions/overtime`,
        )
        .then((res) => res.data),
    refetchOnWindowFocus: false,
  });
};

/**
 * Fetch user solved problems vs attempted submissions
 * Used for displaying data using Rechart donut chart
 */
export const useFetchUserSubmissionAttempted = (username: string) => {
  return useQuery({
    queryKey: [queryKey.userSubmissionAttempted],
    queryFn: async () =>
      await axios
        .get<SubmissionSovledVsAttempted[]>(
          `/api/users/${username}/submissions/attempted`,
        )
        .then((res) => res.data),
    refetchOnWindowFocus: false,
  });
};

