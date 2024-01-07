import { Problem, ProblemVerdictMap, ProblemVerdictType } from "@/types";

export type processedProblemVerdictBarChartType = {
  /**
   * Name of the bar in the bar chart.
   * usually the verdict acronyms
   */
  name: string;
  /**
   * The value of the verdict
   */
  verdict: number;
  /**
   * Tooltip title to display.
   * Usually would be the full string of a verdict
   */
  tooltipTitle: string;
  /**
   * Color for bar
   */
  fill: string;
};
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

  const processedData:processedProblemVerdictBarChartType[] = []

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
