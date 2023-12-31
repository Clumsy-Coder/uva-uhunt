export const ProblemStatus: Record<string, string> = {
  0: "Unavailable",
  1: "Normal",
  2: "Special judge",
};

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

export type VerdictType = {
  fgColor: string;
  bgColor: string;
  title: string;
};

export const Verdict: Record<string, VerdictType> = {
  0 : { fgColor: "", bgColor: "bg-gray-500",    title: "- In Queue -"         },
  10: { fgColor: "", bgColor: "bg-gray-500",    title: "Submission error"     },
  15: { fgColor: "", bgColor: "bg-gray-500",    title: "Can't be judged"      },
  20: { fgColor: "", bgColor: "bg-gray-500",    title: "- In Queue -"         },
  30: { fgColor: "", bgColor: "bg-orange-600",  title: "Compile error"        },
  35: { fgColor: "", bgColor: "bg-gray-500",    title: "Restricted function"  },
  40: { fgColor: "", bgColor: "bg-[#00AAAA]",   title: "Runtime error"        },
  45: { fgColor: "", bgColor: "bg-[#000066]",   title: "Output limit"         },
  50: { fgColor: "", bgColor: "bg-[#0000FF]",   title: "Time limit"           },
  60: { fgColor: "", bgColor: "bg-[#0000AA]",   title: "Memory limit"         },
  70: { fgColor: "", bgColor: "bg-[#FF0000]",   title: "Wrong answer"         },
  80: { fgColor: "", bgColor: "bg-[#666600]",   title: "Presentation error"   },
  90: { fgColor: "", bgColor: "bg-[#00AA00]",   title: "Accepted"             },
};

export const Language: Record<string, string> = {
  1: "ANSI C",
  2: "Java",
  3: "C++",
  4: "Pascal",
  5: "C++11",
};

/**
 * Submission data structure
 *
 * Example `https://uhunt.onlinejudge.org/api/poll/0`
 */
export type Submission = {
  /**
   * Poll ID
   */
  id: number;
  type: string;
  msg: {
    /**
     * Submission ID
     */
    sid: number;
    /**
     * User ID
     */
    uid: number;
    /**
     * Problem ID
     */
    pid: number;
    /**
     * Problem number
     */
    pnum: number;
    /**
     * Problem title
     */
    pTitle: string;
    /**
     * Verdict ID
     */
    ver: number;
    /**
     * Verdict properties
     *
     * contains 
     * - verdict title Ex: `Accepted`, or `Compile error`
     * - fgColor: tailwindcss class to use for foreground color
     * - bgColor: tailwindcss class to use for background color
     */
    verdict: {
      title: string;
      fgColor: string;
      bgColor: string;
    };
    /**
     * Language ID
     */
    lan: string;
    /**
     * Runtime in seconds
     */
    run: number;
    /**
     * Memory used for the submission
     */
    mem: number;
    /**
     * Submission rank of the problem
     */
    rank: number | string;
    /**
     * Submission time in Unix timestamp
     */
    sbt: number;
    /**
     * User's name for the submission
     */
    name: string;
    /**
     * the username of the user
     */
    uname: string;
  };
};
