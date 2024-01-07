import { Problem, ProblemVerdictColors, ProblemVerdictMap } from "@/types";

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
  const processedData:processedProblemVerdictBarChartType[] = []

  for(const [key, value] of Object.entries(ProblemVerdictMap)) {
    processedData.push({
      name: key.toUpperCase(),
      verdict: data[key as keyof Problem] as number,
      tooltipTitle: value,
      fill: ProblemVerdictColors[key],
    })
  }

  return  processedData 
}
