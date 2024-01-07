/*
 * To display a problem number submission verdicts in a bar chart
 *
 * Uses Rechart bar chart
 */

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import { processedProblemVerdictBarChartType } from "@/utils/dataProcessing";
import ChartTooltip from "@/components/charts/Tooltip";

type Props = {
  data: processedProblemVerdictBarChartType[];
};

const ProblemVerdictChart = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} height={400}>
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
        <Tooltip
          cursor={{ fill: "#d1d5db", opacity: "0.15" }}
          isAnimationActive={false}
          content={({active, payload, label}) => 
            <ChartTooltip
              active={active}
              payload={payload}
              label={label}
              valueFormatter={(number: number) => `${new Intl.NumberFormat("us").format(number).toString()}`}
              labelFormatter={(payload) => payload[0].payload.tooltipTitle}
            />
          }
        />
        <Bar dataKey="verdict" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ProblemVerdictChart;
