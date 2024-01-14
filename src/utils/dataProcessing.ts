import { Language, Problem, ProblemVerdictMap, ProblemVerdictType } from "@/types";
import {getResponseType as submissionLangType} from '@/app/api/submissions/language/[problemNum]/route'
import { SubmissionLangType } from "@/types";
import { VerdictBarChartType } from "@/types";

export const processProblemNumBarChartData = (data: Problem) => {
  // filter out the ProblemVerdictMap object and keep keys from `filter` array
  const filter = ["ac", "pe", "wa", "tle", "mle", "ce", "re", "ole"]
  // const filteredVerdicts: Record<string, ProblemVerdictType> = {}
  // filter.forEach(( key: string ) => {
  //   filteredVerdicts[key] = ProblemVerdictMap[key]
  // })
  //
  // obtained from https://stackoverflow.com/a/69676994/3053548
  const filteredVerdicts: Record<string, ProblemVerdictType> = Object.fromEntries(filter.map(k => [k, ProblemVerdictMap[k]]))

  const processedData:VerdictBarChartType[] = []

  for(const [key, value] of Object.entries(filteredVerdicts)) {
    processedData.push({
      name: key.toUpperCase(),
      verdict: data[key as keyof Problem] as number,
      tooltipTitle: value.title,
      fill: ProblemVerdictMap[key].bgHex,
    })
  }

  return  processedData 
}

//////////////////////////////////////////////////////////////////////////////////////////////////

export const processSubmissionLanguageRadarChart = (
  data: submissionLangType,
): SubmissionLangType[] => {
  const processedData: SubmissionLangType[] = [];

  Object.entries(data).forEach(([key, value]) => {
    processedData.push({
      language: Language[key],
      count: value,
    });
  });

  return processedData;
};
