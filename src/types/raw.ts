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
]

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
  subs: RawUserSubs[]
}

//////////////////////////////////////////////////////////////////////////////////////////////////
