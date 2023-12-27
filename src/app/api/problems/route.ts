import { uhuntAllProblemsUrl } from "@/utils/constants";

/**
 * an array of keys that will be used to convert an array of arrays into array of objects
 *
 * check `https://uhunt.onlinejudge.org/api/p` to view raw data. (each problem stats are presented as an array element)
 */
const arrKey = [
  "pid",
  "num",
  "title",
  "dacu",
  "mrun",
  "mmem",
  "nover",
  "sube",
  "noj",
  "inq",
  "ce",
  "rf",
  "re",
  "ole",
  "tle",
  "mle",
  "wa",
  "pe",
  "ac",
  "rtl",
  "status",
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
  const converted = data.map((problem: number[]) => {
    const initialValue = {};
    return problem.reduce((obj, item, index: number) => {
      return {
        ...obj,
        [arrKey[index]]: item,
      };
    }, initialValue);
  });

  return Response.json(converted);
};
