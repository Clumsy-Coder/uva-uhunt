import { uhuntAllProblemsUrl } from "@/utils/constants";
import { Problem, ProblemStatus } from "@/types";

/**
 * an array of keys that will be used to convert an array of arrays into array of objects
 *
 * check `https://uhunt.onlinejudge.org/api/p` to view raw data. (each problem stats are presented as an array element)
 */
const arrKey = [
  "pid",    // problem ID
  "num",    // problem number
  "title",  // problem title
  "dacu",   // Number of Distinct Accepted User (DACU)
  "mrun",   // Best Runtime of an Accepted Submission
  "mmem",   // Best Memory used of an Accepted Submission
  "nover",  // Number of No Verdict Given (can be ignored)
  "sube",   // Number of Submission Error
  "noj",    // Number of Can't be Judged
  "inq",    // Number of In Queue
  "ce",     // Number of Compilation Error
  "rf",     // Number of Restricted Function
  "re",     // Number of Runtime Error
  "ole",    // Number of Output Limit Exceeded
  "tle",    // Number of Time Limit Exceeded
  "mle",    // Number of Memory Limit Exceeded
  "wa",     // Number of Wrong Answer
  "pe",     // Number of Presentation Error
  "ac",     // Number of Accepted
  "rtl",    // Problem Run-Time Limit (milliseconds)
  "status", // Problem Status (0 = unavailable, 1 = normal, 2 = special judge)
  "rej",
];

export const GET = async (_request: Request) => {
  const url = uhuntAllProblemsUrl();

  const response = await fetch(url);
  // data returned is an array of array
  // ex:
  // [
  //   [
  //     36,
  //     100,
  //     "The 3n + 1 problem",
  //     ...
  //   ],
  // ]
  const data = await response.json();

  // convert an array of array into array of problems
  // ex:
  // convert
  // [
  //   [1,2,3,...],
  //   [1,2,3,...],
  // ]
  //
  // into
  // [
  //   {pid: 1, num: 2, title: 3, ...},
  //   {pid: 1, num: 2, title: 3, ...},
  // ]
  const converted = data
    .map((problem: number[]) => {
      const initialValue = {};
      return problem.reduce((obj, item, index: number) => {
        return {
          ...obj,
          [arrKey[index]]: item,
        };
      }, initialValue);
    })
    .map((problem: Problem) => {
      problem.status = ProblemStatus[problem.status];
      return problem;
    });

  return Response.json(converted);
};
