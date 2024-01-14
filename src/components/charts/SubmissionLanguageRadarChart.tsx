import {
  Radar,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useTheme } from "next-themes";

import ChartTooltip from "@/components/charts/Tooltip";
import { SubmissionLangType } from "@/types";

type Props = {
  data: SubmissionLangType[];
};

const SubmissionLanguageRadarChart = ({ data }: Props) => {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer>
      <RadarChart data={data} cx="50%" cy="50%" outerRadius="90%">
        <PolarGrid opacity={theme === "dark" ? 0.3 : 1.0} />
        <PolarAngleAxis dataKey="language" />
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
        <defs>
          <radialGradient id="radarColor" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.0} />
            {/* <stop offset="70%" stopColor="#2451B7" stopOpacity={0.6} /> */}
            <stop offset="90%" stopColor="#2451B7" stopOpacity={0.9} />
          </radialGradient>
        </defs>
        <Radar
          type="monotone"
          dataKey="count"
          stroke="#2451B7"
          fill="url(#radarColor)"
          fillOpacity={0.9}
          strokeWidth={3}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SubmissionLanguageRadarChart;
