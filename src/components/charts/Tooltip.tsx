/*
 * Custom Recharts tooltip component.
 * Used in Rechart charts
*
* Code obtained from `tremor.so`
* https://github.com/tremorlabs/tremor/blob/main/src/components/chart-elements/common/ChartTooltip.tsx
*/

import { cn } from "@/lib/utils";

export const ChartTooltipFrame = ({ children }: { children: React.ReactNode }) => (
  <div
    className={cn(
      // common
      "rounded-tremor-default text-tremor-default",
      // light
      "bg-tremor-background shadow-tremor-dropdown border-tremor-border",
      // dark
      "dark:bg-dark-tremor-background dark:shadow-dark-tremor-dropdown border dark:border-dark-tremor-border",
      "rounded"
    )}
  >
    {children}
  </div>
);

export interface ChartTooltipRowProps {
  value: string;
  name: string;
  color: string;
}

export const ChartTooltipRow = ({ value, name, color }: ChartTooltipRowProps) => {
  return (
  <div className="flex items-center justify-between space-x-8">
    <div className="flex items-center space-x-2">
      <span
        className={cn(
          // common
          "shrink-0 rounded-tremor-full",
          // light
          "border-tremor-background shadow-tremor-card",
          // dark
          "dark:border-dark-tremor-background dark:shadow-dark-tremor-card",
          // getColorClassNames(color, colorPalette.background).bgColor,
          // color in hex code
          `bg-[${color}]`,
          "h-3",
          "w-3",
          "rounded-md",
        )}
      />
      <p
        className={cn(
          // common
          "text-right whitespace-nowrap",
          // light
          "text-tremor-content",
          // dark
          "dark:text-dark-tremor-content",
        )}
      >
        {name}
      </p>
    </div>
    <p
      className={cn(
        // common
        "font-medium tabular-nums text-right whitespace-nowrap",
        // light
        "text-tremor-content-emphasis",
        // dark
        "dark:text-dark-tremor-content-emphasis",
      )}
    >
      {value}
    </p>
  </div>
) };

export interface ChartTooltipProps {
  active: boolean | undefined;
  payload: any;
  label: string;
  // categoryColors: Map<string, Color | string>;
  valueFormatter: {
    (value: number): string;
  }
  labelFormatter?: {
    (payload:any ) : string;
  }
}

const ChartTooltip = ({
  active,
  payload,
  label,
  // categoryColors,
  valueFormatter,
  labelFormatter
}: ChartTooltipProps) => {
  if (active && payload) {
    const filteredPayload: any[] = payload.filter((item: any) => item.type !== "none");

    return (
      <ChartTooltipFrame>
        <div
          className={cn(
            // light
            "border-tremor-border",
            // dark
            "dark:border-dark-tremor-border",
            "px-4",
            "py-2",
            "border-b",
          )}
        >
          <p
            className={cn(
              // common
              "font-medium",
              // light
              "text-tremor-content-emphasis",
              // dark
              "dark:text-dark-tremor-content-emphasis",
            )}
          >
            {labelFormatter ? labelFormatter(payload) : label}
          </p>
        </div>

        <div className={
          cn(
            "px-4",
            "py-2",
          "space-y-1"
        )
        }>
          {filteredPayload.map(({ value, name, payload }: { value: number; name: string, payload: any }, idx: number) => (
            <ChartTooltipRow
              key={`id-${idx}`}
              value={valueFormatter(value)}
              name={name}
              // color={categoryColors.get(name) ?? BaseColors.Blue}
              color={payload.fill}
            />
          ))}
        </div>
      </ChartTooltipFrame>
    );
  }
  return null;
};

export default ChartTooltip;
