/*
 * Contains all types for the upstream api server (uva uhunt https://uhunt.onlinejudge.org/api )
 *
 * This file also contains objects that are used to convert a number from any of these types
 * into a string. Ex: (submission verdict ID converted to a string).
 */

///////////////////////////////////////////////////////////////////////////////////////////////////

export const ProblemStatus: Record<string, string> = {
  0: "Unavailable",
  1: "Normal",
  2: "Special judge",
};

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Problem verdict data structure
 */
export interface ProblemVerdictType {
  /**
   * Title to be displayed on the front end
   */
  title: string;
  /**
   * Tailwindcss for background color
   * Usually used for displaying verdict using shadcn-ui `Badge` component
   */
  bgColor: string;
  /**
   * Tailwindcss for foreground color
   * Usually used for displaying verdict using shadcn-ui `Badge` component
   */
  fgColor: string;
  /**
   * Hexcode of property `bgColor`
   * Usually used for displaying verdict using shadcn-ui `Badge` component
   */
  bgHex: string;
  /**
   * Hexcode of property `fgColor`
   * Usually used for displaying verdict using shadcn-ui `Badge` component
   */
  fgHex: string;
}

const ProblemVerdictMap: Record<string, ProblemVerdictType> = {
  /**
   * Number of Accepted
   */
  ac: {
    title: "Accepted",
    bgColor: "bg-[#00AA00]",
    fgColor: "text-primary-foreground dark:text-secondary-foreground",
    bgHex: "#00AA00",
    fgHex: "",
  },
  /**
   * Number of Presentation Error
   */
  pe: {
    title: "Presentation error",
    bgColor: "bg-[#666600]",
    fgColor: "text-primary-foreground dark:text-secondary-foreground",
    bgHex: "#666600",
    fgHex: "",
  },
  /**
   * Number of Wrong Answer
   */
  wa: {
    title: "Wrong answer",
    bgColor: "bg-[#FF0000]",
    fgColor: "text-primary-foreground dark:text-secondary-foreground",
    bgHex: "#FF0000",
    fgHex: "",
  },
  /**
   * Number of Time Limit Exceeded
   */
  tle: {
    title: "Time limit exceeded",
    bgColor: "bg-[#0000FF]",
    fgColor: "text-primary-foreground dark:text-secondary-foreground",
    bgHex: "#0000FF",
    fgHex: "",
  },
  /**
   * Number of Memory Limit Exceeded
   */
  mle: {
    title: "Memory limit exceeded",
    bgColor: "bg-[#0000AA]",
    fgColor: "text-primary-foreground dark:text-secondary-foreground",
    bgHex: "#0000AA",
    fgHex: "",
  },
  /**
   * Number of Compilation Error
   */
  ce: {
    title: "Compile error",
    bgColor: "bg-orange-600",
    fgColor: "text-primary-foreground dark:text-secondary-foreground",
    bgHex: "#EA5A0C",
    fgHex: "",
  },
  /**
   * Number of Runtime Error
   */
  re: {
    title: "Runtime error",
    bgColor: "bg-[#00AAAA]",
    fgColor: "text-primary-foreground dark:text-secondary-foreground",
    bgHex: "#00AAAA",
    fgHex: "",
  },
  /**
   * Number of Output Limit Exceeded
   */
  ole: {
    title: "Output limit exceeded",
    bgColor: "bg-[#000066]",
    fgColor: "text-primary-foreground dark:text-secondary-foreground",
    bgHex: "#000066",
    fgHex: "",
  },
  /**
   * Number of Submission Error
   */
  sube: {
    title: "Submission Error",
    bgColor: "bg-gray-500",
    fgColor: "text-primary-foreground dark:text-secondary-foreground",
    bgHex: "6b7280",
    fgHex: "",
  },
  /**
   * Number of Can't be Judged
   */
  noj: {
    title: "Can't be judged",
    bgColor: "bg-gray-500",
    fgColor: "text-primary-foreground dark:text-secondary-foreground",
    bgHex: "6b7280",
    fgHex: "",
  },
  /**
   * Number of In Queue
   */
  inq: {
    title: "- In Queue -",
    bgColor: "bg-gray-500",
    fgColor: "text-primary-foreground dark:text-secondary-foreground",
    bgHex: "6b7280",
    fgHex: "",
  },
  /**
   * Number of Restricted Function
   */
  rf: {
    title: "Restricted function",
    bgColor: "bg-gray-500",
    fgColor: "text-primary-foreground dark:text-secondary-foreground",
    bgHex: "6b7280",
    fgHex: "",
  }
}
// adding keys from `Submission.ver` into object `ProblemVerdictMap`
// will reduce the duplicate code
// these verdict IDs have the same styling properties
ProblemVerdictMap["0"]  = {...ProblemVerdictMap.inq  };
ProblemVerdictMap["10"] = {...ProblemVerdictMap.sube };
ProblemVerdictMap["15"] = {...ProblemVerdictMap.noj  };
ProblemVerdictMap["20"] = {...ProblemVerdictMap.inq  };
ProblemVerdictMap["30"] = {...ProblemVerdictMap.ce   };
ProblemVerdictMap["35"] = {...ProblemVerdictMap.rf   };
ProblemVerdictMap["40"] = {...ProblemVerdictMap.re   };
ProblemVerdictMap["45"] = {...ProblemVerdictMap.ole  };
ProblemVerdictMap["50"] = {...ProblemVerdictMap.tle  };
ProblemVerdictMap["60"] = {...ProblemVerdictMap.mle  };
ProblemVerdictMap["70"] = {...ProblemVerdictMap.wa   };
ProblemVerdictMap["80"] = {...ProblemVerdictMap.pe   };
ProblemVerdictMap["90"] = {...ProblemVerdictMap.ac   };
export { ProblemVerdictMap };

///////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////

export const Language: Record<string, string> = {
  1: "ANSI C",
  2: "Java",
  3: "C++",
  4: "Pascal",
  5: "C++11",
};

///////////////////////////////////////////////////////////////////////////////////////////////////

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
     * - title: verdict title Ex: `Accepted`, or `Compile error`
     * - fgColor: tailwindcss class to use for foreground color
     * - bgColor: tailwindcss class to use for background color
     * - fgHex: hexcode of the property `fgColor`
     * - bgHex: hexcode of property `bgColor`
     */
    verdict: ProblemVerdictType;
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

///////////////////////////////////////////////////////////////////////////////////////////////////

