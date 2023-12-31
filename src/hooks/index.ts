import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { Submission } from "@/types";

/**
 * Enum for React Query Keys when using React-query
 */
export enum queryKey {
  polling = "live-polling",
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
  });
};
