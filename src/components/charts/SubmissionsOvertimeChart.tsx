import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import ChartTooltip from "@/components/charts/Tooltip";
import { SubmissionsOvertimeLineChartType } from "@/types";

type Props = {
  data: SubmissionsOvertimeLineChartType[];
};

const SubmissionsOvertimeChart = ({ data }: Props) => {
  return (
    <ResponsiveContainer>
      <AreaChart data={data}>
        <XAxis dataKey="time" />
        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
        <Tooltip
          cursor={{ fill: "#d1d5db", opacity: "0.15" }}
          isAnimationActive={false}
          content={({ active, payload, label }) => (
            <ChartTooltip
              active={active}
              payload={payload}
              label={label}
              valueFormatter={(number: number) =>
                `${new Intl.NumberFormat("us").format(number).toString()}`
              }
            // labelFormatter={(payload) => payload[0].payload.tooltipTitle}
            />
          )}
        />
        {/* linear gradient */}
        {/* obtained from https://www.youtube.com/watch?v=e4en8kRqwe8 */}
        <defs>
          <linearGradient id="color" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="0%" stopColor="#2451B7" stopOpacity={1.0} />
            <stop offset="95%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="submissions"
          stroke="#2451B7"
          strokeWidth={3}
          fill="url(#color)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SubmissionsOvertimeChart;
