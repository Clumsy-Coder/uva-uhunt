export const ProblemStatus = {
  0 : "Unavailable",
  1 : "Normal",
  2 : "Special judge"
}

/**
 * Data structure returned when querying from url `https://uhunt.onlinejudge.org/api/p/num/:num`
 *
 * Example `https://uhunt.onlinejudge.org/api/p/num/1760`
 */
export type Problem = {
  /**
   * Problem ID
   */
  pid: number;
  /**
   * Problem number
   */
  num: number;
  /**
   * Problem title
   */
  title: string;
  /**
   * Number of Distinct Accepted User (DACU)
   */
  dacu: number;
  /**
   * Best Runtime of an Accepted Submission
   */
  mrun: number;
  /**
   * Best Memory used of an Accepted Submission
   */
  mmem: number;
  /**
   * Number of No Verdict Given (can be ignored)
   */
  nover: number;
  /**
   * Number of Submission Error
   */
  sube: number;
  /**
   * Number of Can't be Judged
   */
  noj: number;
  /**
   * Number of In Queue
   */
  inq: number;
  /**
   * Number of Compilation Error
   */
  ce: number;
  /**
   * Number of Restricted Function
   */
  rf: number;
  /**
   * Number of Runtime Error
   */
  re: number;
  /**
   * Number of Output Limit Exceeded
   */
  ole: number;
  /**
   * Number of Time Limit Exceeded
   */
  tle: number;
  /**
   * Number of Memory Limit Exceeded
   */
  mle: number;
  /**
   * Number of Wrong Answer
   */
  wa: number;
  /**
   * Number of Presentation Error
   */
  pe: number;
  /**
   * Number of Accepted
   */
  ac: number;
  /**
   * Problem Run-Time Limit (milliseconds)
   */
  rtl: number;
  /**
   * Problem Status (0 = unavailable, 1 = normal, 2 = special judge)
   */
  status: string;
  rej: number;
};

export const Verdict = {
  10 : "Submission error",
  15 : "Can't be judged",
  20 : "In queue",
  30 : "Compile error",
  35 : "Restricted function",
  40 : "Runtime error",
  45 : "Output limit",
  50 : "Time limit",
  60 : "Memory limit",
  70 : "Wrong answer",
  80 : "Presentation error",
  90 : "Accepted",
}

export const Language = {
  1 : "ANSI C",
  2 : "Java",
  3 : "C++",
  4 : "Pascal",
  5 : "C++11",
}

