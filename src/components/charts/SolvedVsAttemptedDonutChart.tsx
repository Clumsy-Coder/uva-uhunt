import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { SubmissionSovledVsAttempted } from "@/types";
import { cn } from "@/lib/utils";
import ChartTooltip from "@/components/charts/Tooltip";

type Props = {
  data: SubmissionSovledVsAttempted[];
};

const SolvedVsAttemptedDonutChart = ({ data }: Props) => {
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          cx="50%"
          cy="50%"
          innerRadius={120}
          outerRadius={150}
          startAngle={90}
          endAngle={-270}
          stroke=""
          strokeLinejoin="round"
          className={cn(
            "stroke-tremor-background dark:stroke-dark-tremor-background",
            // onValueChange ? "cursor-pointer" : "cursor-default",
          )}
          paddingAngle={2}
          cornerRadius={4}
        />
        <Tooltip
          content={({ active, payload, label }) => (
            <ChartTooltip
              active={active}
              payload={payload}
              label={label}
              valueFormatter={(number: number) => `${new Intl.NumberFormat("us").format(number).toString()}`}
              labelFormatter={(payload) => payload[0].payload.tooltipTitle}
            />
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SolvedVsAttemptedDonutChart;
