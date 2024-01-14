/**
 * Raw Problem data return from uhunt apo
 *
 * https://uhunt.onlinejudge.org/api/p/id/[problemNum]
 *
 * Ex: https://uhunt.onlinejudge.org/api/p/num/100
 *
 * Also used in uhunt api. NOTE: it returns an array of `RawProblem`
 * https://uhunt.onlinejudge.org/api/p
 *
 * contains the data in order
 * - problem ID
 * - problem number
 * - problem title
 * - Number of Distinct Accepted User (DACU) 
 * - Best Runtime of an Accepted Submission
 * - Best Memory used of an Accepted Submission
 * - Number of No Verdict Given (can be ignored)
 * - Number of Submission Error
 * - Number of Can't be Judged
 * - Number of In Queue
 * - Number of Compilation Error
 * - Number of Restricted Function
 * - Number of Runtime Error
 * - Number of Output Limit Exceeded
 * - Number of Time Limit Exceeded
 * - Number of Memory Limit Exceeded
 * - Number of Wrong Answer
 * - Number of Presentation Error
 * - Number of Accepted
 * - Problem Run-Time Limit (milliseconds)
 * - Problem Status (0 = unavailable, 1 = normal, 2 = special judge) 
 */
export type RawProblem = [
  /**
   * Problem ID
   */
  number,
  /**
   * Problem number
   */
  number,
  /**
   * Problem title
   */
  string,
  /**
   * Number of Distinct Accepted User (DACU)
   */
  number,
  /**
   * Best Runtime of an Accepted Submission
   */
  number,
  /**
   * Best Memory used of an Accepted Submission
   */
  number,
  /**
   * Number of No Verdict Given (can be ignored)
   */
  number,
  /**
   * Number of Submission Error
   */
  number,
  /**
   * Number of Can't be Judged
   */
  number,
  /**
   * Number of In Queue
   */
  number,
  /**
   * Number of Compilation Error
   */
  number,
  /**
   * Number of Restricted Function
   */
  number,
  /**
   * Number of Runtime Error
   */
  number,
  /**
   * Number of Output Limit Exceeded
   */
  number,
  /**
   * Number of Time Limit Exceeded
   */
  number,
  /**
   * Number of Memory Limit Exceeded
   */
  number,
  /**
   * Number of Wrong Answer
   */
  number,
  /**
   * Number of Presentation Error
   */
  number,
  /**
   * Number of Accepted
   */
  number,
  /**
   * Problem Run-Time Limit (milliseconds)
   */
  number,
  /**
   * Problem Status (0 = unavailable, 1 = normal, 2 = special judge)
   */
  number,
  number,
];

//////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Raw User sub
 *
 * contains the data in order
 * - Submission ID
 * - Problem ID
 * - Verdict ID
 * - Runtime
 * - Submission time (unix timestamp)
 * - Language ID
 * - Submission Rank
 */
export type RawUserSubs = [
  /**
   * Submission ID
   */
  number,
  /**
   * Problem ID
   */
  number,
  /**
   * Verdict ID
   */
  number,
  /**
   * Runtime
   */
  number,
  /**
   * Submission time (unix timestamp)
   */
  number,
  /**
   * Language ID
   * - 1=ANSI C
   * - 2=Java
   * - 3=C++
   * - 4=Pascal
   * - 5=C++11
   * - 6=Python
   */
  number,
  /**
   * Submission rank
   */
  number,
];

/**
 * Raw data returned when fetching from uhunt api
 *
 * https://uhunt.onlinejudge.org/api/subs-user/[userID]
 *
 * Ex: https://uhunt.onlinejudge.org/api/subs-user/339
 */
export type RawUserSubmission = {
  name: string;
  uname: string;
  subs: RawUserSubs[];
};

//////////////////////////////////////////////////////////////////////////////////////////////////
