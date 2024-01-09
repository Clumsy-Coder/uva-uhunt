import {
  Radar,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import ChartTooltip from "@/components/charts/Tooltip";
import { processSubmissionLanguageRadarChart } from "@/utils/dataProcessing";
import { getResponseType } from "@/app/api/submissions/language/[problemNum]/route";

type Props = {
  data: getResponseType;
};

const SubmissionLanguageRadarChart = ({ data }: Props) => {
  const processedData = processSubmissionLanguageRadarChart(data);
  return (
    <ResponsiveContainer>
      <RadarChart data={processedData} cx="50%" cy="50%" outerRadius="90%">
        <PolarGrid opacity={0.3} />
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
