import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { Submission } from "@/types";

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
  problemNum = "problem-num"
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
    staleTime: fetchInterval
  });
};

/**
 * Fetch all problems
 */
export const useFetchProblems = () => {
  return useQuery({
    queryKey: [queryKey.allProblems],
    queryFn: async () => axios.get("/api/problems").then((res) => res.data),
    refetchOnWindowFocus: false
  });
};

/**
 * Fetch stats of a problem using problem number
 */
export const useFetchProblemNum = (problemNum: number) => {
  return useQuery({
    queryKey: [queryKey.problemNum],
    queryFn: async () => await axios.get(`/api/problems/${problemNum}`),
  })
}
